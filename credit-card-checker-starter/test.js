const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]

checkCopy = [];
for (i = 0; i < valid1.length; i++) {
    checkCopy[i] = valid1[i];
}

console.log(checkCopy);


for (let j = checkCopy.length - 2; j >= 0; j -=2) {
    checkCopy[j] = checkCopy[j] * 2;
    console.log(checkCopy[j]);
    if (checkCopy[j] > 9) {
        checkCopy[j] = checkCopy[j] - 9;
    console.log(checkCopy[j]);
    }
}

console.log(checkCopy);

let total = checkCopy.reduce(
    (accumulator, currentValue ) => accumulator + currentValue, 0
)

console.log(total);

if (total % 10 == 0) {
    console.log(true);
}