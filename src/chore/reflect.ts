import 'reflect-metadata';

@Reflect.metadata('role', 'admin')
class Post {}

const metadata = Reflect.getMetadata('role', Post);

console.log(metadata);  