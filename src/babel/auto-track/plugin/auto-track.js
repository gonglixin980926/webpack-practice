const fs = require("fs")
const path = require("path")

const importModule = require("@babel/helper-module-imports")

const autoTrack = (api, options, dirname) => {
    return {
        visitor:{
            Program: {
                enter(path, state){
                    // 遍历node 寻找id
                    path.traverse({
                        ImportDeclaration(curPath){
                            console.log(state.a)
                            const requirePath = curPath.get('source').node.value
                            const specifierPath = curPath.get('specifiers.0')
                            if(requirePath === options.trackerPath){
                                if(specifierPath.isImportSpecifier()){
                                    state.trackerImportId = specifierPath.toString()
                                }else{
                                    state.trackerImportId = specifierPath.get('local').toString();// tracker 模块的 id
                                }
                                path.stop()
                            }
                        }
                    })
                    // 添加导入
                    if(!state.trackerImportId){
                        const trackImport = importModule.addDefault(path, 'tracker',{
                            nameHint: path.scope.generateUid('tracker')
                        })
                        state.trackerImportId = trackImport.name // tracker 模块的 id
                        console.log( trackImport)
                        state.trackerAST = api.template.statement(`${state.trackerImportId}()`)();// 埋点代码的 AST
                        console.log(state.trackerAST)
                    }
                }
            },
            'ClassMethod|ArrowFunctionExpression|FunctionExpression|FunctionDeclaration'(path,state){
                const bodyPath = path.get('body')
                if(bodyPath.isBlockStatement()){
                    bodyPath.node.body.unshift(state.trackerAST)
                }else{
                    // 转换没有函数体的函数
                    const ast = api.template.statement(`{${state.trackerImportId}();return PREV_BODY;}`)({PREV_BODY: bodyPath.node});
                    bodyPath.replaceWith(ast);
                }
            }
        }
    }
}
module.exports = autoTrack