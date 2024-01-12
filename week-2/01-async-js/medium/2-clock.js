function counter(num){
    let intervalId = setInterval(() => {
        currenTtime()
    }, 1000);

    setTimeout(() => {                // to terminate clock
        clearInterval(intervalId);
    }, (num+2)*1000);                 // +2 sec because function executes after 2 secs

    function currenTtime() {
        const date = new Date();
        let hrs = date.getHours();
        let mins = date.getMinutes();
        let secs = date.getSeconds();
        if (secs < 10) {
            secs = '0' + secs;
        }
        if (mins < 10) {
            mins = '0' + mins;
        }
        if (hrs < 10) {
            hrs = '0' + hrs;
        }
        console.log(`${hrs}:${mins}:${secs}`);
        if (hrs > 12 ) {
            hrs -= 12;
            if (hrs < 10) {
                hrs = '0' + hrs;
            }
            console.log(`${hrs}:${mins}:${secs} PM \n`);
        } else {
            console.log(`${hrs}:${mins}:${secs} AM \n`);
        }
    }
}

counter(60);       // terminate clock after 1 min
