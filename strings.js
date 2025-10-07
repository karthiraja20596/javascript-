let str=" hello java welcome to the JAVA world "
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

console.log(str.charAt(4));

console.log(str.indexOf("w"));
console.log(str.lastIndexOf("j"));

console.log(str.slice(-4));
console.log(str.slice(4));
console.log(str.substring(0,10));

console.log(str.replaceAll("java","js"));
console.log(str.replace("w","W"));

console.log(str.trim());

console.log(str.split(""));
console.log(str.split("").join(""));

console.log(str.concat("nice to meet you"));


console.log(str.startsWith("j"));
console.log(str.endsWith("j"));
console.log(str.includes("j"));