/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds)
    });
}

// const date = new Date();
// const start = Date.now();
// sleep(1000).then(() => {
//     const end = Date.now();
//     console.log(`difference -  ${start - end}`)
// });

module.exports = sleep;
