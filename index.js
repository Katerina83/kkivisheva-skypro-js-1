//hw2
//Задание #1 (функция генерирующая случайное число)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    console.log('Пожалуйста, введите другое число. Числа либо равны, либо минимальное число больше максимального');
  } else {
  return 'случайное число равно ' + Math.floor(Math.random() * (max - min)) + min;
}
}
// eslint-disable-next-line
console.log(getRandomInt(3,10))
console.log(getRandomInt(5,10))
console.log(getRandomInt(1,90))

//Задание #2 ()

