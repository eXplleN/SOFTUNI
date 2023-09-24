function coins(input) {

    let num = Number(input[0]) * 100;

    let mon2Leva = 0;
    let mon1Leva = 0;
    let mon50Stotinki = 0;
    let mon20Stotinki = 0;
    let mon10Stotinki = 0;
    let mon5Stotinki = 0;
    let mon2Stotinki = 0;
    let mon1Stotinki = 0;

    let overalCoins = 0;

    while (num > 0) {
        if (num >= 200) {
            mon2Leva++;
            num -= 200;
        }
        else if (num < 200 && num >= 100) {
            mon1Leva++;
            num -= 100;
        }
        else if (num < 100 && num >= 50) {
            mon50Stotinki++;
            num -= 50;
        }
        else if (num < 50 && num >= 20) {
            mon20Stotinki++;
            num -= 20;
        }
        else if (num < 20 && num >= 10) {
            mon10Stotinki++;
            num -= 10;
        }
        else if (num < 10 && num >= 5) {
            mon5Stotinki++;
            num -= 5;
        }
        else if (num < 5 && num >= 2) {
            mon2Stotinki++;
            num -= 2;
        }
        else if (num < 1) {
            break;
        }
        else {
            mon1Stotinki++;
            num -= 1;
            break;
        }
    }
    overalCoins = mon2Leva + mon1Leva + mon50Stotinki + mon20Stotinki + mon10Stotinki + mon5Stotinki + mon2Stotinki + mon1Stotinki;
    console.log(overalCoins);
}
coins(["2.22"]);