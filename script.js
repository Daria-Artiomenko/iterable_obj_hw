'use strict'

const myIterable = {
    from: 1,
    to: 4
} 
// 1, 2, 3, 4, 

// const myIterable = {
//     from: 'aaa',
//     to: 4
// }
// Error 'from' and 'to' properties must be numbers

// const myIterable = {
//     from: 10,
//     to: 4
// }
// Error 'from' must be less than or equal to 'to'

myIterable[Symbol.iterator] = function() {
    let current = this.from;
    let last = this.to;

      if (isNaN(current) || isNaN(last)) {
        throw new Error("'from' and 'to' properties must be numbers");
      }
      if (current > last) {
        throw new Error("'from' must be less than or equal to 'to'");
      }

      return {
        next: () => {
          if (current > last) {
            return { done: true };
          }
          return { 
            value: current++, 
            done: false 
            };
        }
      };
    }


for (let item of myIterable) {
   console.log(item); 
  }







