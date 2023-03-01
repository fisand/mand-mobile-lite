import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue2'
import Unocss from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  define: {
    'process.env.MAND_ENV': JSON.stringify(''),
    'MAN_VERSION': JSON.stringify('0.0.4'),
  },
  plugins: [Vue(), Unocss()],
  css: {
    preprocessorOptions: {
      stylus: {
        additionalData: `
          @require "${resolve(__dirname, 'components/_style/mixin/theme.variable.styl')}"
          @require "${resolve(__dirname, 'components/_style/mixin/util.styl')}"
        `
      },
    },
  },
  root: 'playground',
})
