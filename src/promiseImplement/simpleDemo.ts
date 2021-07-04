export enum MyPromiseState{
    PENDING = 'pending',
    FULFILLED = 'filfilled',
    REJECT = 'reject'
}

export interface MyPromiseCallback{ // 链接两个 promise 的最主要数据结构
    onFulfilled(res?: any) : any
    resolve(res?: any) : any
}

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
        fn(this._resolve.bind(this))
    }

    then(onFulfilled){
        /**
         * 1. 创建新 promise 并将 promise 的 callback 以及 resolve 放入当前 promise 队列中
         *  */
        return new MyPromise2((res)=>{
            this._handle({ // 放入当前 promise队列中
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
        const result = callback.onFulfilled(this.value)
        callback.resolve(result)
    }

    _resolve(value){
        this.state = MyPromiseState.FULFILLED
        this.value = value
        this.callbacks.forEach( callback => this._handle(callback))
    }
}

function myPromiseTest() {
    //Promise应用
    const proA = new MyPromise2(resolve => {
            setTimeout(()=>{
                resolve('5秒');
            },5000)
    })
    const proB = proA.then((tip) => {
        console.log('第一次promise',tip);
        return 'wwww'
    })
    proB.then((res)=>{
        console.log(`第二次promise`, res)
    })
}
myPromiseTest()