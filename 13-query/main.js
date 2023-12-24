
const objQuery = {
    search: 'Vasa',
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
        return el.join('=')
    }).join('&');
}
changeObjToString()
console.log(changeObjToString(objQuery));