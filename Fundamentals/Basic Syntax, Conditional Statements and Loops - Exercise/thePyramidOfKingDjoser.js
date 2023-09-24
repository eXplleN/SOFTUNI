function thePyramidOfKingDjoser(base, increment) {

    let size = 0;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let step = 0;

    for (let width = base; width >= 0; width -= 2) {
        size = width * width;
        step++;
        height++;
        if (width == 1 || width == 2) {
            gold += width * width * increment;
            width -= width;
        }
        else if (step == 5) {
            stone += ((width - 2) * (width - 2)) * increment;
            lapis += (size - ((width - 2) * (width - 2))) * increment;
            step = 0;
        }
        else {
            stone += ((width - 2) * (width - 2)) * increment;
            marble += (size - ((width - 2) * (width - 2))) * increment;
        }
    }

    height *= increment;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

thePyramidOfKingDjoser(12, 3)