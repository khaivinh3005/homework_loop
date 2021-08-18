
function countNumber() {

    var x = document.getElementById("inputX").value;
    var n = document.getElementById("inputN").value;
    var pow = 0;
    for(var i = 1 ; i <= n ; i++) {
        pow += Math.pow(x , i);
    }
    document.getElementById("txt").innerHTML = `Tổng: ${pow}`;
}

document.getElementById("btn").addEventListener("click" , countNumber);
