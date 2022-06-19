import fs from 'fs-extra'
import { join } from 'path'

rmDir()

function rmDir() {
  const files = fs.readdirSync('dist')

  for (let i = 0; i < files.length; i++) {
    if (fs.statSync(join('dist', files[i])).isDirectory()) {
      if (fs.existsSync(join('dist', files[i], 'demo'))) {
        fs.removeSync(join('dist', files[i], 'demo'))
      }
      if (fs.existsSync(join('dist', files[i], 'test'))) {
        fs.removeSync(join('dist', files[i], 'test'))
      }
      if (fs.existsSync(join('dist', files[i], 'README.en-US.md'))) {
        fs.removeSync(join('dist', files[i], 'README.en-US.md'))
      }
      if (fs.existsSync(join('dist', files[i], 'README.md'))) {
        fs.removeSync(join('dist', files[i], 'README.md'))
      }
    }
  }
}
