
const array = [1, 2, -5, 6, 8, -11, 7, -74, 14];

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

function isRemove(arr, num) {
    const index = arr.indexOf(num)
    return index >= 0;
}
isRemove(array, 4)

function filterArr(arr, removeArr, fn, fnSort) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (!fn(removeArr, arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return fnSort(newArr);

}

console.log(filterArr(array, [1, 2 , 6 , 8], isRemove, sortArr))




