//task 2
function prime_numbers(n) {

    if (n === 1) {
        return false;
    }
    else if (n === 2) {
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            if (n % x === 0) { //using the modulo operator to divide n by x and if there is a reminder print out false
                //since x must be greater than n 1%2=0.5 which is greater than 0 print false 
                return false;
            }
        }
        return true;
    }
}

console.log(prime_numbers('37'));

function isPositive(num) {
    return Math.sign(num) === 1;
};

function isPrimeNum(num) {
    if (!isPositive(num)) {
        return false
    };
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
};

console.log(isPrimeNum(2));