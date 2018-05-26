'use strict'
const path = require('path')
const fs = require('fs')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PAGE_PATH = path.resolve(__dirname, '../src/pages')
const paths = require('./paths')

// multi entries
exports.entries = function (polyfills, hot) {
  var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  var map = {}
  entryFiles.forEach((filePath) => {
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    if (process.env.NODE_ENV !== 'production') {
      map[filename] = [filePath, hot, polyfills]
    } else {
      map[filename] = [filePath, polyfills]
    }
  })
  return map
}

// multi page using HtmlWebpackPlugin
exports.htmlPlugin = function () {
  let pages = fs.readdirSync(PAGE_PATH)
  let arr = []
  pages.forEach((filePath) => {
    if (filePath.indexOf('.') > 0 || filePath.indexOf('.') === 0) {
      return
    }
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1)

    let hasEntryHtml = false
    let entryHtml = path.resolve(PAGE_PATH + '/' + filename + '/index.html')
    if (fs.existsSync(entryHtml)) {
      hasEntryHtml = true
    }
    
    arr.push(new HtmlWebpackPlugin({
      template: hasEntryHtml ? entryHtml : paths.appHtml,
      filename: filename + '/index.html',
      chunks: ['manifest', 'vendor', filename],
      inject: true,
      inlineSource: 'manifest',
      env: process.env.NODE_ENV,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      }
    }))
  })
  return arr
}


