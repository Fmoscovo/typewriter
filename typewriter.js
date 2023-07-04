const sentence = "Hello Harry Potter, my name is Tom Riddle.";
const delayPerChar = 50;
const typewriter = (sentence, delay) => {
  let delayTime = 0;

  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delayTime);
    delayTime += delay;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, delayTime);
};

typewriter(sentence, delayPerChar);

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, 50);
// }

// delay each caracter by 50ms instead of 1000ms
// 'h' => 50ms
// 'e' => 100ms
// 'l' => 150ms
// 'l' => 200ms
// 'o' => 250ms
// ' ' => 300ms
//Your implementation should not be tied to the example string. We should be able to change the string from "hello there from lighthouse labs" to any other string and still have the animation logic work.

// process.stdout.write(char) instead of console.log(char)
// remove the new line at the end of the sentence
