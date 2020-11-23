import { observable, computed, autorun, action, observe, reaction } from "mobx"
import axios from 'axios'
import "reflect-metadata"
// import './decorator-demo'
import './rxjs-demo'


// import './type-demo'
// import './ts-demo'
// class OrderLine {
//     @observable price = 0
//     @observable amount = 1

//     @computed get total() {
//         console.log(this.price)
//         return this.price * this.amount
//     }
// }

// let ord1 = new OrderLine();
// // setTimeout(()=>{
// //     a.price = 3
// // },1000)
// // console.log(a.total)



// var person = observable({
//     // observable 属性:
//     name: "John",
//     age: 42,
//     showAge: false,

//     // 计算属性:
//     get labelText() {
//         return this.showAge ? `${this.name} (age: ${this.age})` : this.name;
//     },

//     // 动作:
//     setAge(age: number) {
//         this.age = age;
//     }
// }, {
//     setAge: action
// });



// 对象属性没有暴露 'observe' 方法,
// 但不用担心, 'mobx.autorun' 功能更加强大
// autorun(() => {
//     console.log(ord1.price)
//     console.log(person.age)
//     console.log(person.labelText)
// });

// setTimeout(()=>{
//     person.age = 30
// },2000)

// setTimeout(()=>{
//     ord1.price = 2
    
// },3000)

// person.name = "Dave";
// // 输出: 'Dave'
// setTimeout(()=>{
//     person.name = "allen"
// },1000)

// person.setAge(21);
// 等等

// var todos = observable([
//     { title: "Spoil tea", completed: true },
//     { title: "Make coffee", completed: false }
// ]);

// autorun(() => {
//     console.log("Remaining:", todos
//         .filter(todo => !todo.completed)
//         .map(todo => todo.title)
//         .join(", ")
//     );
// });
// // 输出: 'Remaining: Make coffee'

// todos[0].completed = false;
// // 输出: 'Remaining: Spoil tea, Make coffee'

// todos[2] = { title: 'Take a nap', completed: false };
// // 输出: 'Remaining: Spoil tea, Make coffee, Take a nap'

// setTimeout(()=>{
//     todos[0] = {title: 'wwdwafdaap', completed: false };
// },1000)
// // 输出: 'Remaining: Make coffee, Take a nap'

// var arr = observable([1,2,3,4,5])
// autorun(() => {
//     console.log("Remaining:", arr.join(','));
// });
// setTimeout(()=>{
//     arr[0] = 2;
// },1000)


// const enName = observable.box("vienna")
// console.log(enName.get())
// enName.observe((change)=>{
//     const {oldValue, newValue} = change
//     console.log(`oldValue=${oldValue}-----newValue=${newValue}`)
// })
// enName.set("test")

// reaction(()=>[person.age],([age])=>{
//     console.log(age)
// }, {fireImmediately: true})

// setTimeout(()=>{
//     person.age = 30
// },1000)

// class Ticker {
//     @observable tick = 0

//     @observable time = 12

//     @computed 
//     get testComp(){
//         if(this.time===12){
//             return true
//         }else{
//             return false
//         }
//     }
    
//     @action
//     changeTime() {
//         this.time = 15
//     }

//     @action.bound
//     increment() {
//         this.tick++ // 'this' 永远都是正确的
//     }
// }

// console.log(`----`)
// console.log(`----`)
// let ticker = new Ticker()

// console.log(ticker.testComp)
// autorun(()=>{console.log(ticker.testComp)})

// setTimeout(() => {
//       ticker.time = 15
// }, 1000);
// setTimeout(() => {
//     ticker.time = 12
// }, 2000);

// reaction(()=>{
//     if(ticker.time === 15){
//         return false
//     }else{
//         return true
//     }
// },(bol)=>{
//     console.log(bol)
// },{fireImmediately: true})


// function timer(seconds: number){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log(`timer`)
//             resolve()
//         },seconds)
//     })
// }
// timer(4000)

// let a = {
//     name: 'allen',
//     child:{
//         number:'test'
//     }
// }
// console.log(a?.child?.number)

console.log(`ss`)
let arr = [1,3,4,5]
arr.forEach(item=>{
    console.log(item)
})
console.log('sssss')