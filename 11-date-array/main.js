const array =  [`10-02-2022`, `тест`, `11/12/2023`, `00/13/2022`, `41/12/2023`];
function isNumber (num) {
    return !!Number(num) && !isNaN(num);
}
function isDay (num) {
    return Number(num) > 0 && Number(num) <= 30;
}
function isMonth (num) {
    return Number(num) > 0 && Number(num) <= 12;
}
function isYear (num) {
    return Number(num) > 2005 && Number(num) <= 2025;
}
function checkDate (array) {
    if (array.some(el  => !isNumber(el)) || array.length !== 3) {
        return false;
    }
    const [day, month, year] = array;
    return isDay(day) && isMonth(month) && isYear(year);
}
function filterArray (array) {
    const res = array.reduce((acc, valueArray) => {
       const date = valueArray
           .split(/-|\//gm);
       if (checkDate(date)) {
           acc.push(date.join('-'))
       }
       return acc;

   },[])
    return res;
}

console.log(filterArray(array));



