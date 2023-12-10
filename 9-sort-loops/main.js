const arr = [1, 40, -5, 10, 0];

function sortArr(arr) {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length -1; j++) {
            if (newArr[i] < newArr[j]) {
                [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
            }
        }

    }
    return newArr;
}

console.log(arr);
console.log(sortArr(arr));

