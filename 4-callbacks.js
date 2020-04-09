// setTimeout(() => {
//   console.log("Two seconds are up");
// }, 2000);

// const names = ["Farouk", "Ayoub", "Yasmine"];
// const shortNames = names.filter(name => name.length <= 4);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Paris", data => {
//   console.log(data);
// });

// const add = (n1, n2, callback) => {
//   setTimeout(() => {
//     sum = n1 + n2;
//     callback(sum);
//   }, 2000);
// };

// add(1, 4, sum => {
//   console.log(sum); // Should print: 5
// });

const doWorkCallback = callback => {
  setTimeout(() => {
    // callback("This is my error", undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});
