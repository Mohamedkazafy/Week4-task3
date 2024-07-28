function filterArray(arr, callback) {
    const result = [];

    for (const element of arr) {
        if (callback(element)) {
            result.push(element);
        }
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(num) {
    return num % 2 === 0;
}

const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers);