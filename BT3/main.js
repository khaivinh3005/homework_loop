function numberInt() {
    var n = 0;
    var sum = 0;
    for(var i = 0 ; i <= n ; i++) {
        sum += n;
        if(sum > 10000) {
            break;
        }
        n++
    }
    
    document.querySelector("p").style.display= "block";
    document.querySelector("p").innerHTML= `Số nguyên dương nhỏ nhất: ${n}`;

}

document.querySelector("button").addEventListener("click", numberInt)