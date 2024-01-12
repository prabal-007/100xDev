function counter(num) {
    let count = 0;

    function increment(){
        console.log(count);
        count++;

        if (count < num) {
            setTimeout(increment, 1000);
        }
    }

    increment();
}

counter(10);
