function radiansToDegrees(input) {
         let radian = Number(input[0]);
         let gradus = radian * (180 / Math.PI);
         console.log(gradus);

}

radiansToDegrees(["3.1416"]);