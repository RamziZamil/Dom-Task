const fruits = [
  { name: "Apple", image: "./assets/apple.jpg" },
  { name: "Banana", image: "./assets/banana.jpg" },
  { name: "Cherry", image: "./assets/cherry.jpg" },
  { name: "Orange", image: "./assets/orange.jpg" },
  { name: "Grapes", image: "./assets/grape.jpg" },
];

const fruitList = document.getElementById("fruit-list");

for (const fruit of fruits) {
  const listItem = document.createElement("li");

  const fruitImage = document.createElement("img");
  fruitImage.src = fruit.image;
  fruitImage.alt = fruit.name;

  const fruitName = document.createElement("p");
  fruitName.textContent = fruit.name;

  listItem.appendChild(fruitImage);
  listItem.appendChild(fruitName);
  fruitList.appendChild(listItem);
}

// let fruitsList = document.querySelector("ul");

// // Add "Apple" with an image
// let item1 = document.createElement("li");

// let appleImage = document.createElement("img");
// appleImage.src = "./assets/apple.jpg"; // Path to the apple image
// appleImage.alt = "Apple"; // Accessibility text for the image
// appleImage.style.width = "50px"; // Optional: Adjust image size
// appleImage.style.height = "50px";

// let appleName = document.createElement("span");
// appleName.textContent = "Apple";

// item1.appendChild(appleImage); // Add the image to the list item
// item1.appendChild(appleName); // Add the name to the list item

// fruitsList.appendChild(item1); // Add the list item to the <ul>

// // Repeat for Banana
// let item2 = document.createElement("li");

// let bananaImage = document.createElement("img");
// bananaImage.src = "./assets/banana.jpg"; // Path to the banana image
// bananaImage.alt = "Banana";
// bananaImage.style.width = "50px";
// bananaImage.style.height = "50px";

// let bananaName = document.createElement("span");
// bananaName.textContent = "Banana";

// item2.appendChild(bananaImage);
// item2.appendChild(bananaName);

// fruitsList.appendChild(item2);

// // Repeat for Cherry, Orange, and Grape

// let item3 = document.createElement("li");
// item3.textContent = "cherry";
// fruitsList.appendChild(item3);

// let item4 = document.createElement("li");
// item4.textContent = "orange";
// fruitsList.appendChild(item4);

// let item5 = document.createElement("li");
// item5.textContent = "grape";
// fruitsList.appendChild(item5);

// Q2
function numberArray(array, digit) {
  const index = array.indexOf(digit);
  if (index !== -1) {
    return index;
  } else {
    return -1;
  }
}
const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];
const valueFind = 1008;
const result = numberArray(array, valueFind);
console.log(`We need to find: ${valueFind}`);
console.log(`The Index of the Number is: ${result}`);
