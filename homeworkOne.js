// Problem 1: In 3-4 sentences, please explain what Big O Notation is.

/**
 * Big O Notation refers to the efficiency, of ones code. In terms of time it takes to execute
 * ones code, and the amount of work needed to complete the task. There is a graph that shows a visual
 * representation of the efficiency of ones code.
 */

// Problem 2: For each of the time complexities shown below:
// - Name the complexity
// - Rank from 1-5 (1 being the best, 5 being the worst)
// - Describe in 1-2 sentences of the complexity
// - Provide a code example of how the complexity works

/**
 *  O(1) - Constant      represented by the red line       Most Ideal scenario   //pushing elements at the end of an array
 *  O(log n) - log       represented by the yellow line    second best ideal scenario    //for loop that loops through some items in an array
 *  O(n)-Linear          represented by the green line    okay scenario/definetly needs improvement  //while loop
 *  O(n^2) - Quadratics   represented by the blue line    stay away from this scenario   //loop inside another loop
 *  O(n!)- Factorial     represented by the purple line   must stay away from this scenario     //  6! 6 X 5 X 4 X 3 X 2 X 1
 */

/**
 *  Problem 3: Name 3 reasons why we care about Big O and we care about code performance.
 * Scalability, Time/monet spent, and shows the type of code you write to employers.
 */

/**
 * Problem 4: What is the problem of using a time method such as performance.now() to measure how “fast” a
 * code runs on our machines.
 * Every machine is different (dependin on age of the machine) and the amount of time that's it takes is always changing.
 */

/**
 * Problem 5: Given the following piece of code:
 * Explain what the TOTAL time complexity is
 * For example, if a function had one linear and a nested for...loop, it would be: n + n^2
 * Explain what the CONSOLIDATED time complexity is
 * For example, if a function had one linear and a nested for...loop, it would condense to: n^2
 */

const someFunction = arr1 => {
	arr1.push(1).pop();

	for (let i = 0; i < arr1.length; i++) {
		//Linear time complexety  //O(n)
		console.log("do something 2");
	}

	for (let i = 0; i < arr1.length; i++) {
		//linear time complexety  //O(n)
		console.log("do something 3");
	}

	for (let i = 0; i < arr1.length; i++) {
		//quadratic time complexety  //O(n^2)
		for (let i = 0; i < arr1.length; i++) {
			console.log("do something 3");
		}
	}
};

/**
 * Problem 6: Given the following piece of code:
 * Explain what the TOTAL time complexity is
 * For example, if a function had one linear and a nested for...loop, it would be: n + n^2
 * Explain what the CONSOLIDATED time complexity is
 * For example, if a function had one linear and a nested for...loop, it would condense to: n^2
 */

const someFunction1 = arr1 => {
	let sum = arr1[1] + arr[2]; //Linear time complexety  //O(n)

	while (condition) {
		sum = arr[5] + arr[7]; // Linear Time Complexity O(n)
	}

	for (let i = 0; i < arr1.length; i++) {
		//// Quadratic Time Complexity O(n^2)
		for (let i = 0; i < arr1.length; i++) {
			for (let i = 0; i < arr1.length; i++) {
				console.log("do something 3");
			}
		}
	}
};

//Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities.
//Constants are negligible as the growth impact comes from Big O. The worse the time complexity
//is the biggest the impact on the performance of your code.

/**
 * Problem 8: In 2-3 sentences, please explain what space complexity is and why we care.
 * Space complexity helps analyze how much additional memory we need to use to compute the action.
 */

/**
 * Problem 9: Given the following data TYPES, label what the space complexity is for each one:  
 
- Boolean   //constant space
- Undefined   //constant space
- Null      //constant space
- Numbers   //constant space
- String    //linear space
- Array     //linear space
- Object    //linear space
 */

/**
 * Problem 10: Give two reasons when you should use a array and when you should use a object.
 *    You should use an array when you want fast access to elements and when you need order.
 *    You should use an object when order doesn't matter and there is no need to access elements fast.
 */

//Problem 11: Given the following object methods, label what the TIME complexity is for each one:
const obj = {
	name: "tony", //Constant
};
//inserting
obj.age = 44; //constant

//removing
delete obj.age; //constant

//searching 1
obj.hasOwnProperty["name"]; //Linear

//searching 2
for (const prop in obj) {
	//constant
	console.log(obj[prop]);
}

//accessing         //constant
obj.age; //44

//retrieving keys       //constant
Object.keys(obj);

//retrieving values         //constant
Object.values(obj);

//Problem 12: Given the following array methods, label what the TIME complexity is for each one:

const arr2 = [1, 2, 3, 4, 5, 6, 7];

//inserting 1
arr2.push(8); //constant

//inserting 2
arr2.unshift(0); //constant

//removing 1
arr2.pop(); //constant

//removing 2
arr2.shift(); //constant

//searching 1
const findNumber = arr2.find(num => num === 2); //Linear

//searching 2           //linear
for (let i = 0; i < arr2.length; i++) {
	if (arr2[i] === 2) {
		return arr2[i];
	}
}

//retrieving
const getNumber = arr2[3]; //constant

//method 1
const double = arr2.map(num => num * 2); //constant

//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5); //constant

//method 3
const getSum = arr2.reduce((total, num) => total + num, 0); //constant

//method 4
for (const num of nums) {
	//constant
	console.log(num * 2);
}

//method 5
const convertToString = arr2.join(" "); //constant

//method 6
const reversed = arr2.reverse(); //constant

/**
 * Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of
 * why it is.
 */

//Problem 1:    nested loops      // Quadratic Time Complexity O(n^2)
function findFirstIndexOfNumber(number, array) {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === number) {
			return i;
		}
	}
	return -1;
}

//Problem 2:      this function has two loops a forEach and an if condition
function findEachIndexOfNumber(number, array) {
	let arrayOfIndexes = [];
	array.forEach(function (element, index) {
		if (element === number) {
			arrayOfIndexes.push(index);
		}
	});
	return arrayOfIndexes;
}

//Problem 3:  //nested if statement code repeats itself // Quadratic Time Complexity O(n^2)
const array = [36, 14, 1, 7, 21];

function higherOrLower(array) {
	if (array[array.length - 1] > array[0]) {
		return "Higher";
	} else if (array[array.length - 1] < array[0]) {
		return "Lower";
	} else {
		return "Neither";
	}
}

//Problem 4:  //Linear
const array = [1, 2, 3, 4, 5, 6, 7, 8];

function determineSumOfSequentialArray(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

//Problem 5:    //Linear
const array = [1, 2, 3, 4, 5, 6, 7, 8];

function determineSumOfSequentialArray(array) {
	return (array.length * (array.length + 1)) / 2;
}

//Problem 6:  // Factorial Time Complexity O(n!)
function searchSortedArray(
	number,
	array,
	beginIndex = 0,
	endIndex = array.length - 1
) {
	let middleIndex = Math.floor((beginIndex + endIndex) / 2);
	if (array[middleIndex] === number) {
		return middleIndex;
	} else if (beginIndex >= endIndex) {
		return -1;
	} else if (array[middleIndex] < number) {
		beginIndex = middleIndex + 1;
		return recursiveBinarySearch(number, array, beginIndex, endIndex);
	} else if (array[middleIndex] > number) {
		endIndex = middleIndex - 1;
		return recursiveBinarySearch(number, array, beginIndex, endIndex);
	}
}

//Problem 7:  // Linear Time Complexity O(n)
const array1 = [3, 7, 9, 12, 15, 18, 32];
const array2 = [3, 3, 7, 41, 76];
function compareArrays(array1, array2) {
	let arrayOfPairs = [];
	array1.forEach(function (e, i) {
		array2.forEach(function (e2, i2) {
			if (e === e2) {
				arrayOfPairs.push([i, i2]);
			}
		});
	});
	return arrayOfPairs;
}

//Problem 8:      //// Factorial Time Complexity O(n!)    There are different types of loops in this code
function sortByValue(array) {
	function swap(array, index1, index2) {
		let temporaryValue = array[index1];
		array[index1] = array[index2];
		array[index2] = temporaryValue;
	}
	let count = 1;
	while (count < array.length) {
		let swapCount = 0;
		for (let i = 0; i < array.length - count; i++) {
			if (array[i] > array[i + 1]) {
				swap(array, i, i + 1);
				swapCount++;
			}
		}
		count++;
	}
	return array;
}

//Problem 9:    //Constant Time Complexity O(1)
function returnDupes(array, array2) {
	let dupeArray = [];
	array.forEach(function (element) {
		if (array2.includes(element)) {
			dupeArray.push(element);
		}
	});
	return dupeArray;
}

//Problem 10: // Constant Time Complexity O(1)
function sumFilteredData(array) {
	return array
		.filter(function (element) {
			return element > 5 && element < 20;
		})
		.reduce(function (valueToAdd, currentValue) {
			return valueToAdd + currentValue;
		}, 0);
}
