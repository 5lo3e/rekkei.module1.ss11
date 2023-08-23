let a = +prompt("Nhập số cần kiểm tra");
if (a <= 1) {
    alert("đó ko phải là số nguyên tố");

}
else {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i == 0) {
            count++;
        }
    }
    if (count == 0) {
        alert("đó là số nguyển tố");

    }
    else {
        alert("Đó ko phải số nguyên tố");

    }

}