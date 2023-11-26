const addressLatX = 10;
const addressLongY = 26;
const positionLatX = 5;
const positionLongY = 12;

const differenceX = addressLatX - addressLongY;
const differenceY = positionLatX - positionLongY;
const result = Math.sqrt((differenceX * differenceX) + (differenceY * differenceY));

console.log(result);