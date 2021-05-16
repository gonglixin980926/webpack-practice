/**
 * 当只有一个concreteComponent类而没有抽象的component类，那么Decorator类可以是ConcreteComponent的一个子类
 * 只有一个基类就没必要在建立一个decorator类
 * */
abstract class Component {
    abstract Operation()
}

// 定义一个对象，添加具体职责
class ConcreteComponent extends Component {
  Operation() {
    console.log('基础功能');
  }
}

// 装饰器模式核心
abstract class Decorator extends Component{
	component = null;
	setComponent(com: Component){
	    this.component = com;
	}
}

class ConcreteDecoratorA extends Decorator{
  Operation(){
    this.component.Operation();
    console.log('装饰a');
  }
}

class ConcreteDecoratorB extends Decorator{
  Operation(){
    this.component.Operation();
    console.log('装饰b');
  }
}


function eventHandle(){
  return function name(target, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target);
    console.log(propertyKey);
    descriptor.value();
  };
}

(function name() {
  const c = new ConcreteComponent();
  const d1 = new ConcreteDecoratorA();
  const d2 = new ConcreteDecoratorB();
  d1.setComponent(c);
  d2.setComponent(d1);
  d2.Operation();

}());