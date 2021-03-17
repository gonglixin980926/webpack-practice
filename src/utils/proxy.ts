const dinner = {
	meal: 'tacos'
};
  
const handler = {
	get(target: any, prop: any, receiver: any,...args) {
		console.log(target);
		console.log(receiver);
		const a = [...args];
		console.log(a);
		return Reflect.get(target, prop, ...args);
	}
};

const proxy = new Proxy(dinner, handler);
const proxyTest = 5;
console.log(proxy.meal);
console.log(module);
export {proxyTest};
const arr = [];
arr.slice();
exports.test = '5';
