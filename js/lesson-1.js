// split slice join trim
// 
const arrayB = [1, true, "Poly"];
console.log(arrayB.length)
console.log(arrayB);
console.log(arrayB.join("")); // "1truePoly";
let stringB = String(arrayB); // "1,true,Poly"
console.log(stringB); // "1,true,Poly"
const arrayC = stringB.split(",")
console.log(arrayC); // ["1", "true" ,"Poly"]
stringB = " " + stringB.slice(2, 6) + " "; // (-2) будуть скопійовані останні 2 елементів
console.log(stringB); // " true "
stringB = stringB.trim();
console.log(stringB); // "true"
console.log(arrayB.splice(1, 1)); // Видаляє 1 елемент, починаючи з індексу 1
console.log(arrayB); // [1, `Poly`]
console.log(arrayB.pop()); // Poly /// Видаляє 1 елемент з кінця та повертає його
console.log(arrayB); // [1]
console.log(arrayB.push("newitem")); // 2 /// Додає 1 елемент у кінець масиву
console.log(arrayB); // [1, "newitem"]

//* firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
console.log(fruits.slice(0, 2) );
console.log(fruits.slice(1, fruits.length - 1) );
console.log(fruits.slice(-3));

console.log(fruits.concat(arrayC)); //Метод concat(arr1, arr2, ..., arrN) використовується для об'єднання масивів.

/// array.indexOf(elem)
// array — масив, у якому здійснюється пошук.
// elem — елемент, індекс якого потрібно знайти в масив

//* порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно
function getSlice(array, value) { return array.slice(0, (array.indexOf(value)) + 1) }
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // повертає `["Mango", "Poly"]`


/// array.push(element1, element2, ..., elementN);
// array — це вихідний масив, до якого потрібно додати елементи;
// element1, element2, ..., elementN — елементи, які необхідно додати в кінець масиву.

function createArrayOfNumbers(min, max) {
    const arrayAA = [min]
    for (; min++ < max; ) {
        arrayAA.push(min);
    }
    return arrayAA;
}
  console.log(createArrayOfNumbers(2,5)); // [3, 4 ,5]
  
function getEvenNumbers(start, end) {
    const arrayAB = []
    while (start <= end) {
        start % 2 ? start++ : arrayAB.push(start++);
    }
    return arrayAB;
}

console.log(getEvenNumbers(2,4)); // 6

//
// function getCommonElements(array1, array2) {
//     const newArray = []
//     for (const element1 of array1) {
//         for (const element2 of array2) {
//             element1 === element2 ? newArray.push(element1) : element1
//         }
//     }
// return newArray
// }
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // повертає [1, 2]


//* Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.

//
function getCommonElements1(array1, array2) {
    const newArray = []
    for (const element of array1) { array2.includes(element) ? newArray.push(element) : element }
return newArray
}
console.log(getCommonElements1([1, 2, 3], [2, 1, 17, 19, 1])); // повертає [1, 2]

//
function getCommonElements3(array1, array2) {
    return array1.filter(function(element) { return array2.includes(element) })}

console.log(getCommonElements3([1, 2, 3], [2, 1, 17, 19, 1])); // [1, 2]

//
function getCommonElements4(array1, array2) {
    return array1.filter(function(element) { return array2.includes(element) })}

console.log(getCommonElements4([1, 2, 3], [2, 1, 17, 19,1 ])); // [1, 2]

// швидка перевірка через Set
function getCommonElements5(array1, array2) {
    var set2 = new Set(array2) // Тільки один Set для швидкого пошуку
    return array1.filter(function(element) {
        return set2.has(element) // O(1) перевірка наявності
    })
}
console.log((getCommonElements5([1, 5, 2], [2, 1,  17, 3, 19, 5]))); // [1, 2]
console.table((getCommonElements5([1, 5, 2], [2, 1,  17, 3, 19, 5]))); // [1, 2]

// Якщо масиви дуже великі, можна повернути Set замість масиву
function getCommonElements6(array1, array2) {
    var set2 = new Set(array2) // Тільки один Set для швидкого пошуку
    return new Set (array1.filter(function(element) {
        return set2.has(element) // O(1) перевірка наявності
    }))
}
console.log((getCommonElements6([1, 5, 2], [2, 1,  17, 3, 19, 5]))); // [1, 2]
console.table((getCommonElements6([1, 5, 2], [2, 1, 17, 3, 19, 5]))); // [1, 2]

//
function getCommonElements7(array1, array2) {
const newSet = new Set(array2);
    return array1.filter(newSet.has, newSet)
}

console.log((getCommonElements7([1, 5, 2], [2, 1, 17, 3, 19, 5]))); // [1, 2]
console.table((getCommonElements7([1, 5, 2], [2, 1, 17, 3, 19, 5]))); // [1, 2]

/// Шпаргалка по методам масивів:
// split/join -- перетворює рядок на масив і назад.
// push () -- додає елементи до кінця,
// pop() -- видаляє елемент з кінця,
// shift() -- видаляє елемент із початку,
// unshift() - додає елементи на початок.
// splice(index, deleteIndex, ...arr) -- починаючи з індексу index, видаляє deleteIndex елементів і вставляє arr.
// slice(start, end) -- створює новий масив, копіюючи елементи з позиції start до end (не включаючи end).
// .map()	Створює новий масив, трансформуючи кожен елемент
// .filter()	Створює новий масив, відбираючи елементи за умовою
// .forEach()	Виконує дію для кожного елемента, не повертає значення
// .reduce()	Зводить масив до одного значення (сума, об'єкт, рядок тощо)

// .reduce() - https://chatgpt.com/share/67a30b89-0f08-8006-9ac6-94a1638ae191
function calculateTotalPrice2(order) {
    return order.reduce((total, element) => total + element, 0);
}
console.log(calculateTotalPrice2([412, 371, 94, 63, 176]));

//
function calculateTotalPrice3(order) {
    return order.reduce(function(accumulator, element) {return accumulator + element});}

console.log(calculateTotalPrice3([412, 371, 94, 63, 176])); // 1116


/// Доступ до списку всіх аргументів можна отримати за допомогою спеціальної змінної arguments    
// 
function calculateTotalPrice1() {
    let calc = 0
    console.log(arguments, typeof (arguments))
    for (const element of arguments) {
        console.log(element);
        calc += element;
     }
    return calc }
console.log(calculateTotalPrice1(1, 2, 3, 4, 5))

//* .reverse повертає масив у зворотному порядку
// arguments – це псевдомасив, тому його потрібно перетворити на масив.
//
function createReversedArray1() {
    return Array.from(arguments).reverse();
}

// Щоб додавати нові елементи на початок масиву, зсуваючи попередні вправо, використовуйте метод unshift() 
//
function createReversedArray() {
    let newArray = []
    for (const element of arguments) {
        newArray.unshift(element) }
        return newArray
    
 }
console.log(createReversedArray(412, 371, 94, 63, 176)); // Виведе: [176, 63, 94, 371, 412]

// значення за замовчуванням якщо аргумент не вказано
function calculateTax(amount, taxRate = 0.2) {
    return amount * taxRate
  }

