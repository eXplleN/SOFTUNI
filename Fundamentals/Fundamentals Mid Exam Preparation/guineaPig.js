function guineaPig(arr) {

    let food = Number(arr[0]) * 1000;
    let hay = Number(arr[1]) * 1000;
    let cover = Number(arr[2]) * 1000;
    let pigWeight = Number(arr[3]) * 1000 / 3;

    for (let i = 1; i <= 30; i++) {
        food -= 300;
        if (i % 2 == 0) {
            if (i % 2 == 0 && i % 3 == 0) {
                hay -= food * 0.05;
                cover -= pigWeight;
            }
            else {
                hay -= food * 0.05;
            }
        }
        else if (i % 3 == 0) {
            cover -= pigWeight;
        }

        if (food <= 0 || hay <= 0 || cover <= 0) {
            console.log(`Merry must go to the pet store!`);
            break;
        }

    }
    if (food > 0 && hay > 0 && cover > 0) {
        console.log(`Everything is fine! Puppy is happy! Food: ${(food / 1000).toFixed(2)}, Hay: ${(hay / 1000).toFixed(2)}, Cover: ${(cover / 1000).toFixed(2)}.`);
    }
}

//guineaPig(["10", "5", "5.2", "1"])
//guineaPig(["1", "1.5", "3", "1.5"])
guineaPig(['1', '1.5', '3', '1.5'])

