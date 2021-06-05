export class  AstSuper {
  constructor() {
    console.log('sss');
  }
}

export class AstDemo extends AstSuper{
  constructor() {
    const a = super();
    console.log(super());
  }
}

const a = new AstDemo();