// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]

const cardNumber = valid1;

checkCopy = [];
for (i = 0; i < cardNumber.length; i++) {
    checkCopy[i] = cardNumber[i];
}

for (let j = checkCopy.length - 2; j >= 0; j -=2) {
    checkCopy[j] = checkCopy[j] * 2;
    if (checkCopy[j] > 9) {
        checkCopy[j] = checkCopy[j] - 9;
    }
}

let total = checkCopy.reduce(
    (accumulator, currentValue ) => accumulator + currentValue, 0
)

console.log(total);

if (total % 10 == 0) {
    console.log(true);
} else {
    console.log(false);
}







