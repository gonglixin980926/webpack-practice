const targetCalleeName = ['log', 'info', 'error', 'debug', 'warn'].map(item => `console.${item}`)
const autoTrackPlugin = ( {types, template} ) =>{
    return {
        pre(file){

        },
        visitor: {
            Program: {
                enter(path, state){
                    let imported
                    path.traverse({
                        ImportDeclaration(currPath){
                            const source = currPath.node.source.value
                            if(source === ""){
                                imported = true
                            }
                        },
                        'StringLiteral|TemplateLiteral'(path){
                            console.log(path)
                        }
                    })
                    if(!imported){
                        const uid = path.scope.generateUid('intl')
                        const importAst = template.ast(`import ${uid} from 'intl'`)
                        path.node.body.unshift(importAst)
                        state.intlUid = uid
                    }
                }
            }
        },
        post(file){

        }
    }
}
exports = autoTrackPlugin