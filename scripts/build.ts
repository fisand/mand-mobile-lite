import klaw from 'klaw-sync'
import ora from 'ora'
import { resolve } from 'path'
import { copy } from 'fs-extra'

const base = resolve(__dirname, '../components')
const files = klaw(base, {
  nodir: true,
  filter(item) {
    return !(item.path.endsWith('.md') || item.path.includes('demo') || item.path.includes('test'))
  }
})

;(async () => {
  const spinner = ora(`Copying`).start()
  for (let i of files) {
    await copy(i.path, i.path.replace('components', 'dist'))
  }
  spinner.succeed('Done!')
})()
