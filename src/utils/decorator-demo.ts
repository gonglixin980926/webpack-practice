// function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
//     console.log(`装饰器`)
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     }
// }

// @classDecorator
// class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
//     say(){
//         console.log(this.constructor)
//     }
// }
// let c1 = new Greeter("word")
// console.log(c1);

// function f() {
//     console.log("f(): evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("f(): called");
//     }
// }

// function g() {
//     console.log("g(): evaluated");
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("g(): called");
//     }
// }

// class C {
//     @f()
//     @g()
//     method() {
//         console.log("method")
//     }
// }
// let test = new C();
// test.method()

// @sealed
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }

// function sealed<T extends {new(...args:any[]):{}}>(constructor: T) {
//     // return class extends constructor{

//     // }
//     console.log(constructor)
//     Object.seal(constructor);
//     Object.seal(constructor.prototype);
// }

// class Greeter {
//     @enumerable(false)
//     static greet(): any {
//         return "Hello, " + this.greeting;
//     }
//     static greeting: string = 'greeting';
//     constructor(message: string) {
//         Greeter.greeting = message
//     }

// }
// function enumerable(value: boolean) {
//     console.log("装饰器")
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log(target)
//         console.log(propertyKey)
//         console.log(descriptor)
//         console.log("内部方法")
//         descriptor.enumerable = value;
//         console.log(descriptor)

//     };
// }

// console.log(Greeter.greet)



class decoratorDemo{

	test = 6

	static enName = '3'

	static modifyClass(){
	    return  (target:any,name:string,descriptor: PropertyDescriptor) =>{
	        // let oldFunc = descriptor.value
	        console.log(target);
	        console.log(name);
	        console.log(this);
	        descriptor.value = function(...args:any){
	            console.log('-----');
	            // oldFunc.apply()
	        };
	        return descriptor;
	        // target.prototype.extraProp = param
	    };
	}
}
class testClass {
    @decoratorDemo.modifyClass()
  test(){
    console.log(11);
  }
}


// const b = new testClass();

// b.test();
// b.test();




// let a = new A()