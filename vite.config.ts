/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig(({ mode }) => {
  if (mode == "lib") {
    return {
      plugins: [
        react(),
        viteStaticCopy({
          targets: [
            { src: "./src/lib/package.json", dest: "./" },
            { src: "./README.md", dest: "./" },
            { src: "./src/lib/index.d.ts", dest: "./" }
          ]
        })
      ],
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
