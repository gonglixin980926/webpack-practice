import 'reflect-metadata';
import {container} from 'tsyringe';
import { Foo } from './foo';

const instance = container.resolve(Foo);
instance.setAge(15);
console.log(instance);
export default instance;