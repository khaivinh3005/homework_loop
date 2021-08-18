// function taoTheDiv() {
//     var myDIV = document.querySelectorAll(".divItem");
//     for(var i = 0 ; i < myDIV.length ; i++) {
//         if(i % 2 == 0) {
//             myDIV[i].innerHTML = "DIV CHẴN";
//             myDIV[i].classList.add("alert-danger")
//         } else {
//             myDIV[i].innerHTML = "DIV LẺ";
//         }
//         myDIV[i].style.display = "block";
//     }
// }

function taoTheDiv() {
    var input = parseInt(document.getElementById("input").value);
    if (!input) {
        alert("Vui lòng điền đầy đủ thông tin");
        window.location.reload();
    }
    for (var i = 1; i <= input; i++) {
        var div = document.createElement("div");
        div.classList.add("alert", "alert-primary");
        div.innerHTML = i;
        document.querySelector(".container").appendChild(div);
        if (i % 2 == 0) {
            div.innerHTML = `DIV CHẴN`;
            div.classList.add("alert-danger")

        } else {
            div.innerHTML = `DIV LẺ`;
        }
    }
    
    document.querySelector("input").placeholder = "Vui lòng load lại trang để thực hiện lại từ đầu";
    document.querySelector("input").classList.add("border" , "border-danger");
    
}

document.getElementById("btn").addEventListener("click", taoTheDiv);
