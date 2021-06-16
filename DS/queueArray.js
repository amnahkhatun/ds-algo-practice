let arr = [];
let max = -1;

function rearrangeMax() {
  let temp = arr[0];
  if (arr.length === 0) {
    return (max = -1);
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > temp) {
      temp = arr[i];
    }
  }
  max = temp;
}

function enqueue(i) {
  if (max < i) {
    max = i;
  }
  arr.push(i);
}

function dequeue() {
  let firstElement = arr.shift();
  if (firstElement === max) {
    rearrangeMax();
  }
}

enqueue(15);
enqueue(13);
enqueue(14);
enqueue(12);
dequeue();
dequeue();

console.log(arr);
console.log(max);
