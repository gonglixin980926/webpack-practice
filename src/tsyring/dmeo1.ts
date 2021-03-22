import 'reflect-metadata';
import {container} from 'tsyringe';
import { Foo } from './foo';

const ins = container.resolve(Foo);
ins.setAge(30);
console.log(ins);
export default ins;