let a= Math.floor(Math.random()*10);
console.log(a);
let b =+prompt("Chọn số thứ nhất");
let c =+prompt("Chọn số thứ hai");
let d =+prompt("Chọn số thứ ba");
if ((a==b)||(a==c)||(a==d)){
    alert("Chúc mừng bạn đã chiến thắng");
}
else {
    alert("Bạn đã thua cuộc");
}