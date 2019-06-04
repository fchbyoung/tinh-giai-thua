let n = parseInt(prompt("Bạn muốn tính giai thừa của số? : "));
let giaiThua = 1;
for(let i = 1; i <= n; i++){
    giaiThua *= i;
}
alert("!" + n + " = " + giaiThua);