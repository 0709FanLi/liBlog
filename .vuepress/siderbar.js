const { createSideBarConfig } = require('./util')
const JAVASCRIPT_PATH = '/blogs/javascript'

module.exports = {
  [JAVASCRIPT_PATH]: [
    createSideBarConfig('JS-基础', JAVASCRIPT_PATH + '/base'),
    createSideBarConfig('JS-手写', JAVASCRIPT_PATH + '/handwritten'),
  ]
}