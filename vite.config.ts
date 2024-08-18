import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react'; // 추가: React 플러그인 가져오기

export default defineConfig({
  plugins: [
    react(),
    // cssInjectedByJsPlugin({ topExecutionPriority: false }),
    dts({
      insertTypesEntry: true,
      tsconfigPath: 'tsconfig.node.json',
    }),
    viteTsconfigPaths(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, './src'),
      name: 'Barrel UI Kit',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
        banner: '"use client";',
        interop: 'compat',
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
    emptyOutDir: false,
  },
});