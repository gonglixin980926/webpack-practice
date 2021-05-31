const recast = require("recast")
const path = require("path")
const fs = require("fs")
const demoJson = path.resolve(__dirname, "output.json")
const visitExpressionStatement = path.resolve(__dirname, "./output/visitExpressionStatement.js")
const visitIdentifier = path.resolve(__dirname, "./output/visitIdentifier.js")
const TNT = recast.types.namedTypes
recast.run( function(ast, printSource){
    recast.visit(ast,{
        visitExpressionStatement: (node)=>{
            // console.log("visitExpressionStatement",node)
            console.log(TNT.ExpressionStatement.check(node), "ExpressionStatement")
            if(TNT.ExpressionStatement.check(node)){
                console.log(node)
              }
            fs.appendFileSync(visitExpressionStatement,node)
            return false
        }
    })
    // printSource(ast)
})