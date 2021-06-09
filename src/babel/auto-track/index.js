const fs = require("fs")
const path = require("path")
const { transformFromAstSync } = require("@babel/core")
const autoTrack  = require("./plugin/auto-track.js")
const babelParse = require("@babel/parser")
const outputJson = path.join(__dirname,"./output/index.json")

const sourceCodePath = path.join(__dirname,"sourceCode.js")
const sourceCode = fs.readFileSync(sourceCodePath, {
    encoding: 'utf-8'
})

const parseCodePath = path.join(__dirname,"./output/parseCode.js")


const ast = babelParse.parse(sourceCode, {
    sourceType: 'unambiguous',
    sourceFilename: sourceCodePath
})

fs.writeFileSync(outputJson, JSON.stringify(ast))

const { code } = transformFromAstSync( ast, sourceCode, {
    plugins: [[autoTrack, {trackerPath: "track"}]]
})

fs.writeFileSync(parseCodePath, code)
