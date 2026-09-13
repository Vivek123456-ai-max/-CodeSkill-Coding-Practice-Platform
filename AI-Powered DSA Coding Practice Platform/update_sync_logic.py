with open('src/lib/supabase.ts', 'r') as f:
    text = f.read()

old_start = text.find('async syncAllProblemsToSupabase(): Promise<{ count: number; error?: string }> {')
if old_start != -1:
    old_end = text.find('async deleteProblem(id: string): Promise<void> {', old_start)
    new_code = """async syncAllProblemsToSupabase(): Promise<{ count: number; error?: string }> {
    const problems = await this.getProblems();
    let count = 0;
    let lastError: any = null;
    const batchSize = 10;

    let currentUserId: string | null = null;
    try {
      const { data: { session } } = await supabase.auth.getSession();
      currentUserId = session?.user?.id || null;
    } catch {}

    for (let i = 0; i < problems.length; i += batchSize) {
      const batchFull = problems.slice(i, i + batchSize).map((p) => ({
        id: p.id,
        book: p.book || 'patterns',
        order_index: p.order_index || (i + 1),
        user_id: currentUserId,
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
          const batchFallback = batchFull.map((p) => ({
            id: p.id,
            user_id: currentUserId,
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
          }
        }
      } catch (e: any) {
        lastError = e;
      }
    }

    if (count === 0 && lastError) {
      return { count: 0, error: lastError.message || JSON.stringify(lastError) };
    }
    return { count };
  },\n\n  """
    text = text[:old_start] + new_code + text[old_end:]
    with open('src/lib/supabase.ts', 'w') as f:
        f.write(text)
    print("Updated syncAllProblemsToSupabase with session user_id fallback")
