function fishTank(input) {

      let long = Number(input[0]);
      let width = Number(input[1]);
      let high = Number(input[2]);
      let percent = Number(input[3]);
      
      let volume = long * width * high;
      let volumeInLitters = volume / 1000;
      let spaceTakken = percent / 100;
      let neededLitters = volumeInLitters * (1 - spaceTakken);

      console.log(neededLitters);

}

fishTank(["85","75","47","17"]);