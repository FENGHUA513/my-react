'use strict'
const path = require('path')
const fs = require('fs')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PAGE_PATH = path.resolve(__dirname, '../src/pages')
const paths = require('./paths')

// multi entries
exports.entries = function () {
  console.log(glob.sync(PAGE_PATH + '/*/*.js'), 'www')
  var entryFiles = glob.sync(PAGE_PATH + '/*/*.js')
  var map = {}
  entryFiles.forEach((filePath) => {
    var filename = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.'))
    map[filename] = filePath
  })
  return map
}

// multi page using HtmlWebpackPlugin
exports.htmlPlugin = function () {
  let pages = fs.readdirSync(PAGE_PATH)
  console.log(pages)
  let arr = []
  // filename 为 dirname/index.html
  pages.forEach((filePath) => {
    console.log(filePath, 'filePath')
    if (filePath.indexOf('.') > 0 || filePath.indexOf('.') === 0) {
      return
    }
    let filename = filePath.substring(filePath.lastIndexOf('\/') + 1)
    console.log(filename, 'filename')

    let hasEntryHtml = false
    let entryHtml = path.resolve(PAGE_PATH + '/' + filename + '/index.html')
    if (fs.existsSync(entryHtml)) {
      hasEntryHtml = true
    }
    
    arr.push(new HtmlWebpackPlugin({
      // 模板来源
      template: hasEntryHtml ? entryHtml : paths.appHtml,
      // 文件名称
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


