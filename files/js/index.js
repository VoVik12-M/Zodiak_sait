// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _Перша сторінка_ _ _ _ _ _ _ _ _ _ _ _

const container1 = document.querySelector('.container-1');
const container3 = document.querySelector('.container-3')
const set_name = document.querySelector('.names');
const year = document.querySelector('.container-2 input');
const month = document.querySelector('.container-2 select:nth-of-type(1)');
const day = document.querySelector('.container-2 select:nth-of-type(2)');
const sex = document.querySelectorAll('input[name="sex"]');
const button = document.querySelector('.container-4 button');

// _ _ _ _ _ _ _ _ _ _ _ _ _ _ _Друга сторінка_ _ _ _ _ _ _ _ _ _ _ _

let first_name = document.querySelector('aside div p');
const opus = document.querySelector('textarea');
const tup_gor = document.querySelectorAll('input[name="goroskop"]');
const button_read = document.querySelector('section > button');
const gorosop_name = document.querySelector('.zagolovok-1 p')
const img_small = document.querySelector('.zagolovok-1 img');
const img_big = document.querySelector('.kartunka img');

// _____________________Помилки________________________________________

const error = document.querySelector('.error');

// _____________________функції________________________________________

let sex_res = null
let day_res = null
let month_res = null
let year_res = null
let tup_gor_res = null


let func_data = (f, l) => {
    let sousk = []
    for (let i = f; i < l; i++) {
        sousk.push(i);
    };
    return sousk;
}

let func_month = (ch) => {
    let chuslo =[]
    for (let i = 1; i <= ch; i++ ) {
        chuslo.push(i);
    }
    return chuslo;
}

let func_year = (f, l) => {
    let years = []
    for (let i = f; i < l; i += 12) {
        years.push(i);
    };
    return years;
}


async function loadText(read) {
    const response = await fetch(read);
    const text = await response.text();
    opus.innerHTML = text
}

// _______________________Місяці до 31 дня______________________________

let days31 = func_month(31);
let days30 = func_month(30);
let days29 = func_month(29);
let days28 = func_month(28);

// _____________________Овен___________________________________

let march_last = func_data(21, 32)
let april_first = func_data(1, 20)

// _____________________Телець___________________________________

let april_last = func_data(20, 31)
let may_first = func_data(1, 21)

// _____________________Близнюки___________________________________

let may_last = func_data(21, 32)
let june_first = func_data(1, 21)

// _____________________Рак___________________________________

let june_last = func_data(21, 31)
let july_first = func_data(1, 23)

// _____________________Лев___________________________________

let july_last = func_data(23, 32)
let august_first = func_data(1, 23)

// _____________________Діва___________________________________

let august_last = func_data(23, 32)
let september_first = func_data(1, 23)

// _____________________Терези___________________________________

let september_last = func_data(23, 31)
let october_first = func_data(1, 23)

// _____________________Скорпіон___________________________________

let october_last = func_data(23, 32)
let nowember_first = func_data(1, 22)

// _____________________Стрілець___________________________________

let nowember_last = func_data(23, 31)
let december_first = func_data(1, 22)

// _____________________Козеріг___________________________________

let december_last = func_data(22, 32)
let january_first = func_data(1, 20)

// _____________________Водолій___________________________________

let january_last = func_data(20, 32)
let february_first = func_data(1, 19)

// _____________________Риби___________________________________

let february_last = func_data(20, 30)
let march_first = func_data(1, 20)

// ______________________________________________________________

// _________________Миша_____________________________________________

let musha = func_year(1900, 2093)

// _________________Бик_____________________________________________

let buk = func_year(1901, 2094)

// _________________Тигр_____________________________________________

let tugr = func_year(1902, 2095)

// _________________Кролик_____________________________________________

let kroluk = func_year(1903, 2096)

// _________________Дракон_____________________________________________

let drakon = func_year(1904, 2097)

// _________________Змія_____________________________________________

let zmia = func_year(1905, 2098)

// _________________Кінь_____________________________________________

let kin = func_year(1906, 2099)

// _________________Вівця_____________________________________________

let vivcha = func_year(1907, 2100)

// _________________Мавпа_____________________________________________

let mavpa = func_year(1908, 2101)

// _________________Півень_____________________________________________

let piven = func_year(1909, 2102)

// _________________Собака_____________________________________________

let sobaka = func_year(1910, 2103)

// _________________Свиня_____________________________________________

let svuna = func_year(1911, 2104)

// _____________________________________________________________________

// _____________________Описи чоловіки Зодіак__________________________________

const Oven_man = 'Опис/Чоловіки/Овен.txt';
const Telec_man = 'Опис/Чоловіки/Телець.txt';
const Bluznyku_man = 'Опис/Чоловіки/Близнюки.txt';
const Rak_man = 'Опис/Чоловіки/Рак.txt';
const Lev_man = 'Опис/Чоловіки/Лев.txt';
const Diva_man = 'Опис/Чоловіки/Діва.txt';
const Terezu_man = 'Опис/Чоловіки/Терези.txt';
const Skorpion_man = 'Опис/Чоловіки/Скорпіон.txt';
const Strilec_man = 'Опис/Чоловіки/Стрілць.txt';
const Kozerig_man = 'Опис/Чоловіки/Козеріг.txt';
const Vodoliy_man = 'Опис/Чоловіки/Водолій.txt';
const Rubu_man = 'Опис/Чоловіки/Риби.txt';

// _____________________Описи Жінки Зодіак__________________________________

const Oven_woman = 'Опис/Жінки/Овен.txt';
const Telec_woman = 'Опис/Жінки/Телець.txt';
const Bluznyku_woman = 'Опис/Жінки/Близнюки.txt';
const Rak_woman = 'Опис/Жінки/Рак.txt';
const Lev_woman = 'Опис/Жінки/Лев.txt';
const Diva_woman = 'Опис/Жінки/Діва.txt';
const Terezu_woman = 'Опис/Жінки/Терези.txt';
const Skorpion_woman = 'Опис/Жінки/Скорпіон.txt';
const Strilec_woman = 'Опис/Жінки/Стрілць.txt';
const Kozerig_woman = 'Опис/Жінки/Козеріг.txt';
const Vodoliy_woman = 'Опис/Жінки/Водолій.txt';
const Rubu_woman = 'Опис/Жінки/Риби.txt';

// ___________________Опис Чоловіки Східний_________________________________

const Musha_man = 'Опис2/Чоловіки/Миша.txt';
const Buk_man = 'Опис2/Чоловіки/Бик.txt';
const Tugr_man = 'Опис2/Чоловіки/Тигр.txt';
const Kroluk_man = 'Опис2/Чоловіки/Кролик.txt';
const Dracon_man = 'Опис2/Чоловіки/Дракон.txt';
const Zmia_man = 'Опис2/Чоловіки/Змія.txt';
const Kin_man = 'Опис2/Чоловіки/Кінь.txt';
const Vivcha_man = 'Опис2/Чоловіки/Вівця.txt';
const Mavpa_man = 'Опис2/Чоловіки/Мавпа.txt';
const Piven_man = 'Опис2/Чоловіки/Півень.txt';
const Sobaka_man = 'Опис2/Чоловіки/Пес.txt';
const Svuna_man = 'Опис2/Чоловіки/Свиня.txt';

// ___________________Опис Жінки Східний_________________________________

const Musha_woman = 'Опис2/Жінки/Миша.txt';
const Buk_woman = 'Опис2/Жінки/Бик.txt';
const Tugr_woman = 'Опис2/Жінки/Тигр.txt';
const Kroluk_woman = 'Опис2/Жінки/Кролик.txt';
const Dracon_woman = 'Опис2/Жінки/Дракон.txt';
const Zmia_woman = 'Опис2/Жінки/Змія.txt';
const Kin_woman = 'Опис2/Жінки/Кінь.txt';
const Vivcha_woman = 'Опис2/Жінки/Вівця.txt';
const Mavpa_woman = 'Опис2/Жінки/Мавпа.txt';
const Piven_woman = 'Опис2/Жінки/Півень.txt';
const Sobaka_woman = 'Опис2/Жінки/Пес.txt';
const Svuna_woman = 'Опис2/Жінки/Свиня.txt';

// ____________________Обробка подій_____________

if (button) {
    const months = [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень'
    ];
    
    

    for (let i = 0; i < months.length; i++) {
        const option = document.createElement("option");
        option.value = months[i];   // значення
        option.textContent = months[i]; // текст
        month.appendChild(option);
    }

    year.addEventListener('input', () => {
        year_res = year.value;
    });

    month.addEventListener('blur', () => {
        month_res = month.value;
        if (month_res === 'Січень' || month_res === 'Березень' || month_res === 'Травень' || month_res === 'Липень' || month_res === 'Серпень' || month_res === 'Жовтень' || month_res === 'Грудень') {
            day.innerHTML = '';
            for (let i = 0; i < days31.length; i++) {
                const option = document.createElement("option");
                option.value = days31[i];   // значення
                option.textContent = days31[i]; // текст
                day.appendChild(option);
            }
            
        }
        else if (month_res === 'Квітень' || month_res === 'Червень' || month_res === 'Вересень' || month_res === 'Листопад') {
            day.innerHTML = '';
            for (let i = 0; i < days30.length; i++) {
                const option = document.createElement("option");
                option.value = days30[i];   // значення
                option.textContent = days30[i]; // текст
                day.appendChild(option);
            }
        }
        else if (month_res === 'Лютий' && Number(year_res) % 4 === 0) {
            day.innerHTML = '';
            for (let i = 0; i < days29.length; i++) {
                const option = document.createElement("option");
                option.value = days29[i];   // значення
                option.textContent = days29[i]; // текст
                day.appendChild(option);
            }
        }
        else if (month_res === 'Лютий' && Number(year_res) % 4 !== 0) {
            day.innerHTML = '';
            for (let i = 0; i < days28.length; i++) {
                const option = document.createElement("option");
                option.value = days28[i];   // значення
                option.textContent = days28[i]; // текст
                day.appendChild(option);
            }
        }
    });

    button.addEventListener('click', () => {
        for (let i = 0; i < sex.length; i++) {
            if (sex[i].checked) {
                sex_res = sex[i].value;
                break;
            }
        };
    

            if (set_name.value.length < 4 ) {
                set_name.setAttribute('style', 'border: 4px solid red; ');
                error.innerHTML = "* Коротке ім'я";
                error.setAttribute('style', 'color: red; margin-left: 50px; font-size: 22px;');
                container1.setAttribute('style', 'margin-top: 4px')
            }
            else if (set_name.value.length > 20 ) {
                set_name.setAttribute('style', 'border: 4px solid red; ');
                error.innerHTML = "* Завелике ім'я";
                error.setAttribute('style', 'color: red; margin-left: 50px; font-size: 22px;');
                container1.setAttribute('style', 'margin-top: 4px');
            }
            else if (!year.value || year.value < 1900 || year.value > 2104 || year.value.length < 4 || !Number(year.value)) {
                // забрати помилку
                set_name.setAttribute('style', 'border: none; ');
        
                // _________________________________________________
                year.setAttribute('style', 'border: 4px solid red; ');
                error.innerHTML = "* Некоректний рік народження";
                error.setAttribute('style', 'color: red; margin-left: 50px; font-size: 22px;');
                container1.setAttribute('style', 'margin-top: 4px');
            }
            else if (month.value === 'Місяць') {
                set_name.setAttribute('style', 'border: none;');
                year.setAttribute('style', 'border: none;');
                month.setAttribute('style', 'border: 4px solid red; ');
                error.innerHTML = "* Введіть місяць";
                error.setAttribute('style', 'color: red; margin-left: 50px; font-size: 22px;');
                container1.setAttribute('style', 'margin-top: 4px');
            }
            else if (day.value === 'День') {
                // забрати помилку
                set_name.setAttribute('style', 'border: none; ');
                year.setAttribute('style', 'border: none; ')
                month.setAttribute('style', 'border: none; ');
                day.setAttribute('style', 'border: 4px solid red; ');
                // _________________________________________________
                error.innerHTML = "* Введіть день";
                error.setAttribute('style', 'color: red; margin-left: 50px; font-size: 22px;');
                container1.setAttribute('style', 'margin-top: 4px');
            }
            else if (!sex_res) {
                // забрати помилку
                set_name.setAttribute('style', 'border: none; ');
                year.setAttribute('style', 'border: none; ');
                month.setAttribute('style', 'border: none; ');
                day.setAttribute('style', 'border: none; ');
                
                error.innerHTML = "* Виберіть стать";
                error.setAttribute('style', 'color: red; margin-left: 50px; font-size: 22px;');
                container1.setAttribute('style', 'margin-top: 4px');
                container3.setAttribute('style', 'border: 4px solid red;');
            }
            else{
                set_name.setAttribute('style', 'border: none; ');
                month.setAttribute('style', 'border: none; ');
                day.setAttribute('style', 'border: none; ');
                year.setAttribute('style', 'border: none; ');
                container3.setAttribute('style', 'border: none; ');
                error.innerHTML = '';

                sessionStorage.setItem('inputtext', set_name.value);
                sessionStorage.setItem('dayV', day.value);
                sessionStorage.setItem('monthV', month.value);
                sessionStorage.setItem('yearV', year.value);
                sessionStorage.setItem('sexV', sex_res);
                window.location.href = 'zodiak.html'
            }
    })
}else {
    const inputText = sessionStorage.getItem('inputtext');
    day_res = sessionStorage.getItem('dayV');
    month_res = sessionStorage.getItem('monthV');
    year_res = sessionStorage.getItem('yearV');
    sex_res = sessionStorage.getItem('sexV');
    first_name.innerHTML = inputText
}

if (button_read) {
    tup_gor_res = null
    button_read.addEventListener('click', () => {
        for (let i = 0; i < tup_gor.length; i++) {
            if (tup_gor[i].checked) {
                tup_gor_res = tup_gor[i].value;
                break;
            }
        };
        if (tup_gor_res === 'zodiak' ) {
            // Овен
            if (month_res === 'Березень' && march_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Квітень' && april_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Овен';
                loadText(Oven_man)
                img_small.src = "files/img/zod_icon/Овен.png";
                img_big.src = "files/img/zod/Овен.png";
                
            }
            else if (month_res === 'Березень' && march_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Квітень' && april_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Овен';
                loadText(Oven_woman)
                img_small.src = "files/img/zod_icon/Овен.png";
                img_big.src = "files/img/zod/Овен.png";
            }
            // Телець
            else if (month_res === 'Квітень' && april_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Травень' && may_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Телець';
                loadText(Telec_man)
                img_small.src = "files/img/zod_icon/Телець.png";
                img_big.src = "files/img/zod/Телець.png";
            }
            else if (month_res === 'Квітень' && april_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Травень' && may_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Телець';
                loadText(Telec_man)
                img_small.src = "files/img/zod_icon/Телець.png";
                img_big.src = "files/img/zod/Телець.png";
            }
            // Близнюки
            else if (month_res === 'Травень' && may_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Червень' && june_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Близнюки';
                loadText(Bluznyku_man)
                img_small.src = "files/img/zod_icon/Близнюки.png";
                img_big.src = "files/img/zod/Близнюки.png";
            }
            else if (month_res === 'Травень' && may_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Червень' && june_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Близнюки';
                loadText(Bluznyku_woman)
                img_small.src = "files/img/zod_icon/Близнюки.png";
                img_big.src = "files/img/zod/Близнюки.png";
            }
            // Рак
            else if (month_res === 'Червень' && june_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Липень' && july_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Рак';
                loadText(Rak_man)
                img_small.src = "files/img/zod_icon/Рак.png";
                img_big.src = "files/img/zod/Рак.png";
            }
            else if (month_res === 'Червень' && june_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Липень' && july_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Рак';
                loadText(Rak_woman)
                img_small.src = "files/img/zod_icon/Рак.png";
                img_big.src = "files/img/zod/Рак.png";
            }
            // Лев
            else if (month_res === 'Липень' && july_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Серпень' && august_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Лев';
                loadText(Lev_man)
                img_small.src = "files/img/zod_icon/Лев.png";
                img_big.src = "files/img/zod/Лев.png";
            }
            else if (month_res === 'Липень' && july_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Серпень' && august_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Лев';
                loadText(Lev_woman)
                img_small.src = "files/img/zod_icon/Лев.png";
                img_big.src = "files/img/zod/Лев.png";
            }
            // Діва
            else if (month_res === 'Серпень' && august_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Вересень' && september_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Діва';
                loadText(Diva_man)
                img_small.src = "files/img/zod_icon/Діва.png";
                img_big.src = "files/img/zod/Діва.png";
            }
            else if (month_res === 'Серпень' && august_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Вересень' && september_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Діва';
                loadText(Diva_woman)
                img_small.src = "files/img/zod_icon/Діва.png";
                img_big.src = "files/img/zod/Діва.png";
            }
            // Терези
            else if (month_res === 'Вересень' && september_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Жовтень' && october_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Терези';
                loadText(Terezu_man)
                img_small.src = "files/img/zod_icon/Терези.png";
                img_big.src = "files/img/zod/Терези.png";
            }
            else if (month_res === 'Вересень' && september_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Жовтень' && october_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Терези';
                loadText(Telec_woman)
                img_small.src = "files/img/zod_icon/Терези.png";
                img_big.src = "files/img/zod/Терези.png";
            }
            // Скорпіон
            else if (month_res === 'Жовтень' && october_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Листопад' && nowember_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Скорпіон';
                loadText(Skorpion_man)
                img_small.src = "files/img/zod_icon/Скорпіон.png";
                img_big.src = "files/img/zod/Скорпіон.png";
            }
            else if (month_res === 'Жовтень' && october_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Листопад' && nowember_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Скорпіон';
                loadText(Skorpion_woman)
                img_small.src = "files/img/zod_icon/Скорпіон.png";
                img_big.src = "files/img/zod/Скорпіон.png";
            }
            // Стрілець
            else if (month_res === 'Листопад' && nowember_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Грудень' && december_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Стрілець';
                loadText(Skorpion_man)
                img_small.src = "files/img/zod_icon/Стрілець.png";
                img_big.src = "files/img/zod/Стрілець.png";
            }
            else if (month_res === 'Листопад' && nowember_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Грудень' && december_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Стрілець';
                loadText(Skorpion_woman)
                img_small.src = "files/img/zod_icon/Стрілець.png";
                img_big.src = "files/img/zod/Стрілець.png";
            }
            // Козеріг
            else if (month_res === 'Грудень' && december_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Січень' && january_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Козеріг';
                loadText(Kozerig_man)
                img_small.src = "files/img/zod_icon/Козеріг.png";
                img_big.src = "files/img/zod/Козеріг.png";
            }
            else if (month_res === 'Грудень' && december_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Січень' && january_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Козеріг';
                loadText(Kozerig_woman)
                img_small.src = "files/img/zod_icon/Козеріг.png";
                img_big.src = "files/img/zod/Козеріг.png";
            }
            // Водолій
            else if (month_res === 'Січень' && january_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Лютий' && february_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Водолій';
                loadText(Vodoliy_man)
                img_small.src = "files/img/zod_icon/Водолій.png";
                img_big.src = "files/img/zod/Водолій.png";
            }
            else if (month_res === 'Січень' && january_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Лютий' && february_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Водолій';
                loadText(Vodoliy_woman)
                img_small.src = "files/img/zod_icon/Водолій.png";
                img_big.src = "files/img/zod/Водолій.png";
            }
            // Риби
            else if (month_res === 'Лютий' && february_last.includes(Number(day_res)) && sex_res == 'man' || month_res === 'Березень' && march_first.includes(Number(day_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Риби';
                loadText(Rubu_man)
                img_small.src = "files/img/zod_icon/Риби.png";
                img_big.src = "files/img/zod/Риби.png";
            }
            else if (month_res === 'Лютий' && february_last.includes(Number(day_res)) && sex_res == 'woman' || month_res === 'Березень' && march_first.includes(Number(day_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Риби';
                loadText(Rubu_woman)
                img_small.src = "files/img/zod_icon/Риби.png";
                img_big.src = "files/img/zod/Риби.png";
            }
        }
        else if (tup_gor_res === 'shidnuy' ) {
            // Миша
            if (musha.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Миша';
                loadText(Musha_man)
                img_small.src = "files/img/kut_icon/Миша.png";
                img_big.src = "files/img/kut/Миша.png";
            }
            else if (musha.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Миша';
                loadText(Musha_woman)
                img_small.src = "files/img/kut_icon/Миша.png";
                img_big.src = "files/img/kut/Миша.png";
            }
            // Бик
            else if (buk.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Бик';
                loadText(Buk_man)
                img_small.src = "files/img/kut_icon/Бик.png";
                img_big.src = "files/img/kut/Бик.png";
            }
            else if (buk.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Бик';
                loadText(Buk_woman)
                img_small.src = "files/img/kut_icon/Бик.png";
                img_big.src = "files/img/kut/Бик.png";
            }
            // Тигр
            else if (tugr.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Тигр';
                loadText(Tugr_man)
                img_small.src = "files/img/kut_icon/Тигр.png";
                img_big.src = "files/img/kut/Тигр.png";
            }
            else if (tugr.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Тигр';
                loadText(Tugr_woman)
                img_small.src = "files/img/kut_icon/Тигр.png";
                img_big.src = "files/img/kut/Тигр.png";
            }
            // Кролик
            else if (kroluk.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Кролик';
                loadText(Kroluk_man)
                img_small.src = "files/img/kut_icon/Кролик.png";
                img_big.src = "files/img/kut/Кролик.png";
            }
            else if (kroluk.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Кролик';
                loadText(Kroluk_woman)
                img_small.src = "files/img/kut_icon/Кролик.png";
                img_big.src = "files/img/kut/Кролик.png";
            }
            // Дракон
            else if (drakon.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Дракон';
                loadText(Dracon_man)
                img_small.src = "files/img/kut_icon/Дракон.png";
                img_big.src = "files/img/kut/Дракон.png";
            }
            else if (drakon.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Дракон';
                loadText(Dracon_woman)
                img_small.src = "files/img/kut_icon/Дракон.png";
                img_big.src = "files/img/kut/Дракон.png";
            }
            // Змія
            else if (zmia.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Змія';
                loadText(Zmia_man)
                img_small.src = "files/img/kut_icon/Змія.png";
                img_big.src = "files/img/kut/Змія.png";
            }
            else if (zmia.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Змія';
                loadText(Zmia_woman)
                img_small.src = "files/img/kut_icon/Змія.png";
                img_big.src = "files/img/kut/Змія.png";
            }
            // Кінь
            else if (kin.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Кінь';
                loadText(Kin_man)
                img_small.src = "files/img/kut_icon/Кінь.png";
                img_big.src = "files/img/kut/Кінь.png";
            }
            else if (kin.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Кінь';
                loadText(Kin_woman)
                img_small.src = "files/img/kut_icon/Кінь.png";
                img_big.src = "files/img/kut/Кінь.png";
            }
            // Вівця
            else if (vivcha.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Вівця';
                loadText(Vivcha_man)
                img_small.src = "files/img/kut_icon/Вівця.png";
                img_big.src = "files/img/kut/Вівця.png";
            }
            else if (vivcha.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Вівця';
                loadText(Vivcha_woman)
                img_small.src = "files/img/kut_icon/Вівця.png";
                img_big.src = "files/img/kut/Вівця.png";
            }
            // Мавпа
            else if (mavpa.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Мавпа';
                loadText(Mavpa_man)
                img_small.src = "files/img/kut_icon/Мавпа.png";
                img_big.src = "files/img/kut/Мавпа.png";
            }
            else if (mavpa.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Мавпа';
                loadText(Mavpa_woman)
                img_small.src = "files/img/kut_icon/Мавпа.png";
                img_big.src = "files/img/kut/Мавпа.png";
            }
            // Півень
            else if (piven.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Півень';
                loadText(Piven_man)
                img_small.src = "files/img/kut_icon/Півень.png";
                img_big.src = "files/img/kut/Півень.png";
            }
            else if (piven.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Півень';
                loadText(Piven_woman)
                img_small.src = "files/img/kut_icon/Півень.png";
                img_big.src = "files/img/kut/Півень.png";
            }
            // Собака
            else if (sobaka.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Пес';
                loadText(Sobaka_man)
                img_small.src = "files/img/kut_icon/Пес.png";
                img_big.src = "files/img/kut/Пес.png";
            }
            else if (sobaka.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Пес';
                loadText(Sobaka_woman)
                img_small.src = "files/img/kut_icon/Пес.png";
                img_big.src = "files/img/kut/Пес.png";
            }
            // Свиня
            else if (svuna.includes(Number(year_res)) && sex_res == 'man') {
                gorosop_name.innerHTML = 'Свиня';
                loadText(Svuna_man)
                img_small.src = "files/img/kut_icon/Свиня.png";
                img_big.src = "files/img/kut/Свиня.png";
            }
            else if (svuna.includes(Number(year_res)) && sex_res == 'woman') {
                gorosop_name.innerHTML = 'Свиня';
                loadText(Sobaka_woman)
                img_small.src = "files/img/kut_icon/Свиня.png";
                img_big.src = "files/img/kut/Свиня.png";
            }
        }
    })
}