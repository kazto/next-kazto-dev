import { build } from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

// Build server
build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  outfile: 'dist/index.js',
  format: 'cjs',
  external: ['react', 'react-dom'],
})

// Build styles
build({
  entryPoints: ['styles/styles.scss'],
  bundle: true,
  outfile: 'dist/public/styles.css',
  plugins: [sassPlugin()],
  loader: {
    '.webp': 'file',
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
  },
  assetNames: 'assets/[name]-[hash]',
})