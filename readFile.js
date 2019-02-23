const fs = require("fs-extra");

const logResult = result => {
  console.log("This is a result: ", result);
  //another way to print string rather than an object
  // console.log("This is a result: " + result);
  // console.log("This is a result: " + JSON.stringify (result));
};

const progressReport = result => {
  console.log("File read successfully");
  //return result.version;
  //   return result.description;
  //   return result.repository;
  //return result.main;
  return result.repository.url;
};

const x = fs.readJson("./package.json");

//x.then(result);
x.then(progressReport).then(logResult);

console.log(x);
