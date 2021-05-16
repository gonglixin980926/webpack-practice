const dinner = {
  meal: 'tacos'
};
  
const handler = {
  get(target: any, prop: any, receiver: any,...args) {
    console.log(target);
    console.log(receiver);
    const a = [...args];
    console.log(a);
    return Reflect.get(target, prop, ...args);
  }
};

const proxy = new Proxy(dinner, handler);
const proxyTest = 5;
console.log(proxy.meal);
console.log(module);
export {proxyTest};
const arr2 = [];
arr2.slice();
exports.test = '5';

const arr = [2,3,4,5,2,23,5,23];
// for (const iterator of arr.entries()) {
//     const [ key, value] = iterator
//         console.log(key, value)
// }

const proxArr = new Proxy(arr,{
  get(target, prop){
    return Reflect.get(target, prop);
  },
  set(target, prop, receiver){
    console.log(prop, receiver);
    return Reflect.set(target, prop, receiver);
  }
});
proxArr.push(6);
// proxArr[10] = 20
console.log(proxArr);
console.log(arr);
// var obj = {
//     a: 1
// }
// var prox = new Proxy(obj,{})
// prox.a = 5
// console.log(obj)
