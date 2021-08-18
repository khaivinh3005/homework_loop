function tinhGiaiThua() {
    var n = parseInt(document.getElementById("inputNumber").value);
    var result = 1;
    if(!n) {
        alert("Vui lòng nhập số");
        window.location.reload();
    }
    
     for(var i = 1 ; i <= n ; i++) {
        result *= i;
    }

    document.getElementById("txt").innerHTML = `Giai thừa : ${result}`
}

document.getElementById("btn").addEventListener("click" , tinhGiaiThua);