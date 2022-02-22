const s = "pwwkew";
var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let [i, j, max] = [0, 0, 0];
    while (j < s.length) {
        if (set.has(s[j])) {
            set.delete(s[i++]);
            // i++;
            console.log(set,"if")
            console.log({i},{j},"if")
        } else {
                      console.log({i},{j},"else")

            set.add(s[j++]);
            // j++;
            max = Math.max(max, set.size); 
                      console.log(set,"else")

        }
    }
    return max;
};
 
// console.log(lengthOfLongestSubstring(s))
let s1 = "ab", s2 = "eidbaooo";
var checkInclusion = function(s1, s2) {
      let set = new Set();
      console.log(s2.contains(s1))
};
checkInclusion(s1,s2)