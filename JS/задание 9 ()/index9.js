function calculator(operation = 'add', ...numbers) {
             if (numbers.length === 0) {
numbers = [0];
}                                                           

 if (numbers.length === 0) {
        numbers = [0];
 }
 for (let  num of numbers) {
        if ( typeof num !== 'number') {
            return 'неправильный ввод: все аргументы должны быть числами';
        }
    }

let totalDeer
  switch (operation) {
        case 'add':
         totalDeer = 0;  
  for (let i = 0; i < numbers.length; i++) {
    totalDeer += numbers[i]
  }
  return totalDeer
        case 'subtract':
            if (numbers.length === 1) return numbers[0];
            totalDeer = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    totalDeer -= numbers[i]
     }
  return totalDeer
        case 'multiply':
         totalDeer = 1;
for (let i = 0; i < numbers.length; i++) {
    totalDeer *= numbers[i]
 }
  return totalDeer
        case 'divide':
            if (numbers.includes(0)) {
                return 'Ошибка:на ноль делить на нельзя';
            }
            if (numbers.length === 1) return numbers[0];
             totalDeer = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    totalDeer /= numbers[i]
 }
  return totalDeer
        case 'average':
            if (numbers.length === 0) return 0;
             totalDeer = 0; 
for (let i = 0; i < numbers.length; i++) {
    totalDeer += numbers[i]
     }
  return totalDeer / numbers.length;
        default:
            return 'Ошибка: неизвестная операция';
    }
}


// Сложение
console.log(calculator('add', 1, 2, 3));        // 6
console.log(calculator('add', 10, 20));         // 30

// Вычитание  
console.log(calculator('subtract', 10, 3, 2));  // 5 (10 - 3 - 2 = 5) 
console.log(calculator('subtract', 5));         // 5

// Умножение
console.log(calculator('multiply', 2, 3, 4));   // 24
console.log(calculator('multiply', 5));         // 5

// Деление
console.log(calculator('divide', 20, 2, 2));    // 5 (20 / 2 / 2 = 5)
console.log(calculator('divide', 10));          // 10
console.log(calculator('divide', 10, 0));       // 'Ошибка: деление на ноль'

// Среднее значение
console.log(calculator('average', 10, 20, 30)); // 20

// Значения по умолчанию
console.log(calculator());                      // 0 (add + нет чисел)
console.log(calculator('add'));                 // 0 (нет чисел)

// Ошибки
console.log(calculator('add', 1, '2', 3));      // 'Ошибка: все аргументы должны быть числами'
console.log(calculator('unknown', 1, 2));       // 'Ошибка: неизвестная операция'
console.log(calculator(123, 1, 2));             // 'Ошибка: все аргумен












