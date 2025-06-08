import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './components'),
            '@interfaces': path.resolve(__dirname, './interfaces'),
            '@utils': path.resolve(__dirname, './utils'),
        },
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/client/main.tsx'),
                styles: path.resolve(__dirname, 'styles/styles.scss'),
            },
            output: {
                dir: 'dist/public',
                entryFileNames: '[name].js',
                assetFileNames: '[name].[ext]',
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "${path.resolve(__dirname, 'styles/styles.scss')}";`,
            },
        },
    },
})
