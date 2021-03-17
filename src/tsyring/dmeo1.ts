import 'reflect-metadata';
import {container} from 'tsyringe';
import { Foo } from './foo';

const instance = container.resolve(Foo);
instance.setAge(30);
console.log(instance);