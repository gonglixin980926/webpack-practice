export enum MyPromiseState{
    PENDING = 'pending',
    FULFILLED = 'filfilled',
    REJECT = 'reject'
}

// 极简实现 + 链式调用 + 状态
class MyPromise{
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

function myPromiseTest() {
    //Promise应用
    const proA = new MyPromise(resolve => {
            setTimeout(()=>{
                resolve('5秒');
            },5000)
    })
    const proB = proA.then((tip) => {
        console.log('第一次promise',tip);
    })
    proB.then((res)=>{
        console.log(`第二次promise`, res)
    })
}
myPromiseTest()