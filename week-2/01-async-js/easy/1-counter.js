function counter(num){
    let count = 0;
    let intervalId = setInterval(() => {
        console.log(count);
        count++;
    }, 1000);
    setTimeout(() => {
        clearInterval(intervalId);
    }, (num+2)*1000);       // +2 sec because function executes after 2 secs
}

counter(10);
