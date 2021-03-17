import {injectable, singleton} from "tsyringe";

@injectable()
export class Foo {
    age: number
    constructor() {
        this.age = 20
    }
    setAge(age: number){
        this.age = age
    }
}