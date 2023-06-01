//ДЗ 2. Починаємо програмувати

//1)За допомогою prompt запитати як звуть користувача. За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач.

let myName = prompt('як тебе звуть?')
alert(`Hello, ${myName}! How are you?`)

//2)Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів.

//калькулятор додавання
let calculatorSum = {
  sum() {
    return this.a + this.b
  },

  read() {
    this.a = +prompt('введіть значення  перше для додавання', 0)
    this.b = +prompt('введіть значення  друге для додавання?', 0)
  },
}

calculatorSum.read()
alert(calculatorSum.sum())

//калькулятор віднімання

const calculatorSubtraction = {
  subtraction() {
    return this.a - this.b
  },

  read() {
    this.a = prompt('введіть значення  перше для обчислення', 0)
    this.b = prompt('введіть значення  друге для обчислення', 0)
  },
}

calculatorSubtraction.read()
alert(calculatorSubtraction.subtraction())

//калькулятор множення
let calculatorMultiplication = {
  multiplication() {
    return this.a * this.b
  },

  read() {
    this.a = prompt('введіть значення  перше для множення', 0)
    this.b = prompt('введіть значення  друге для множення', 0)
  },
}

calculatorMultiplication.read()
alert(calculatorMultiplication.multiplication())

//калькулятор поділу
let calculatorDivide = {
  divide() {
    return this.a / this.b
  },

  read() {
    this.a = prompt('введіть значення  перше для поділу', 0)
    this.b = prompt('введіть значення  друге для поділу', 0)
  },
}

calculatorDivide.read()
alert(calculatorDivide.divide())

//3)Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні

const a = 5
const b = 3

console.log(a >= 5 && b >= 3)

console.log(a >= 6 || b >= 5)

//4)Визначити середнє арифметичне трьох чисел

const c = 2
const d = 10
const e = 20

const sum = (c + d + e) / 3

console.log(sum)

//5) Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)

let number = 58794

let digit5 = number % 10
number = Math.floor(number / 10)

let digit4 = number % 10
number = Math.floor(number / 10)

let digit3 = number % 10
number = Math.floor(number / 10)

let digit2 = number % 10
number = Math.floor(number / 10)

let digit1 = number % 10

console.log(`${digit1} ${digit2} ${digit3} ${digit4} ${digit5}`)
