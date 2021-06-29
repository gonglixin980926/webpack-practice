import { Observable, Operator, interval, Subscription, fromEvent, from, Subject, of, bindCallback } from 'rxjs';
import{ take, map, merge, multicast }from 'rxjs/operators';


interval(500).pipe(take(4)).subscribe( data=>{
  console.log(data);
});

const sub = new Subject();

const clicks$ = fromEvent(document, 'click');
clicks$.pipe(take(4),map(data=>{
  console.log(data);
  return data;
})).subscribe(data=>{
  console.log(data);
});

clicks$.subscribe(sub);

// sub.subscribe()
// console.log(`-----`)


//  const but = document.getElementById("oBt") as Element;
// const click$ = fromEvent(but, 'click');
// const interval$ = interval(1000);

// //merge 就是将两个流按时间顺序合并起来
// click$.pipe(
//   take(4),merge(interval$),map(data=>{
//       console.log(`map---${data}`)
//     return data
//   })
// ).subscribe(
//   val => (console.log(val))
// )


// let o1 = new Subject();


// o1.subscribe(data=>{
//     console.log(data)
// })

// o1.subscribe(data=>{
//     console.log(data)
// })


// let ob1 = from([1,2,4])
// ob1.subscribe(o1)

// function test(){
//     console.log(test)
// }




//需要先订阅subject
// let sub = new Subject<number>()

// sub.subscribe(data=>{
//     console.log(data)
// })

// let arr = [1,2,3];
// let o1 = from(arr)
// console.log(o1)
// o1.pipe(map(x=>{
//     return x
// })).subscribe(sub)


// const source = interval(500);
// const subject = new Subject();
// const multicasted = source.pipe(multicast(subject));
// let subscription1: any, subscription2: any, subscriptionConnect: any;

// subscription1 = multicasted.subscribe({
//   next: (v) => console.log(`observerA: ${v}`)
// });
// // We should call `connect()` here, because the first
// // subscriber to `multicasted` is interested in consuming values
// // subscriptionConnect = multicasted.connect();

// setTimeout(() => {
//   subscription2 = multicasted.subscribe({
//     next: (v) => console.log(`observerB: ${v}`)
//   });
// }, 600);

// setTimeout(() => {
//   subscription1.unsubscribe();
// }, 1200);

// // We should unsubscribe the shared Observable execution here,
// // because `multicasted` would have no more subscribers after this
// setTimeout(() => {
//   subscription2.unsubscribe();
//   subscriptionConnect.unsubscribe(); // for the shared Observable execution
// }, 2000);

// sub.next([3,4,5,])


const someFunction = (a:any, b:any, c:any) => {
  console.log(a); // 5
  console.log(b); // 'some string'
  console.log(c); // {someProperty: 'someValue'}
};

const boundSomeFunction = bindCallback(someFunction);
boundSomeFunction(1,2).subscribe(values => {
  console.log(values); // [5, 'some string', {someProperty: 'someValue'}]
});
