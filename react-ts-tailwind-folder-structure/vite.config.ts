import { defineConfig } from "vite";
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
// import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
  ],
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
    watch: {
      usePolling: true,
    },
  },
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "src")
  //   },
  // },
})