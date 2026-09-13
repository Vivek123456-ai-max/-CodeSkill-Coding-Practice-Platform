with open('src/lib/supabase.ts', 'r') as f:
    code = f.read()

# Replace syncAllProblemsToSupabase implementation with intelligent retry and detailed diagnostic reporting
old_sync_start = code.find('async syncAllProblemsToSupabase(): Promise<number>')
if old_sync_start != -1:
    old_sync_end = code.find('async deleteProblem', old_sync_start)
    new_sync_code = """async syncAllProblemsToSupabase(): Promise<{ count: number; error?: string }> {
    const problems = await this.getProblems();
    let count = 0;
    let lastError: any = null;
    const batchSize = 10;

    for (let i = 0; i < problems.length; i += batchSize) {
      const batchFull = problems.slice(i, i + batchSize).map((p) => ({
        id: p.id,
        book: p.book || 'patterns',
        order_index: p.order_index || (i + 1),
        user_id: null,
        title: p.title,
        slug: p.slug,
        description: p.description,
        difficulty: p.difficulty,
        category: p.category,
        tags: p.tags,
        source: p.source,
        sample_test_cases: p.sample_test_cases,
        starter_templates: p.starter_templates,
        status: p.status,
      }));

      try {
        const { error } = await db.from('problems').upsert(batchFull, { onConflict: 'id' });
        if (!error) {
          count += batchFull.length;
        } else {
          lastError = error;
          console.warn('Full batch upsert error, trying minimal columns:', error);
          
          // Retry without book & order_index in case columns are missing in user DB
          const batchFallback = batchFull.map((p) => ({
            id: p.id,
            user_id: null,
            title: p.title,
            slug: p.slug,
            description: p.description,
            difficulty: p.difficulty,
            category: p.category,
            tags: p.tags,
            source: p.source,
            sample_test_cases: p.sample_test_cases,
            starter_templates: p.starter_templates,
            status: p.status,
          }));

          const { error: fallbackError } = await db.from('problems').upsert(batchFallback, { onConflict: 'id' });
          if (!fallbackError) {
            count += batchFallback.length;
          } else {
            lastError = fallbackError;
            console.error('Fallback batch upsert error:', fallbackError);
          }
        }
      } catch (e: any) {
        lastError = e;
        console.error('Batch sync exception:', e);
      }
    }

    if (count === 0 && lastError) {
      return { count: 0, error: lastError.message || JSON.stringify(lastError) };
    }
    return { count };
  },\n\n  """
    code = code[:old_sync_start] + new_sync_code + code[old_sync_end:]

with open('src/lib/supabase.ts', 'w') as f:
    f.write(code)

print("Updated syncAllProblemsToSupabase with retry and diagnostic error return")
