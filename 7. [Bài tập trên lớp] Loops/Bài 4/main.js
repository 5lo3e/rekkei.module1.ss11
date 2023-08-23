for (let i = 1; i < 100; i++) {
    if (i % 3 == 0) {
        
        if (i % 3 == 0 && i % 5 == 0) {
            alert(i + " FizzBuzz");

        }
        else {
            alert(i + " Fizz");
        }
    }
    if (i % 5 == 0) {
        
        if (i % 3 == 0 && i % 5 == 0) {

        }
        else {
            alert(i + " Buzz");
        }
    }
}