function birthDay(input) {

    let roomPrice = Number(input[0]);

    let cake = roomPrice * 0.20;
    let drinks = cake * 0.55;
    let animator = roomPrice / 3;

    let totalCost = roomPrice + cake + drinks + animator;

    console.log(totalCost);

}
birthDay(["2250"]);