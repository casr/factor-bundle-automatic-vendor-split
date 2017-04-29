factor-bundle automatic vendor splitting
========================================

Small demonstration of how you automatically declare files as being vendor
specific. In this example, we just assume that everything in `node_modules` is
vendor related but you could modify the `threshold` function any way you see
fit.


quick start
-----------

    npm install
    npm run build
    ls -lh dist-main.js dist-vendor.js


build script
------------

```js
#!/usr/bin/env node
var browserify = require('browserify')
var fs = require('fs')
var path = require('path')

var entries = [
  path.join(__dirname, 'index.js')
]

var outputFiles = [
  path.join(__dirname, 'dist-main.js')
]

var b = browserify(entries)

b.plugin('factor-bundle', {
  output: outputFiles,
  threshold: function (row, groups) {
    // Get a relative directory to where we are building
    var rPath = path.relative(__dirname, row.file)

    // Assuming our node_modules folder is in the same directory that we are
    // building in then just declare vendor files as those presiding in it
    return !!rPath.match(/^node_modules\//)
  }
})

b.bundle().pipe(fs.createWriteStream(path.join(__dirname, 'dist-vendor.js')))
```


licence
-------

This software is released to the public domain.
