'use strict'; 


/*
	Date : 18/12/22
	Time : 4:38 pm
	Name : Gias uddin vuiya
*/


/*	Arrary chunking 
	(['a', 'b', 'c', 'd'], 2) is expected to be [['a', 'b'], ['c', 'd']]
	([0, 1, 2, 3, 4, 5], 3) is expected to be [[0, 1, 2], [3, 4, 5]]
	([0, 1, 2, 3, 4, 5], 2) is expected to be [[0, 1], [2, 3], [4, 5]]
	([0, 1, 2, 3, 4, 5], 4) is expected to be [[0, 1, 2, 3], [4, 5]]
*/
function chunkFun(arr,size)
{
	let chunk = []; 

	for(let elm of arr)
	{
		let last = chunk[chunk.length - 1]; 
		if(last && last.length < size)
		{
			last.push(elm)
		}else{
			chunk.push([elm])
		}
	}
	return (chunk)
}
chunkFun(['a', 'b', 'c', 'd'], 2);


// practice again it 
function chunkFunction(array,size)
{
	let chunkArr = []; 

	for(let elm of array)
	{
		const last = chunkArr[chunkArr.length - 1]; 

		if(last && last.length < size)
		{
			last.push(elm)
		}else{
			chunkArr.push([elm])
		}
	}
	return (chunkArr)
}
chunkFunction([0, 1, 2, 3, 4, 5], 4);

// another way to solve this problem 

function chunkFun2(arr,size)
{
	let chunks = [];
	let index = 0;

	while(index < arr.length)
	{
		const slicedArr = arr.slice(index,index + size)
		chunks.push(slicedArr); 

		index += size;
	}
	return (chunks)
}
chunkFun2([0, 1, 2, 3, 'k', 5], 2);

/*
----------------------..FizzBuzz
========= Problem 1 start Here ============
----------------------
The FizzBuzz problem is a classic test given in coding interviews. 
The task is simple: Print integers one-to-N, but print “Fizz” if an integer is divisible by three, “Buzz” if an integer is divisible by five, and “FizzBuzz” if an integer is divisible by both three and five.
*/ 

function fizzBuzzFun(num)
{
	let result = ''
	for(let i = 1; i <= num; i++)
	{
		if(i % 3 === 0 && i % 5 === 0)
		{
			result += 'FizzBuzz \n';
		}else if(i % 3 === 0)
		{
			result += 'Fizz \n';
		}else if(i % 5 === 0)
		{
			result += 'Buzz \n';
		}
		// else{
		// 	result += i + '\n'
		// }
	}
	return result
}

const result = fizzBuzzFun(20); 
// console.log(result)

// another way solve this problme 
function fizzBuzz(num)
{
	let output = '';
	for(let i = 1; i <= num; i++)
	{
		switch(true)
		{
			case  (i % 3 === 0 && i % 5 === 0): 
				output += 'FizzBuzz \n';
			break;
			case (i % 3 === 0):
				output += 'Fizz \n';
			break;
			case (i % 5 === 0):
				output += 'Buzz \n'; 
			break;
			case (num > 0) :
				output += i + ' \n'; 
			break;
		}
	}
	return output
}
const result2 = fizzBuzz(15);
// console.log(result2)

/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

	Input: s = "A man, a plan, a canal: Panama" // Output: true
	palindrome("race a car") // output : false
	
	Explanation: "amanaplanacanalpanama" is a palindrome.
*/

/*steps: 
	1. At first i need to romove all non-alphanumaric charactor
	2. i will replace it to empty string
	3. i will do all the charactor small latter
	4. After that i will slice the string then i will split after join
	5. i will compare it is it palindrome or not 
*/


function palindrome(str)
{
	let re = /[\W]/gi

	let replace = str.replace(re, '').toLowerCase();
	let palindromes = replace.slice().split('').reverse().join('');
	
	return replace === palindromes;
}

const result3 = palindrome("race car"); 
// console.log(result3);


// another way to solve this problem 
function palindrome11(str) 
{
 let output = true
 let re = /[^A-Za-z0-9]/g;
 str = str.toLowerCase().replace(re, '');
 let len = str.length;

 for (let i = 0; i < len/2; i++) 
 {
  	if(str[i] !== str[len - 1 - i])
  	{
  		output = false
  		break;
  	}
 }
 return output;
}
const result4 = palindrome11("race  car");
// console.log(result4)



/*
	-------------- Problem - 4 ----------------
	Reverse a string

	// steps: 
	1. will split the string 
	2. using reverse method
	3. using join method.
	4. using toLowerCase method
	then return the value
*/
function reverseStr(str)
{
	return str.split('').reverse().join('').toLowerCase();
}
const result5 = reverseStr('1 T 2 3 4'); 
// console.log(result5); 

// another way to reverse string 
function reverseStr1(str)
{
	let output = '';
	for(let i = str.length - 1; i >= 0; i--)
	{
		output += str[i]
	}
	return output.toLowerCase()
}
const result6 = reverseStr1('Hello'); 
// console.log(result6)

// another way to solve this problem 
function reverseStr2(str)
{
	let output = ''; 
	for(let elm of str)
	{
		output = elm + output.toLowerCase();
	}
	return output
}
const result7 = reverseStr2('Time'); 
// console.log(result7)



/*
Reverse integer 
function reverseInt(num) 
{
	let reverses = String(num).split('').reverse().join('')

	let arr = reverses.split(''); 

	if(arr[0] === '-' && arr[arr.length - 1] === '0')
	{
		arr[0] = '-';
		arr[arr.length - 1] = '';

	}else if(arr[0] === '-' && arr[arr.length - 1] !== 0)
	{
		let test = reverses.split('');
		test[test.length - 1] = '';
		test.unshift('-')
		return (Number(test.join('')))
	}
	return Number(arr.join(''));
}
const result8 = reverseInt(-15); 
console.log(result8)
*/ // It's not working 
  

function reverseInt(num) 
{
	let reverseStr = num.toString().split('').reverse().join('');

	if(reverseStr.endsWith('-'))
	{
		reverseStr = '-' + reverseStr.slice(0,reverseStr.length - 1)
	}
	return Number(reverseStr)
}
const result8 = reverseInt(-15);
// console.log(result8);


// -------------- Problme 6 Summing up the value ----------------
function sum(arr)
{
	let output = 0;

	for(let elm of arr)
	{
		output += elm
	}
	return output
}

const result9 = sum([1,2,3,4,5])
// console.log(result9);


// another way to sum up
function sumUp(num)
{
	return  num * (num + 1) / 2;
	// console.log(num * (num + 1) / 2)
}
const result10 = sumUp(5); 
// console.log(result10); 



// -------------- Problme 7 finding maximum number form an array  ----------------
function max(arr)
{
	let maximum = [0]; 
	// 
	for(let elm of arr)
	{
		if(elm > maximum)
		{
			maximum = elm
		}
	}
	return maximum
}

const result11 = max([1,2,3,44,5,6])
// console.log(result11) 


// another way to find maximum number form and array 
function getMaximim(arr)
{
	return Math.max(...arr)
}
const result12 = getMaximim([22,89,64,90])
// console.log(result12)

// other way to get maximum number form an array 
function gettingMax(arr)
{	
	let test = arr.reduce((acc,curr) => 
	{
		return acc > curr ? acc : curr;
	})

	return test
}
const result13 = gettingMax([1,2,99,3,4,5]); 
// console.log(result13) 

// -------------- Problme 8 finding minimum number form an array  ----------------
function gettingMin(arr)
{	
	let test = arr.reduce((acc,curr) => 
	{
		return acc < curr ? acc : curr;
	})

	return test
}
const result14 = gettingMin([9,2,99,3,4,5]); 
// console.log(result14) 

// or
function min(arr)
{	
	return Math.min(...arr)
}
const result15 = min([3,4,56,7]); 
// console.log(result15)

// --------------- problem-9 vowel count form an string--------------

function vowel(str)
{
	const vowels = ['a','e','i','o','u'];
	let val = str.toLowerCase(); 
	let output = [];
	for(let i = 0; i <= val.length; i++)
	{
		if(val[i] === vowels[0] 
			|| val[i] === vowels[1] 
			|| val[i] === vowels[2] 
			|| val[i] === vowels[3] 
			|| val[i] === vowels[4])
			{
				output.push(val[i]) 
			}
	}
	
	return (output.length)
}

const result16 = vowel('Hello')
// console.log(result16)


// --------------- problem-10 maximum charactor count --------------

function maxChar(str)
{
	let char = str.toLowerCase();

	let hasMap = {};
	let max = 0;
	let output = '';
	for(let elm of char)
	{
		
		if(elm in hasMap)
		{
			hasMap[elm]++;
		}else{
			hasMap[elm] = 1;
		}
	}

	for(let elm in  hasMap)
	{
		if(hasMap[elm] > max)
		{
			max = hasMap[elm]
			output = elm
		}
	}

	let result = `Charactor is : ${output} and it's written : ${max} times`;
	return result;
}
const result20 = maxChar('Helloolloooooo'); 
console.log(result20)

