import { WebviewWindow, getAll, WindowOptions } from '@tauri-apps/api/window'
import defaultConfig from './config'

// 创建新窗口
export async function createWin(label: string, options: WindowOptions) {
  const args: WindowOptions = Object.assign({}, defaultConfig, options)

  const mainWin = getAll().find(
    (w) => w.label.indexOf('main') > -1 && w.label != label
  )

  // 是否主窗口
  if (label.indexOf('main') > -1) {
    console.log('即将创建窗口是主窗口')
    await mainWin?.hide()
  }

  // 创建窗口对象
  const win = new WebviewWindow(label, args)
  // 是否最大化
  if (args.maximized && args.resizable) {
    win.maximize()
  }

  // 窗口创建完毕/失败
  win.once('tauri://created', async () => {
    console.log('window create success!')
    await win?.show()
    getAll().forEach(async (item) => await item.close())
  })

  win.once('tauri://error', async (res) => {
    console.log('window create error!', res)
  })
}