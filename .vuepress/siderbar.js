const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'
const BROWSER_PATH = '/blogs/browser'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/base'),
    createSideBarConfig('JS-手写', BROWSER_PATHBROWSER_PATH + '/handwritten'),
  ],
  BROWSER_PATH: [
    createSideBarConfig('浏览器', BROWSER_PATH),
  ],
}