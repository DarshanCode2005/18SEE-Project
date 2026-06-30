import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const isVercel = process.env.VERCEL === "1";

// Chakra hosts at /18see/; Vercel deploys at the domain root.
if (isVercel) {
  process.env.VITE_ROOT_URL = "";
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? (isVercel ? "/" : "/18see/") : "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
}));
