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

function rejectionHandl() {
    // 当前帧未处理的promise, 当前
    window.addEventListener("unhandledrejection", event => { // 没有reject时会打印
        console.warn(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
    });
    window.addEventListener("rejectionhandled", event => { // promise 被reject 且有rejection
        console.log("Promise rejected; reason: ");
        console.log(event)
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
executionOrder()