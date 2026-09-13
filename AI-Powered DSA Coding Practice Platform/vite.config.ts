import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            if (id.includes('@supabase')) {
              return 'supabase-vendor';
            }
            if (id.includes('monaco-editor') || id.includes('@monaco-editor')) {
              return 'monaco-vendor';
            }
            if (id.includes('lucide-react')) {
              return 'icons-vendor';
            }
            if (id.includes('pdfjs-dist') || id.includes('jspdf') || id.includes('html2canvas')) {
              return 'pdf-vendor';
            }
          }
          if (id.includes('/src/lib/stlProblems')) {
            return 'problems-stl';
          }
          if (id.includes('/src/lib/oopProblems')) {
            return 'problems-oop';
          }
          if (id.includes('/src/lib/functionProblems')) {
            return 'problems-functions';
          }
          if (id.includes('/src/lib/w3cProblems')) {
            return 'problems-w3c';
          }
          if (id.includes('/src/lib/mathProblems')) {
            return 'problems-math';
          }
        },
      },
    },
    chunkSizeWarningLimit: 2500,
  },
});

