import { createWin } from './build'

export async function loginWin() {
  createWin('login', {
    title: '登录',
    url: '/login',
    width: 320,
    height: 420,
    resizable: false,
    alwaysOnTop: false,
  })
}

export async function mainWin() {
  createWin('main', {
    title: '主程序',
    url: '/',
    width: 900,
    height: 640,
    minWidth: 750,
    minHeight: 500,
  })
}
