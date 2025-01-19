// 2665. Counter II
// Easy
// Companies

// Write a function `createCounter`. It should accept an initial integer `init`.
// It should return an object with three functions.

// The three functions are:
// 1. `increment()`
//    - Increases the current value by 1 and then returns it.

// 2. `decrement()`
//    - Reduces the current value by 1 and then returns it.

// 3. `reset()`
//    - Sets the current value to `init` and then returns it.

// Example 1:
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// Example 2:
// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0

// Constraints:
// -1000 <= init <= 1000
// 0 <= calls.length <= 1000
// calls[i] is one of "increment", "decrement" and "reset"

var createCounter = function(init) {
    let initial = init;
    function increment() {
        return ++init;
    }

    function decrement(){
        return --init;
    }

    function reset() {
        init = initial;
        return init;
    }

    return {increment, reset, decrement}
};

const counter = createCounter(5)
console.log(counter.increment(),counter.reset(),counter.decrement())
