async function proTest() {
    const pro = new Promise((res,rej)=>{
        // res()
        console.log("pro done")
        console.log("2+5")
        // rej("error")
        throw new Error("www")
    }).then((res)=>{
        console.log(res)
    }).then(()=>{
        console.log("最后一个then")
    }).catch(err=>{
        console.log("最后一个catch")
    })
    await pro
    console.log("----")
}

function rejectionhandled() {
    // 当前帧未处理的promise, 当前
    window.addEventListener("unhandledrejection", event => { // 没有reject时会打印
        console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
    });
    window.addEventListener("rejectionhandled", event => { // promise 被reject 且有rejection
        console.log("Promise rejected; reason: ");
        console.log(event)
        // event.preventDefault()
    }, false);
    // proTest()

    const proB = new Promise((res, rej)=>{
        rej("wwwww")
    })
    setTimeout(()=>{
        proB.catch(res=>{
            console.log(res)
        })
    })

}
rejectionhandled()

function executionOrder() {
    // 同步任务 -> 微任务 -> 宏任务
    setTimeout(()=>{
        console.log("setTimeout")
        Promise.resolve().then(()=>{
            console.log("宏任务中的微任务")
        })
    })
    Promise.resolve().then(()=>{
        console.log("promise")
        setTimeout(()=>{
            console.log("微任务中的宏任务")
        })
    })
    console.log("主队列")
}

async function proResolveTest() {
    await new Promise((res,rej)=>{
        console.log("before res")
        res()
        console.log("after res")
    })
    console.log("after pro")
}
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

function pro() {
    // 结合reduce实现一个顺序调用
    // const pro1 = new Promise<string>((res,rej)=>{
    //     res()
    // })
    // const pro2 = new Promise<string>((res)=>res())
    // const pro3 = new Promise<string>((res)=>res())
    // const allPro = [pro2, pro3]
    // allPro.reduce(async (pre, current)=>{
    //     return pre.then(current)
    // },pro1)
    // allPro.reduce<Promise<string>>((p, f) => p.then(f), Promise.resolve('ww'))
    // .then(result3 => { /* use result3 */ });
}


async function proD() {
    const a = await new Promise((res,rej)=>{
        setTimeout(res,2000,{
            name:'string',
            age: 20
        })
    }).then((res)=>{
        console.log(res)
    })
    console.log("----")
}

// proD()
// proResolveTest()

async function proNoResolve() {
    const a = new Promise(()=>{
        console.log("bb")
    }).then(res=>{
        console.log("输出")
    })
    console.log(a["[[PromiseState]]"])
}
proNoResolve()