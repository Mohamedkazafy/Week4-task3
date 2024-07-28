function findDuplicates(arr) {
    const frequency = {};
    for (const num of arr) {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    }

    const duplicates = [];
    for (const num in frequency) {
        if (frequency[num] > 1) {
            duplicates.push(Number(num));
        }
    }

    return duplicates;
}

const arr = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 2];
const duplicates = findDuplicates(arr);
console.log(duplicates);
