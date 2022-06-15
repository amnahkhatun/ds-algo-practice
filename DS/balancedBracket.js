/* [{}{()()()}[]{}]. :- you need to add a code for the same if all brackets are closed properly 
then it should print “success” otherwise print “its not a success” eg of not a success :- [}[ */
/* ]][[ */

// const s = '[{}{()()()}[]{}]'
const s = ']][['

function balancedBracket (s){
  let obj = {
    ']' : '[',
    '}' : '{',
    ')' : '('
  }
  let str = [...s];
  let arr = [str[0]];
  for(let i = 1;i<str.length;i++){
    if(arr[arr.length - 1] === obj[str[i]]){

      arr.pop()
    }else {
      // console.log('else', str[i])
      arr.push(str[i])
    }
  }
  
  console.log(arr)
  return arr.length === 0
}

console.log(balancedBracket(s))


function pathExist(str) {
  let obj = {
    a: {
      b: {
        c: 20
      }
    },
    d: null
  }
  let s = str.split('.')
  let temp = obj[s[0]]

  for (let i = 1; i < s.length; i++) {
    temp = temp[s[i]]
  }
  console.log(temp)


}
/* pathExist("a.b.c")//20 */
pathExist("a.b.c.d")//undefined
pathExist("a.c.d")//undefined
pathExist("b.d")//undefined







/* [{}{()()()}[]{}]. :- you need to add a code for the same if all brackets are closed properly then it should print “success” otherwise print “its not a success” eg of not a success :- [}[ */
/* ]][[ */

/* let s = '[{}{()()()}[]{}]'

function brackets(s){
let str = s.split('')
  for(let i =0 ;i< str.length;i++){
    console.log(str[i])
  }
}

console.log(brackets(s)) */
/* draw a circle and add a string in center of that */





























