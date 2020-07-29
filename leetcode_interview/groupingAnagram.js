let str = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupingAnagram = str => {
  let result = {};
  for (let word of str) {
    let filteredWord = word
      .split("")
      .sort()
      .join();
    if (result[filteredWord]) {
      result[filteredWord].push(word);
      // console.log(result[filteredWord], "inside if");
    } else {
      result[filteredWord] = [word];
      // console.log(result[filteredWord], "inside else");
    }
  }
  console.log(Object.values(result));
};
groupingAnagram(str);
