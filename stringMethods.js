var stringOne = "freeCodeCamp is the best place to learn";
var stringTwo = "frontend and backend development";

// charAt()

console.log(stringOne.charAt(1));

//charcodeAt()
console.log(stringOne.charCodeAt(1));  // 114

//concat()
console.log(stringOne.concat(stringTwo));

//endsWith()
console.log(stringOne.endsWith("learn"));  //false

//fromCharCode()
console.log(stringOne.fromCharCode(114));  // "r"

//includes()
console.log(stringTwo.includes("end"));  //true

//indexOf()
console.log(stringTwo.indexOf("end"));   // 5

//lastIndexOf()
console.log(stringTwo.lastIndexOf("end"));    // 17

//match()
console.log(stringTwo.match(/end/g)); //["end", "end"]

//repeat()
console.log(stringTwo.repeat(3));

//replace()
console.log(stringTwo.replace(/end/g, "END"));  //frontEND and backEND

//search()
console.log(stringTwo.search("end"));  // 5

//slice()
console.log(stringTwo.slice(2,4));  //"on"

//split()
console.log(stringOne.split(" ")); //split where it finds the " "

//startswith()
console.log(stringOne.startsWith("free"));  //true

//substr()
console.log(stringTwo.substr(2, 4));  // "onte"

//substring()
console.log(stringTwo.substring(2, 4));  //  "on"

//toLowerCase()
console.log(stringOne.toLowerCase());

//toUpperCase()
console.log(stringOne.toUpperCase());

// trim()
var stringThree = "     Subscribe now!      ";
console.log(stringThree.trim());   //Subscribe now!

