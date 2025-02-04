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
console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly")); // повертає `["Mango", "Poly", "Ajax"]`

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
