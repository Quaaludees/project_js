
const objQuery = {
    search: 'Дуд мломвщ',
    take: 10,
}

// let sp = new URLSearchParams(objQuery);
//
// console.log( sp.toString() )

function changeObjToString (objQuery) {
    if (!objQuery || typeof objQuery !== 'object') {
        return '';
    }
    return Object.entries(objQuery).map(el => {
        return `${el[0]}=${encodeURIComponent(el[1])}`
    }).join('&');
}
changeObjToString()
console.log(changeObjToString(objQuery));