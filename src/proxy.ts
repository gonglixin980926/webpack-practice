const dinner = {
    meal: 'tacos'
  }
  
const handler = {
  get(target: any, prop: any, receiver: any) {
    console.log(target)
    console.log(receiver)
    // @ts-ignore
    const a = [...arguments]
    console.log(a)
    // @ts-ignore
    return Reflect.get(...arguments)
  }
}

const proxy = new Proxy(dinner, handler)
let proxyTest = 5
console.log(proxy.meal)
console.log(module)
export {proxyTest}

