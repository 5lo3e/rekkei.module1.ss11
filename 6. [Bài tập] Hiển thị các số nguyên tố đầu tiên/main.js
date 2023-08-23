let numbers = +prompt("Nhập số cần kiểm tra");
if (numbers <= 1) {
    alert("Vui lòng nhập lại");

}
else {
    for (let n = 2; n <= numbers; n++) {
      
        let count = 0;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                count++;
            }
        }
        if (count == 0) {
            console.log(n);

        }
    }


}
