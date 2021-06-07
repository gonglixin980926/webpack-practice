const targetCalleeName = ['log', 'info', 'error', 'debug', 'warn'].map(item => `console.${item}`)
const insertParametersPlugin = ( {types, template} ) =>{
    return {
        visitor: {
            CallExpression(path, state) {
                if(path.node.isNew){
                    return
                }
                const { callee, arguments } = path.node
                // const { object:{ name: callObjectName}, property: { name: propertyName } } = callee
                // if ( types.isMemberExpression(callee)
                //     && callObjectName === 'console'
                //     && consoleProperties.includes(propertyName)
                //    ) {
                //     const { line, column } = path.node.loc.start;
                //     arguments.unshift(types.stringLiteral(`filename: ${sourceCodeFileName} (${line}, ${column})`))
                // }
                const calleeName = path.get('callee').toString() // babelGenerator(path.node.callee).code
                if(targetCalleeName.includes(calleeName)){
                    arguments.unshift(types.stringLiteral(`fileName `))
                    const newNode = template.expression(`console.log("这是新生产的代码")`)()
                    newNode.isNew = true
                    if (path.findParent(path => path.isJSXElement())) {
                        // console.log(newNode)
                        path.replaceWith(types.arrayExpression([newNode, path.node]))
                        path.skip();
                    } else {
                        path.insertBefore(newNode);
                    }
                }
            }
        }
    }
}
exports = {
    insertParametersPlugin
}