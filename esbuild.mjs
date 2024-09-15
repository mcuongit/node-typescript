import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  platform: 'node',
  outdir: 'bundle',
  minify: true,
  tsconfig: 'tsconfig.json',
  sourcemap: true
})
