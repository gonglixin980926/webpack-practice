export enum MyPromiseState{
    PENDING = 'pending',
    FULFILLED = 'fulfilled',
    REJECT = 'reject'
}

export interface MyPromiseCallback{ // 链接两个 promise 的最主要数据结构
    onFulfilled(res?: any) : any
    resolve(res?: any) : any
}

/**
 * 回调函数的执行分两个时机
 * 1. 添加回调函数时，pro 已经 resolve 那么就直接resolve
 * 2. 添加时还未 resolve，那么就等到 resolve 后执行
 */
// 极简实现 + 链式调用 + 状态
class MyPromise1{
    callbacks = []
    state = MyPromiseState.PENDING
    value = null
    constructor(fn){
        fn(this._resolve.bind(this))
    }

    then(onFulfilled){
        if(this.state === MyPromiseState.PENDING){
            this.callbacks.push(onFulfilled)
        }else{
            onFulfilled(this.value)
        }
        return this // 实现promise链式调用
    }

    _resolve(value){
        this.state = MyPromiseState.FULFILLED
        this.value = value
        this.callbacks.forEach( onFulfilled => onFulfilled(value))
    }
}

class MyPromise2{
    callbacks = []
    state = MyPromiseState.PENDING
    value = null
    constructor(fn){
        console.error(" new promise ")
        fn(this._resolve.bind(this))
    }

    then(onFulfilled){
        /**
         * 1. 创建新 promise 并将 promise 的 callback 以及 resolve 放入当前 promise 队列中
         * 2. 当 返回值为 promise 时，那么 onFulfiiled 为当前 promise 的 resolve
         *  */
        return new MyPromise2((res)=>{
            this._handle({ // 放入当前 promise 队列中
                onFulfilled: onFulfilled,
                resolve: res
            })
        })
    }

    _handle(callback: MyPromiseCallback){
        if(this.state === MyPromiseState.PENDING){
            this.callbacks.push(callback) // promise 未结束，将 then 放入队列当中
            return
        }

        if(!callback.onFulfilled){
            callback.resolve()
        }

        /**
         * 1. 如果此时当前 promise 执行结束，调用回调函数
         * (调用情况分为两种：
         *    1. 调用 then 时直接调用回调函数
         *    2. resolve 时调用回调函数
         * )
         * */
        const result = callback.onFulfilled(this.value) // 执行前一个 pro 的 resolve
        callback.resolve(result) // resolve 当前 pro
        console.log("calback resolve")
    }

    _resolve(value){
        /**
         *如果是 Promise 实例，
         *那么就把当前 Promise 实例的状态改变接口重新注册到 resolve 的值对应的 Promise 的 onFulfilled 中，
         *也就是说当前 Promise 实例的状态要依赖 resolve 的值的 Promise 实例的状态。
         */
        if(value && (typeof value === 'object' || typeof value === 'function')){
            const then = value.then
            const nowResolve = this._resolve.bind(this)
            then.call(value, nowResolve)
            return

        }
        this.state = MyPromiseState.FULFILLED
        this.value = value
        this.callbacks.forEach( callback => this._handle(callback))
    }
}

class MyPro1 {
    callbacks = [] // 存放 then 中的callback
    state: MyPromiseState = MyPromiseState.PENDING
    value: any
    constructor(fn) {
        fn(this._resolve.bind(this))
    }
    _resolve(value){
        this.state = MyPromiseState.FULFILLED
        this.callbacks.forEach( callback => callback(value))
    }

    then(onFulfilled){
        if(this.state === MyPromiseState.PENDING){
            this.callbacks.push(onFulfilled)
        }
        if(this.state === MyPromiseState.FULFILLED){
            onFulfilled(this.value)
        }
        return this
    }
}

class MyPro2 {
    callbacks = [] // 存放 then 中的callback
    state: MyPromiseState = MyPromiseState.PENDING
    value: any
    constructor(fn) {
        fn(this._resolve.bind(this))
    }
    _resolve(value){
        if(value instanceof MyPro2){
            const then = value.then
            then.call(value, this._resolve.bind(this)) // 当前 pro 的 resolve 依赖传入的 pro 的 resolve，二者的 resolve 代理至第三个 pro 进行处理
            return
        }
        this.state = MyPromiseState.FULFILLED
        this.value = value
        this.callbacks.forEach( callback => this._handle(callback))
    }

    then(onFulfilled){
        return new MyPro2((res)=>{
            this._handle({
                onFulfiiled: onFulfilled,
                resolve: res
            })
        })
    }

    // 将调用回调函数放在 handle 中处理
    _handle(callback: any){
        if(this.state === MyPromiseState.PENDING){
            this.callbacks.push(callback)
        }
        if(this.state === MyPromiseState.FULFILLED){
            if(!callback.onFulfiiled){
                callback.resolve(this.value)
            }
            const res = callback.onFulfiiled(this.value)
            callback.resolve(res)
        }
    }
}


function myPro(){
    const b = new MyPro2(res=>{
        console.log(res)
        res('111')
    })
    const a = new MyPro2((res)=>{
        setTimeout(res,3000,b)
    }).then(res=>{
        console.log(res)
        return '333'
    }).then(res=>{
        console.log(res)
    })
}

myPro()

function myPromiseTest() {
    //Promise应用
    const insertPro = new MyPromise2((res)=>{
        setTimeout(()=>{
            console.log('insert pro')
            res('www')
        }, 4000)
    })

    const proA = new MyPromise2(resolve => {
            setTimeout(()=>{
                console.log('outside pro')
                resolve(insertPro);
            },3000)
    }).then((res)=>{
        console.log("thenable")
    })


    // const proB = proA.then((tip) => {
    //     console.log('第一次promise',tip);
    //     return  tip
    // })
    // proB.then((res)=>{
    //     console.log(`第二次promise`, res)
    // })
}
// myPromiseTest()