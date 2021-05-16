import { computed } from 'mobx';

// class Test<T extends object>{
//     constructor(){
//         // console.log()
//     }
//     say(args:T):T{
//         return args
//     }

// }

// let d = new Test()

// let o1 = new Object()
// console.log(d.say(o1))
// enum Color {Red, Green, Bue}
// console.log(Color.Bue)

// interface IntDemo{
//     data:number;
//     getNumber():void
// }

// class testCla implements IntDemo{
//     static age = 3
//     data: number = 2
//     getNumber(): void {
//         throw new Error("Method not implemented.")
//     }
//     private static changeAge(){
//         this.age = 1
//     }

// }

// let b = new testCla()

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick():any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(m:number,h:number){
    console.log(m,h);
  }
  tick() {
    console.log('beep beep');
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { 
    console.log(h,m);
  }
  tick() {
    console.log('tick tock');
  }
}

const digital = createClock(DigitalClock, 12, 17);
const analog = createClock(AnalogClock, 7, 32);


