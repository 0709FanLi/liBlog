const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const BROWSER_PATH = '/blogs/browser'
const VUE_PATH = '/blogs/vue'
const CSS_PATH = '/blogs/css'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/base'),
    createSideBarConfig('JS-手写', JAVASCRIPT_PATH + '/handwritten'),
  ],
  [BROWSER_PATH]: [
    createSideBarConfig('网络', BROWSER_PATH + '/net'),
    //  compatible  兼容性
    createSideBarConfig('安全', BROWSER_PATH + '/safe'),
    createSideBarConfig('渲染', BROWSER_PATH + '/render'),
    createSideBarConfig('兼容性', BROWSER_PATH + '/compatible'),
  ],
  [VUE_PATH]: [
    createSideBarConfig('vue', VUE_PATH + '/vue2.x'),
  ],
  [CSS_PATH]: [
    createSideBarConfig('css', CSS_PATH),
  ],
}