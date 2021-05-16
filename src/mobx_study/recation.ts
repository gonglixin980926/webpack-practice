import { flow, reaction } from 'mobx';

// const arr = [1,2,3,4]
// reaction(()=>[...arr],(item)=>{
//     console.log(item)
// })
// arr.push(3)
// arr.push(3)
// arr.push(3)

import {observable, autorun} from 'mobx';

export class reactionDemo {
    @observable
    todos: {completed: boolean
        title: string}[] = [
        	{ title: 'Spoil tea', completed: true },
        	{ title: 'Make coffee', completed: false }
        ]

    constructor() {
    	const reaction2 = reaction(
    		() => [...this.todos],
    		todos =>{ 
    			console.log(todos);
    		}
    	);

    	// autorun(() => {
    	//     console.log('reaction')
    	//     this.todos.forEach(item=>{
    	//         console.log(item.title)
    	//     })
    	// });
    	// 输出: 'Remaining: Make coffee'
        
    	// this.todos[0].completed = false;
    	// 输出: 'Remaining: Spoil tea, Make coffee'

        
    	// this.todos[1].title = 'take'
    	// this.todos[2] = { title: 'Take a nap', completed: false };
    	// 输出: 'Remaining: Spoil tea, Make coffee, Take a nap'
        
    	this.todos.push({
    		title: 'aa',
    		completed: false
    	});
    	this.todos.push({
    		title: 'aa',
    		completed: false
    	});
    	// 输出: 'Remaining: Make coffee, Take a nap'
    }
}
// var todos = []
// var todos = observable();


new reactionDemo();