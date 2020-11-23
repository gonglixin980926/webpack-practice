// 链式调用
// Function.prototype.getName = function(){
//     console.log(this['name']);
//     return this
// }
// var checkObj = function(){}
// checkObj.prototype.addAttribute = function (key,value){
//     this[key] = value    
//     return this
// }
// checkObj.prototype.printObj = function(){
//     console.log(JSON.stringify(this))
//     return this
// }

// let a = new checkObj()  
// a.addAttribute('name','allen').printObj()


// console.log(a.getName)


// // 添加方法
// Function.prototype.addMethod = function(name, fn){
//     this.prototype[name] = fn
//     return this
// }

// var c = function(){}
// c.addMethod('test',function(){
//     console.log(`----`)
//     console.log(this);
//     return this
// }).addMethod('test1',function(){
//     console.log(`test1`)
//     console.log(this)
//     return this
// })

// var m = new c()
// m.test().test1()

// console.log(this)
// let o1 = {
//     name:'allen',
//     fn:function(){
//         console.log(this)
//     },
//     f2:()=>{
//         console.log(this)
//     }
// }
// o1.fn()
// o1.f2()

//可用来判断是否是new创建
// var Demo = function(){}
// Demo.prototype.show = function(){
//     console.log(this instanceof Demo)
// }
// let obj = new Demo()
// obj.show()
// let obj2 = Demo()
// console.log(obj2)

let obt = document.getElementById('oBt')
console.log(obt)
obt.addEventListener('click',()=>{
    let ipt = document.getElementById('iPt')
    console.log(ipt)
    console.log(ipt.value)
},false)

let arr = [2,3,45,6]
arr.forEach((item,index)=>{console.log(item)})
let a = []
if(a){
    console.log(`a为空`)
}
let testBool = [false,true]
let bo = testBool.every(item=>item)
console.log(bo)
console.log(`注释`)