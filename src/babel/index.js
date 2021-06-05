const babelTemplate = require("@babel/template")
const babelTypes = require("@babel/types")
const babelParse = require("@babel/parser")
const babelTraverse = require("@babel/traverse").default
const babelGenerator = require("@babel/generator").default
const fs = require("fs")
const path = require("path")

const indexJsPath = path.resolve(__dirname, 'output/index.js')
// const indexMapJsPath = path.resolve(__dirname, 'output/index.map.js')
const indexJsonPath = path.resolve(__dirname, 'output/index.json')
const sourceCodePath = path.resolve(__dirname, 'sourceCode.js')


// console.log 中添加文件名称
const sourceCodeFile = fs.readFileSync(sourceCodePath)
const sourceCodeFileName = path.basename(sourceCodePath)
const sourceCode = sourceCodeFile.toLocaleString()

const ast = babelParse.parse(sourceCode, {
    sourceType: 'unambiguous',
    plugins: ['jsx'],
    sourceFilename: sourceCodePath
})
const consoleProperties = ['log','info','error','warn','debug']
const targetCallName = consoleProperties.map( item => `console.${item}`)

babelTraverse(ast,{
    CallExpression(path, state) {
        const { callee, arguments } = path.node
        // const { object:{ name: callObjectName}, property: { name: propertyName } } = callee
        // if ( babelTypes.isMemberExpression(callee)
        //     && callObjectName === 'console'
        //     && consoleProperties.includes(propertyName)
        //    ) {
        //     const { line, column } = path.node.loc.start;
        //     arguments.unshift(babelTypes.stringLiteral(`filename: ${sourceCodeFileName} (${line}, ${column})`))
        // }
        const calleeName = path.get('callee').toString() // babelGenerator(path.node.callee).code
        if(targetCallName.includes(calleeName)){
            arguments.unshift(babelTypes.stringLiteral(`${sourceCodeFileName}: `))
        }
    }
})
const { code, map } = babelGenerator(ast)
fs.writeFileSync(indexJsonPath,JSON.stringify(ast))
fs.writeFileSync(indexJsPath,code)
console.log(map)
// fs.writeFileSync(indexMapJsPath,map)
