const hasLicense = true;
const age = 20;
const isDrunk = false;

const checkVerification = (age >= 18) && hasLicense && !isDrunk;

console.log(`Допуск для вождения: ${checkVerification ? 'да, ехай' : 'нет, сиди дома'} `);