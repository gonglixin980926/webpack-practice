class MyPromise{
    callbacks = []
    constructor(fn){
        fn(this._resolve.bind(this))
    }

    then(onFulfilled){
        console.log(this,"then")
        this.callbacks.push(onFulfilled)
        return this
    }

    _resolve(value){
        this.callbacks.forEach( onFulfilled => onFulfilled(value))
    }
}

function myPromiseTest() {
    //Promise应用
    const a = new MyPromise(resolve => {
        setTimeout(() => {
            console.log('done');
            resolve('5秒');
        }, 5000);
        console.error("resolve")
    }).then((tip) => {
        console.log(this)
        console.log('第一次promise',tip);
    }).then(res=>{
        console.log(`第二次promise ${res}`)
    })
}
myPromiseTest()