import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  publicDir: 'public',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        `,
      },
      less: {
        modifyVars: {
          "primary-color": "#318982",
        },
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  server: {
    port: 9060,
  },
});
