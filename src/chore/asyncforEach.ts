async function testForEach() {
  const arr = [2,3,4,5,6,7,4,3,3];
  let a = 0;
  await Promise.resolve().then(()=>{
    arr.forEach( (item, index)=> {
      setTimeout(() => {
        a = index;
        console.log(a);
      }, 2000);
    });
  });

  console.log('forEach结束');
}
testForEach();