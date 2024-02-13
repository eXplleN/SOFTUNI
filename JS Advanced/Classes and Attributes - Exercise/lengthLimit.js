class Stringer {
    innerString;
    innerLength

    constructor(innerString, innerLength) {
       this.innerString = innerString;
       this.innerLength = innerLength;
    }

    increase(num) {
        this.innerLength = this.innerLength + num;
        return this.innerLength;
    }

    decrease(num) {
        if ((this.innerLength - num) < 0) {
            this.innerLength = 0;
            return this.innerLength;
        }
        else {
          this.innerLength = this.innerLength - num;
          return this.innerLength;
        }
    }

   toString() {
      if (this.innerString.length > this.innerLength) {
        let token = this.innerString.slice(0, this.innerLength);
        return token + "...";
      }
      else if (this.innerLength === 0){
        return "...";
      }
      else {
        return this.innerString;
      }
   }
}

let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test