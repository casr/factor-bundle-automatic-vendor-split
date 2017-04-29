var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')

document.querySelector('body').appendChild(createElement(h('h1', 'Hello world')))
