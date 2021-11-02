//const sentence = "hello there from lighthouse labs";
const sentence = "i miss my beloved mom always~~";
let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    //console.log(char);
    process.stdout.write(char); // print the char here
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later.
   delay += 500;
};

setTimeout(() => {
  process.stdout.write("\n");
}, delay);

// USING ARRAY
// let sentArr = sentence.split("");

//  sentArr.forEach((char, index) => {
  //    setTimeout(() => {
    //      process.stdout.write(char)
    //    }, 50 * (index + 1));
    //  })