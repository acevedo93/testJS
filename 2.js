/*Java Script

1 - Run-Length Encoding
Write a function that takes in a non-empty string and returns its run-length encoding.
For this problem, a run of data is any sequence of consecutive, identical characters. So the run "AAA" would be run-length-encoded as "3A".
To make things more complicated, however, the input string can contain all sorts of special characters, including numbers. And since encoded data must be decodable, 
this means that we can't naively run-length-encode long runs. For example, the run "AAAAAAAAAAAA" (12 A), cant naively be encoded as "12A", 
since this string can be decoded as either "AAAAAAAAAAAA" or "1AA". Thus, long runs (runs of 10 or more characters) 
should be encoded in a split fashion; 
the aforementioned run should be encoded as "9A3A"

  */

const letter = "AAAAAAAAAABBBCCCCCCCCCCCC";

const encode = (str) => {
  let count = 1;
  let count2 = 1;
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (count2 > 9 && str[i] === str[i + 1]) {
      count2++;
    } else if (count < 9 && str[i] === str[i + 1]) {
      count++;
    } else {
      newStr += count + str[i];
      if (count > 9) {
        newStr += count2 + str[i];
      }
      count = 1;
      count2 = 1;
    }
  }
  return newStr;
};

console.log(encode(letter));
