import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
    // Load environment variables based on the current mode (e.g. 'development', 'production')
    const env = loadEnv(mode, process.cwd(), "");

    return {
        plugins: [react(), tailwindcss()],
        build: {
            chunkSizeWarningLimit: 1000, // Increase from default 500kb to 1000kb
            rollupOptions: {
                output: {
                    manualChunks: {
                        // Split vendor chunks for better caching
                        "react-vendor": ["react", "react-dom"],
                        "three-vendor": ["three"],
                        "emailjs-vendor": ["@emailjs/browser"],
                    },
                },
            },
        },
        server: {
            proxy: {
                // Example: Use an env variable in a proxy target
                "/api": {
                    target: env.VITE_API_URL, // Make sure VITE_API_URL is defined in your .env file
                    changeOrigin: true,
                },
            },
        },
        define: {
            // Optional: Inject specific environment variables into your build
            VITE_EMAILJS_SERVICE_ID: JSON.stringify(env.VITE_EMAILJS_SERVICE_ID),
            VITE_EMAILJS_TEMPLATE_ID: JSON.stringify(env.VITE_EMAILJS_TEMPLATE_ID),
            VITE_EMAILJS_PUBLIC_KEY: JSON.stringify(env.VITE_EMAILJS_PUBLIC_KEY),
        },
    };
});
