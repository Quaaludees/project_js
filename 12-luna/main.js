const card = '5536 9137 6631 7602';

const calc = e => {
    return (e * 2 < 10) ? e * 2 : e * 2 - 9;
}
const isValid = card => {
    const res = card.split(' ')
        .map((e, i) => (i % 2 === 0) ? calc(e) : Number(e))
        .reduce((acc, value) => {
            return acc + value;
        })
    return res % 10 === 0;
}
console.log(isValid(card));