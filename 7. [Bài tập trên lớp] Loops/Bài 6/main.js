let a =+prompt("Nhập số cần kiểm tra");
let result =0
if (a<0){
    alert("Đó ko phải là số hoàn hảo ");
}
else{
    for(let i=1;i<(a);i++){
        if(a%i==0){
            result+=i
        }
    }
    console.log(result);
    if (a==result) {
        alert("Đó là số hoàn hảo");
    }
    else{
        alert("Đó ko phải là số hoàn hảo");
    }
}