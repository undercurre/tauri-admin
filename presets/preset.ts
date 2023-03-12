import Unocss from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default [
  Unocss(),
  vue(),
  vueJsx(),
  AutoImport({
    include: [/\.[tj]s?$/, /\.[tj]sx?$/, /\.vue$/],
    imports: [
      'vue',
      'pinia',
      'vue-router',
      {
        'naive-ui': [
          'useDialog',
          'useMessage',
          'useNotification',
          'useLoadingBar',
        ],
      },
    ],
    dts: './src/types/auto-imports.d.ts',
  }),
  Components({
    dirs: ['src/components/'], // 我地滴组件肯定写启哩到葛嘛
    extensions: ['vue'], //  // 组件的有效文件扩展名
    include: [/\.vue$/, /\.vue\?vue/], // 扫描范围
    resolvers: [
      NaiveUiResolver(), // PC端UI库
      IconsResolver({ customCollections: ['custom'] }),
    ], // ui库解析器
    dts: './src/types/components.d.ts', // 要生成相应的类，不然过不了ts
  }),
  Icons({
    compiler: 'vue3', // 适应vue3依赖
    autoInstall: true, // 自动安装
  }),
]
