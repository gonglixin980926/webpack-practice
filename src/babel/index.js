const babelParse = require("@babel/parser")
const { transformFromAst } = require("@babel/core")
const fs = require("fs")
const path = require("path")

const indexJsPath = path.resolve(__dirname, 'output/index.js')
// const indexMapJsPath = path.resolve(__dirname, 'output/index.map.js')
const indexJsonPath = path.resolve(__dirname, 'output/index.json')
const sourceCodePath = path.resolve(__dirname, 'sourceCode.js')

const { insertParametersPlugin } = require('./plugin/insertConsoleInfo.js')

// console.log 中添加文件名称
const sourceCodeFile = fs.readFileSync(sourceCodePath)
const sourceCode = sourceCodeFile.toLocaleString()

const ast = babelParse.parse(sourceCode, {
    sourceType: 'unambiguous',
    plugins: ['jsx'],
    sourceFilename: sourceCodePath
})


const { code } = transformFromAst( ast, sourceCode, {
    plugins: [insertParametersPlugin]
})
// const { code, map } = babelGenerator(ast)
fs.writeFileSync(indexJsonPath,JSON.stringify(ast))
fs.writeFileSync(indexJsPath,code)
// fs.writeFileSync(indexMapJsPath,map)
