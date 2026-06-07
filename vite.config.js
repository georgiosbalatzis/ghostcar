import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/ghostcar/",
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // No explicit manualChunks for 'three' — named imports in useScene.js
        // allow Rollup to tree-shake unused Three.js classes. SceneStage3D is
        // already lazy-imported so the three code stays out of the initial bundle.
        manualChunks(id) {
          // Keep React in a predictable chunk for long-term caching
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react-vendor";
          }
        },
      },
    },
  },
});
