const array = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n'];
let runTime = 0;

const printAnimation = function(arr) {
  for (const element of arr) {
    setTimeout(() => {
      process.stdout.write(element);
    }, runTime);
    runTime += 200;
  }
};

printAnimation(array);

