import { defineConfig } from 'vite';
export default defineConfig({
    plugins: [
    ],
    css: {
        preprocessorOptions: {
            scss: {}
        }
    },
    build: {
        outDir: 'dist',
        assetsDir: 'assets'
    }
});