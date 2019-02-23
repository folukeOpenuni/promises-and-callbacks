function myCallbackFunction() {
  console.log("Timeout done!");
}

console.log("line 5");
setTimeout(myCallbackFunction, 1000);
console.log("line 7");

/* in which order will the lines be logged out? */
//line 5, followed by line 7 and setTimeout
