function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
      check(String(arr[i]));
    }
  
  function check(str) {
    
    let strIndexBackwards = str.length - 1;
    
    for (let i = 0; i < str.length - 1 / 2; i++) {
      if (str[i] != str[strIndexBackwards]) {
        console.log(`false`);
        return;
      }
      strIndexBackwards--;
    }
    console.log(`true`);
  }
}

palindromeIntegers([123, 323, 421, 121])
palindromeIntegers([32, 2, 232, 1010])