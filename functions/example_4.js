console.log('> Example 4');

let tea = 'sweet';

if (true) {
  let tea = 'iced';
  tea = 'sour';
}

console.log('> \t :', tea);

// Локальная переменная определена в блоке if, те она будет использована внутри локального "скоупа"
// изменение не затронут переменной в глобальном "скоупе"