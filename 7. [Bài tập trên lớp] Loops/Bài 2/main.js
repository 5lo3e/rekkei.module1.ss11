let n =+prompt("Nhập N");

if ((n<2)||(n>100)){
    alert("Vui lòng nhập lại");
}
``
for (let i= 2;i <= n;i++){
    if(i%2==0){
        console.log(` ${i**2}`);
    }
}
