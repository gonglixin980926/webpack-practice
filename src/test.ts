// // union to intersection of functions
// type UnionToIoF<U> =
//     (U extends any ? (k: (x: U) => void) => void : never) extends
//     ((k: infer I) => void) ? I : never

// // return last element from Union
// type UnionPop<U> = UnionToIoF<U> extends (a: infer A) => void ? A : never

// // prepend an element to a tuple.
// type Prepend<U, T extends any[]> =
//     ((a: U, ...r: T) => void) extends (...r: infer R) => void ? R : never

// type UnionToTupleRecursively<Union, Result extends any[]> = {
//     1: Result
//     0: UnionToTupleRecursively_<Union, UnionPop<Union>, Result>
// }[[Union] extends [never] ? 1 : 0]

// type UnionToTupleRecursively_<Union, Element, Result extends any[]> =
//     UnionToTupleRecursively<Exclude<Union, Element>, Prepend<Element, Result>>

// export type UnionToTuple<U> = UnionToTupleRecursively<U, []>

// interface A {
//     a: number,
//     b: number
// }
// const a: UnionToTuple<keyof A> = ['a','b']
// let arr = [1,2,3,4,5,6]
// const arr1 = arr.map( item=> {
//     switch(item){
//         case 1:
//             return 3
//         case 2: 
//             return 5
//         default:
//             return 8
//     }
// })
// console.log(arr1)

var aa = 2
switch(aa){
    case 1:
    console.log('1')
    case 2:
    console.log('2')
    case 3:
    console.log('3')
    default:
    console.log('default')
}
