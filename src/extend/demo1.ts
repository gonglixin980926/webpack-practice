class  Animal {
    a: number
    constructor(){
      this.a = 0;
    }
    says(){
      console.log('说些什么');
    }
}

class Bird extends Animal{
  constructor() {
    super();
  }
}

// const a = new Bird();
// console.log(a);