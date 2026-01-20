 function validateData(name, surname, phone, email) {
    const patterns = {
        // Имя: только буквы, может содержать дефис и апостроф, минимум 2 символа
        name: /^[A-ZА-ЯЁ][a-zа-яё\-']{1,49}$/,
        
        // Фамилия: только буквы, может содержать дефис, минимум 2 символа
        surname: /^[A-ZА-ЯЁ][a-zа-яё\-']{1,49}$/,
        
        // Телефон: форматы +7 123 456-12-65 или +71234561265
        phone: /^\+7\s?\d{3}\s?\d{3}[-]?\d{2}[-]?\d{2}$/,
        
        // Email: стандартный формат email
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    };
    
    const results = {
        name: patterns.name.test(name),
        surname: patterns.surname.test(surname),
        phone: patterns.phone.test(phone),
        email: patterns.email.test(email)
    };
    
    return results;
}

// Тестирование функции
console.log("=== Задача 1: Проверка данных ===");

// Тестовые данные
const testData = [
    {
        name: "Алексей",
        surname: "Иванов",
        phone: "+7 123 456-12-65",
        email: "alexey@example.com"
    },
    {
        name: "John",
        surname: "Doe-Smith",
        phone: "+71234561265",
        email: "john.doe@company.co.uk"
    },
    {
        name: "Анна-Мария",
        surname: "Петрова",
        phone: "+7 987 654-32-10",
        email: "anna@test.ru"
    },
    {
        name: "123",
        surname: "Test",
        phone: "8 123 456-78-90",
        email: "invalid-email"
    }
];

// Проверка каждого набора данных
testData.forEach((data, index) => {
    console.log(`\nТест ${index + 1}:`);
    console.log(`Имя: ${data.name}`, validateData(data.name, data.surname, data.phone, data.email).name);
    console.log(`Фамилия: ${data.surname}`, validateData(data.name, data.surname, data.phone, data.email).surname);
    console.log(`Телефон: ${data.phone}`, validateData(data.name, data.surname, data.phone, data.email).phone);
    console.log(`Email: ${data.email}`, validateData(data.name, data.surname, data.phone, data.email).email);
});

// Функция для валидации с пояснениями
function validateWithMessages(name, surname, phone, email) {
    const validation = validateData(name, surname, phone, email);
    const messages = [];
    
    if (!validation.name) messages.push("Имя должно начинаться с заглавной буквы и содержать только буквы, дефисы или апострофы (2-50 символов)");
    if (!validation.surname) messages.push("Фамилия должна начинаться с заглавной буквы и содержать только буквы, дефисы или апострофы (2-50 символов)");
    if (!validation.phone) messages.push("Телефон должен быть в формате: +7 123 456-12-65 или +71234561265");
    if (!validation.email) messages.push("Email должен быть в формате: example@domain.com");
    
    return {
        isValid: Object.values(validation).every(v => v === true),
        messages: messages,
        details: validation
    };
}

console.log("\n=== Подробная проверка ===");
const detailedCheck = validateWithMessages("Иван", "Петров", "+7 999 888-77-66", "ivan@mail.ru");
console.log("Валидность:", detailedCheck.isValid);
if (detailedCheck.messages.length > 0) {
    console.log("Ошибки:", detailedCheck.messages);
}
Задача 2: Замена частей строки
javascript
// 2. Замена частей строки до и после @
function swapEmailParts(str) {
    // Регулярное выражение для поиска email-подобных строк
    // [a-zA-Z0-9]+ - любое количество букв и цифр
    // @ - символ @
    // [a-zA-Z0-9]+ - любое количество букв и цифр
    const regex = /([a-zA-Z0-9]+)@([a-zA-Z0-9]+)/g;
    
    // Замена: меняем местами группы 1 и 2
    // $1 - то, что было до @ (первая группа)
    // $2 - то, что было после @ (вторая группа)
    return str.replace(regex, '$2@$1');
}

// Альтернативная версия с более гибким шаблоном
function swapEmailPartsEnhanced(str) {
    // Расширенное регулярное выражение:
    // \w+ - любое количество букв, цифр и символа подчеркивания
    // @ - символ @
    // \w+ - любое количество букв, цифр и символа подчеркивания
    const regex = /(\w+)@(\w+)/g;
    
    return str.replace(regex, '$2@$1');
}

// Тестирование
console.log("\n=== Задача 2: Замена частей email ===");

const testString = 'aaa@bbb eee7@kkk';
console.log("Исходная строка:", testString);
console.log("Результат:", swapEmailParts(testString));
console.log("Улучшенный результат:", swapEmailPartsEnhanced(testString));

// Дополнительные тесты
const testCases = [
    'user@domain',
    'test123@example',
    'admin@server',
    'hello@world foo@bar',
    'john123@doe456'
];

console.log("\nДополнительные тесты:");
testCases.forEach(testCase => {
    console.log(`${testCase} => ${swapEmailParts(testCase)}`);
});

// Функция для обработки только валидных email-адресов
function swapValidEmailParts(str) {
    // Более строгое регулярное выражение для email
    const emailRegex = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
    
    return str.replace(emailRegex, (match, beforeAt, afterAt) => {
        return afterAt + '@' + beforeAt;
    });
}

console.log("\n=== Обработка только валидных email ===");
const complexString = 'user@example.com test@domain.org invalid@short invalid-email';
console.log("Строка с разными форматами:", complexString);
console.log("Результат:", swapValidEmailParts(complexString));
































































































// Универсальная функция-калькулятор для выполнения операций над произвольным набором чисел
function calculator(operation = 'add', ...numbers) {
    // Проверяем, что первый аргумент - строка
    if (typeof operation !== 'string') return 'Ошибка: неверный тип параметра операции';
    
    // Определяем массив поддерживаемых операций
    const supportedOperations = ['add', 'subtract', 'multiply', 'divide', 'average'];
    
    // Проверяем наличие хотя бы одного числа и проверяем их типы
    if (!Array.isArray(numbers)) return 'Ошибка: некорректный список чисел';
    if (numbers.length === 0 || !numbers.every(num => typeof num === 'number')) return 'Ошибка: все аргументы должны быть числами';
    
    // Обрабатываем случай отсутствия переданных чисел
    if (numbers.length === 0 && operation !== 'average') return 0;
    
    switch (operation.toLowerCase()) {
        case 'add':
            return numbers.reduce((acc, curr) => acc + curr, 0);
        
        case 'subtract':
            if (numbers.length <= 1) return numbers[0];
            return numbers.slice(1).reduce((acc, curr) => acc - curr, numbers[0]);
            
        case 'multiply':
            return numbers.reduce((acc, curr) => acc * curr, 1); // Начальное значение множителя - единица
        
        case 'divide':
            if (numbers.some(num => num === 0 && numbers.indexOf(num) > 0)) return 'Ошибка: деление на ноль'; // Запрещаем деление на 0
            if (numbers.length <= 1) return numbers[0]; // Одно число остается самим собой
            return numbers.slice(1).reduce((acc, curr) => acc / curr, numbers[0]); // Деление начинается с первого элемента
        
        case 'average':
            if (numbers.length === 0) return 0;
            return numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
        
        default:
            return 'Ошибка: неизвестная операция';
    }
}

// Примеры использования функции
console.log(calculator('add', 1, 56546343456, 3)); // Результат: 6
console.log(calculator('subtract', 14232356, 14789)); // Результат: 2
console.log(calculator('multiply', 2, 3, 4)); // Результат: 24
console.log(calculator('divide', 8, 2, 2)); // Результат: 2
console.log(calculator('average', 1, 2, 3, 4)); // Результат: 2.5