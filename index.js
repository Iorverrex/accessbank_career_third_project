// 1. Create variables to store name, age, and nationality. Combine them into an introduction sentence.
let name = "John Doe";
let age = 25;
let nationality = "Nigerian";
let introduction = `My name is ${name}, I am ${age} years old and I am ${nationality}.`;
console.log(introduction);

// 2. Create a variable for a favorite quote or lyric. Convert to uppercase and lowercase.
let favoriteQuote = "get rich or die trying, check your back for more clearity.";
let upperCaseQuote = favoriteQuote.toUpperCase(); // Change to uppercase
let lowerCaseQuote = favoriteQuote.toLowerCase(); // Change to lowercase
console.log(upperCaseQuote);
console.log(lowerCaseQuote);

// 3. Reverse a word and log it.
let word = "Engineering"; // Word to reverse
let reversedWord = word.split("").reverse().join(""); // Split word into an array, reverse it, and join back
console.log(reversedWord);

// 4. Store the price of 3 items, calculate total, and display a message.
let item1Price = 24.99; // Price of item 1
let item2Price = 10.20;
let item3Price = 8.23;
let totalPrice = item1Price + item2Price + item3Price; // Calculate total
console.log(`The total price of the items is $${totalPrice.toFixed(2)}.`);

// 5. Find the average of 5 test scores and display a message.
let score1 = 81;
let score2 = 95;
let score3 = 60;
let score4 = 91;
let score5 = 77;
let averageScore = (score1 + score2 + score3 + score4 + score5) / 5; // Calculate average
console.log(`The average test score is ${averageScore.toFixed(2)}.`);

// 6. Create an array of 5 favorite foods and display the first and last items.
let favoriteFoods = ["Mango", "Rice", "Orange", "Akpu", "Yam"]; // Array of favorite foods
console.log(`The first food is ${favoriteFoods[0]} and the last food is ${favoriteFoods[favoriteFoods.length - 1]}.`);

// 7. Add two more food items: one at the beginning and one at the end. Display the new list.
favoriteFoods.unshift("Banan"); // Add to the beginning
favoriteFoods.push("Corn"); // Add to the end
console.log("The new list of favorite foods is: ", favoriteFoods);

// 8. Create arrays for JSS One, JSS Two, and JSS Three students.
let jssOne = ["Alice", "Ben", "Carol", "David", "Ella", "Frank", "Grace", "Hannah", "Ian", "Jack"];
let jssTwo = ["Kate", "Leo", "Mia", "Nathan", "Olivia", "Paul", "Quinn", "Rachel", "Sam", "Tina"];
let jssThree = ["Uma", "Victor", "Will", "Xander", "Yara", "Zoe", "Aaron", "Bella", "Chris", "Diana"];

console.log("JSS One students: ", jssOne);
console.log("JSS Two students: ", jssTwo);
console.log("JSS Three students: ", jssThree);
