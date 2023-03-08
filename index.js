
//Answer to question No 1

// Mutating array methods are ones that change the object after the method has been used. Non-mutating methods on the other hand do not change the object after the method has been used.

// Mutating Array Methods
// array.fill()
// array.pop()
// array.push()
// array.shift()
// array.splice()

// Non-Mutating Array Methods
// array.concat()
// array.includes()
// array.indexOf
// array.join()
// array.slice()

// ====================================================================

//Answer to question No 2

const languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// 1. Add ‘Kotlin’ to the end of the array

languages.splice (5,0,'Kotlin');

console.log (languages);

// 2. Add ‘Java’ after ‘Ruby’

languages.splice (3,0, 'Java');
console.log (languages);

// 3. Remove the first item in the array

languages.splice (0, 1);
console.log (languages);

// 4. Add ’Scala’ and ‘Swift’ to the beginning of the array

languages.splice (0, 0, 'Scala', 'Swift');
console.log (languages);

// 5. Replace ‘PHP’ with ‘Go’ and ‘Rust’

languages.splice (3, 3, 'RUST', 'GO');
console.log (languages);

// ====================================================================

//Answer to question No 3

let fruit = ['apple', 'mango', 'banana'];

function changeFruit( fruit ) {
    fruit[2] = "orange";
    return fruit;
}

console.log (changeFruit (fruit));

// The value of fruit after calling the function changeFruit will be 
//[ 'apple', 'mango', 'orange' ]

// ====================================================================

//Answer to question No 4

let numbers = [4, 6, 13, 23, 7, 9];

const maxValue = (numbers) => ('maximum value is ' + Math.max(...numbers));

console.log (maxValue(numbers));


// ====================================================================

//Answer to question No 5

function valTimesIndex (arrayOfNumbers) {
    const result = [];
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        let multipleOfIndex = arrayOfNumbers[i]*i
        result.push (multipleOfIndex);
    }
    return result

}

let numbersMultipliedByIndex = valTimesIndex ([2,3,4]);
console.log (numbersMultipliedByIndex);

