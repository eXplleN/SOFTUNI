function maxSequenceOfEqualElements(arr) {

  let newArr = [];
  let newArr1 = [];
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] == arr[i + 1]) {
      newArr.push(arr[i]);
      count1++;
    }
    else {
      newArr.push(arr[i]);
      count1++;
      if (count1 > count2) {
        count2 = count1;
        newArr1 = newArr;
        count1 = 0;
        newArr = [];
      }
      else {
        count1 = 0;
        newArr = [];
      }
    }
  }
  console.log(newArr1.join(' '));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
maxSequenceOfEqualElements([4, 4, 4, 4])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])