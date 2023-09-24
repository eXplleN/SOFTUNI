function gladiatorExpenses(lf, helm, sword, shield, armor) {

    let sum = 0;
    let helmCount = 0;
    let swordCount = 0;
    let shieldCount = 0;
    let armorCount = 0;

    for (let i = lf; i >= 1; i--) {
        helmCount++;
        swordCount++;
        shieldCount++;
        armorCount++;
        if (armorCount == 12) {
            sum += armor;
            sum += shield;
            sum += helm;
            sum += sword;
            armorCount = 0;
            shieldCount = 0;
            helmCount = 0;
            swordCount = 0;
        }
        else if (shieldCount == 6) {
            sum += shield;
            sum += sword;
            sum += helm;
            shieldCount = 0;
            swordCount = 0;
            helmCount = 0;
        }
        else if (swordCount == 3) {
            sum += sword;
            swordCount = 0;
        }

        else if (helmCount == 2) {
            sum += helm;
            helmCount = 0;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);

}

gladiatorExpenses(7, 2, 3, 4, 5)
gladiatorExpenses(23, 12.50, 21.50, 40, 200)