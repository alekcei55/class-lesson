 
































































































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