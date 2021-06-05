// 给你一把"螺丝刀"——recast
const recast = require("recast");

const fs = require("fs")
const path = require("path")

const demoPath = path.resolve(__dirname,"demo.json")
const demo2Js = path.resolve(__dirname,"demo2.js")
// 引入变量声明，变量符号，函数声明三种“模具”
const {variableDeclaration, variableDeclarator, functionExpression} = recast.types.builders

// 你的"机器"——一段代码
// 我们使用了很奇怪格式的代码，想测试是否能维持代码结构
const code =
  `
  var a = 5
  // 这是一段注释
  function add(a, b) {
    return a +
      // 有什么奇怪的东西混进来了
      b
  }
  `
// 用螺丝刀解析机器
const ast = recast.parse(code);
const add  = ast.program.body[0]

fs.writeFileSync(demoPath,JSON.stringify(ast))
// console.log(JSON.stringify(ast))

// ast可以处理很巨大的代码文件
// 但我们现在只需要代码块的第一个body，即add函数

// console.log(JSON.stringify(add))

// 将准备好的组件置入模具，并组装回原来的ast对象。
// ast.program.body[0] = variableDeclaration("const", [
//     variableDeclarator(add.id, functionExpression(
//       null, // Anonymize the function expression.
//       add.params,
//       add.body
//     ))
//   ]);

//   //将AST对象重新转回可以阅读的代码
//   const output = recast.print(ast).code;
// fs.writeFileSync(demo2Js,output)

  // console.log(output)