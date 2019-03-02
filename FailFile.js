const fs = require("fs-extra");

const warnUser = err => {
  if (err.code === "ENOENT") {
    console.log("file not found please check the file name");
  } else {
    console.log("unknown error!", err);
  }
  console.log("There is an error", err.code);
  process.exit(1);
};

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
// throw new Error("myError");
const x = fs.readJson("./FileThatDoesNotExit");

//x.then(result);
x.then(progressReport).catch(warnUser);

console.log(x);
