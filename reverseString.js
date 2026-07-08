const reverseString = (str) => {
    let left = 0;
    let right = str.length - 1;
    let arr = str.split("");
    while(left < right) {
        [arr[left],arr[right]]=[arr[right],arr[left]];
        left++;
        right--;
    }
    return arr.join("");
}
console.log(reverseString("Avinish"));
//This approach uses the two-pointer technique, where one pointer starts from the beginning of the string and the other starts from the end. Since strings in JavaScript are immutable, the string is first converted into an array using split(""). Inside the while loop, the characters at the left and right pointers are swapped using array destructuring. After each swap, the left pointer moves one step forward and the right pointer moves one step backward. The process continues until both pointers meet or cross each other, ensuring that every character is swapped only once. Finally, the array is converted back into a string using join(""). This is one of the most efficient and commonly asked approaches in coding interviews because it demonstrates a good understanding of the two-pointer technique.


const reverseString1 = (str) => {
  return str.split("").reverse().join("");
}
console.log(reverseString1("Avinish"));

// This approach takes advantage of JavaScript's built-in array methods to reverse the string in just one line of code. The string is first converted into an array using split(""), then the reverse() method reverses the order of all the elements in the array, and finally join("") combines the characters back into a single string. Although this is the shortest and most readable solution, it relies on JavaScript's built-in functions rather than implementing the reversal logic manually. It is commonly used in real-world development when simplicity and readability are preferred, but interviewers may sometimes ask you to avoid using reverse() to test your algorithmic skills.


const reverseString2 = (str) => {
    if (str === "") return "";
    return reverseString2(str.slice(1)) + str[0];
}
console.log(reverseString2("Avinish"));

// This approach uses recursion, where the function repeatedly calls itself until it reaches a base case. In every recursive call, slice(1) removes the first character of the string and passes the remaining substring to the next function call. This process continues until the string becomes empty (""), which acts as the base case and stops the recursion. Once the base case is reached, the function starts returning back through the call stack, and during each return, the first character (str[0]) of that particular function call is appended to the end of the returned string. As the recursive calls unwind, the characters are added in reverse order, resulting in the reversed string. This approach is excellent for understanding recursion and the call stack, although it is generally less efficient than the two-pointer approach because it creates a new substring during every recursive call.

//Notes
// arr.join() => h,s,i,n,i,v,A (because the default separator for join() is a comma.)
// arr.join("") => hsinivA (To remove the commas)
// Use an empty string as the separator
 
