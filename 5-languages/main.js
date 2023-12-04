const choiceLang = prompt('Выберите язык из списка: ru/eng/tr/de');
let message;
switch (choiceLang) {
    case 'ru' :
        message = 'Доброе утро';
        break;
    case 'eng' :
        message = 'Good morning';
        break;
    case 'tr' :
        message = 'Gunaydin';
        break;
    case 'de' :
        message = 'Gutten tag';
        break;
    default:
        message = 'Уходи';
}
alert(message);


