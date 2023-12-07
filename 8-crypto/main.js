
function codeValue (value) {
    let code = [...value].reverse().join('');
    return code;

}

console.log(codeValue('qwerty'));

function checkPassword (value, codePassword) {
    const decode = codeValue(codePassword)
    return value === decode;
}

console.log(checkPassword('qwerty', 'ytrwq' ));
console.log(checkPassword('qwerty', 'ytrewq' ));


