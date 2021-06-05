console.log("sourceCode.js: ", 'this is log');

function func() {
  console.info("sourceCode.js: ", 'this is info');
}

export default class Clazz {
  say() {
    console.debug("sourceCode.js: ", 'this is debug');
  }

  render() {
    return <div>{console.error("sourceCode.js: ", 'this is error')}</div>;
  }

}