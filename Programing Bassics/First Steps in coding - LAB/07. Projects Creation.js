function projects(input) {
       let name = (input[0]);
       let hours = Number(input[1]);
       let area = hours * 3;
       console.log(`The architect ${name} will need ${area} hours to complete ${hours} project/s.`);

}

projects(["George","4"]);