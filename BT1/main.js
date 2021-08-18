function ketQua() {
    var soChan = '';
    var soLe = '';
    
    // Vòng lặp For
    // for(var i = 0 ; i <= 100 ; i++) {
    //     if(i % 2 == 0) {
    //         console.log(i)
    //         soChan += i + " ";
    //     } else {
    //         soLe += i + " ";
    //     }
    // }

    //Vòng lặp while
    var i = 0;
    while(i <= 100) {
        if(i % 2 == 0) {
            soChan += i +" ";
        } else {
            soLe += i + " ";
        }
        i++
    }

    console.log(soChan);
    console.log(soLe);
    document.getElementById("txt").innerHTML = `số chẵn: ${soChan} <br> <br> số lẻ: ${soLe}`
}

document.getElementById("btn").addEventListener("click" , ketQua);