async function hello() {
    const pro1 = new Promise((res,rej)=>{
        console.log("pro1")
        setTimeout(res,1000)
    })
    const pro2 = new Promise((res,rej)=>{
        console.log("pro2")
        setTimeout(res,2000)
    })
    const pro3 = new Promise((res,rej)=>{
        console.log("pro3")
        setTimeout(res,5000)
    })
    await Promise.all([pro1,pro2,pro3])
    console.log("--")
    return
}

async function hi() {
    return await new Promise((res,rej)=>{
        rej("swww")
    })
    return a
}
hi().then((res)=>{
    console.log(res)
})
// hello().then(()=>{
//     console.log("async finished")
// })
