function extend<T, U>(first: T, second: U): T & U {
  const result = <T & U>{};
  for (const id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  // for (let id in second) {
  //     if (!result["id"]) {
  //         (<any>result)[id] = (<any>second)[id];
  //     }
  // }
  return result;
}

class P {
  constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
    // ...
  }
}
const jim = extend(new P('Jim'), new ConsoleLogger());
const n = jim.name;
jim.log();

console.log('ts');