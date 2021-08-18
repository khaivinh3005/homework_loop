function getPrimes() {
    var input = document.querySelector("input").value;
    var sieve = [];
    var primes = [];
    for (var i = 2; i <= input; i++) {
        if (!sieve[i]) {
            primes.push(i);
            for (var j = i <= 1; j <= input; j += i) {
                sieve[j] = true;
            }
        }
    }
    document.getElementById("txt").innerHTML = primes;
}


document.getElementById("btn").onclick = getPrimes;