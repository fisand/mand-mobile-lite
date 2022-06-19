import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [{ input: 'components/', outDir: 'dist' }],
  externals: ['vue'],
  outDir: 'dist',
})
