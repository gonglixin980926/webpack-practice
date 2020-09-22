"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
console.log("----");
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
var Ticker = /** @class */ (function () {
    function Ticker() {
        this.tick = 0;
        this.time = 12;
    }
    Object.defineProperty(Ticker.prototype, "testComp", {
        get: function () {
            if (this.time === 12) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: false,
        configurable: true
    });
    Ticker.prototype.changeTime = function () {
        this.time = 15;
    };
    Ticker.prototype.increment = function () {
        this.tick++; // 'this' 永远都是正确的
    };
    __decorate([
        mobx_1.observable
    ], Ticker.prototype, "tick", void 0);
    __decorate([
        mobx_1.observable
    ], Ticker.prototype, "time", void 0);
    __decorate([
        mobx_1.computed
    ], Ticker.prototype, "testComp", null);
    __decorate([
        mobx_1.action
    ], Ticker.prototype, "changeTime", null);
    __decorate([
        mobx_1.action.bound
    ], Ticker.prototype, "increment", null);
    return Ticker;
}());
console.log("----");
console.log("----");
var ticker = new Ticker();
console.log(ticker.testComp);
mobx_1.autorun(function () { console.log(ticker.testComp); });
setTimeout(function () {
    ticker.time = 15;
}, 1000);
setTimeout(function () {
    ticker.time = 12;
}, 2000);
mobx_1.reaction(function () {
    if (ticker.time === 15) {
        return false;
    }
    else {
        return true;
    }
}, function (bol) {
    console.log(bol);
}, { fireImmediately: true });
function timer(seconds) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("timer");
            resolve();
        }, seconds);
    });
}
timer(4000);
//# sourceMappingURL=index.js.map