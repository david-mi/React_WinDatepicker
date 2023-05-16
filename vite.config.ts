/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig(({ mode }) => {
  console.log(mode)
  if (mode == "lib") {
    return {
      plugins: [react(), libInjectCss()],
      build: {
        lib: {
          entry: resolve(__dirname, "src/lib/index.tsx"),
          name: "react-windate",
          fileName: "index"
        },
        outDir: "dist",
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
            },
          },
        },
      },
    }
  }

  return {
    plugins: [react()],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: "./tests.setup.ts"
    },
  }
})
