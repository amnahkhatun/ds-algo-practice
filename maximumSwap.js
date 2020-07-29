// let num = 98368;
let num = 1993;

maximumSwap = num => {
  let str = Array.from(String(num), Number);
  console.log(str);

  loop1: for (let i = 0; i < str.length - 1; i++) {
    let max = str[i];
    var index;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] >= max) {
        max = str[j];
        index = j;
      }
    }
    if (max > str[i]) {
      temp = str[i];
      str[i] = str[index];
      str[index] = temp;
      break loop1;
    }
  }
  console.log("str", str.join(""));
};

maximumSwap(num);
