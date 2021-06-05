console.log("这是新生产的代码")
console.log("fileName ", 'this is log');

function func() {
  console.log("这是新生产的代码")
  console.info("fileName ", 'this is info');
}

export default class Clazz {
  say() {
    console.log("这是新生产的代码")
    console.debug("fileName ", 'this is debug');
  }

  render() {
    return <div>{[console.log("这是新生产的代码"), console.error("fileName ", 'this is error')]}</div>;
  }

}