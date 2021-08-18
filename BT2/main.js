
function countNumber() {
    // var i = 0;
    var count = 0;
    //Vòng lặp while
    // while (i <= 1000) {
    //     if (i % 3 == 0) {
    //         count++;
    //     }
    //     i++;
    // }

    //Vòng lặp for
    for(var i = 0 ; i <= 1000 ; i++) {
        if(i%3 == 0) {
            count++;
        }
    }
    console.log(count);
    document.getElementById('txt').innerHTML = `Số chia hết cho 3 nhỏ hơn 1000 là : ${count}`;
}

document.getElementById("btn").addEventListener("click" , countNumber);
