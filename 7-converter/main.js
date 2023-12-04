function conversion (sum, typeSomeCurrency, transferSomeCurrency) {
    const EUR = 40;
    const USD = 30;
    switch (transferSomeCurrency) {
        case 'USD': {
            return sum / USD;
        }
        case 'EUR': {
            return sum / EUR;
        }
        default: {
            return null;
        }
    }


}

console.log(conversion(1500, 'RU', 'EUR'));

