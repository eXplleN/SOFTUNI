function dayOfWeek(index) {

    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    let result = days[index - 1];

    if (index >= 1 && index <= 7) {
        console.log(result);
    }
    else {
        console.log(`Invalid day!`);
    }
}

dayOfWeek(3)
dayOfWeek(6)
dayOfWeek(11)