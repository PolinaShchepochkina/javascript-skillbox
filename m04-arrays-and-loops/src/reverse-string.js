// это функция, внутри которой нужно написать ваш код
// str (входная строка) будет задаваться в момент вызова функции, как в примере кода под ней
function reverseString(str) {
  let strReverse = '';

  // Начальной точкой цикла будет (str.length - 1), что соответствует последнему символу в строке.
  // Пока і больше или равна 0, цикл будет продолжать работать,
  // уменьшая счетчик на каждой итерации
  for (let i = str.length - 1; i >= 0; i--) {
    strReverse += str[i];
  }
  console.log(strReverse);
}

// вызов функции
reverseString('abc'); // cba
reverseString('12345'); // 54321
// можете вызывать функцию сколько угодно раз подряд с различными параметрами

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default reverseString;
