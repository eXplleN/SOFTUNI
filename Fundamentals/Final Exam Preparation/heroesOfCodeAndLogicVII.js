function heroesOfCodeAndLogicVII(arr) {

    let numberOfHeroes = Number(arr.shift());
    let heroesList = [];

    class Hero {
        constructor(name, hp, mp) {
            this.name = name;
            this.hp = hp;
            this.mp = mp;
        }
    }

    for (let i = 0; i < numberOfHeroes; i++) {
        let currentHero = arr[i].split(' ');
        let name = currentHero[0];
        let hp = Number(currentHero[1]);
        let mp = Number(currentHero[2]);
        heroesList.push(new Hero(name, hp, mp));
    }

    let currentStep = arr.shift();

    while (currentStep != 'End') {

        let step = currentStep.split(' - ');
        let command = step[0];
        let heroName = step[1];
        let points = Number(step[2]);
        let attackerOrSpell = step[3];

        let hero = heroesList.find(hero => hero.name == heroName);

        if (hero) {

            if (command == 'CastSpell') {
                if (hero.mp >= points) {
                    console.log(`${heroName} has successfully cast ${attackerOrSpell} and now has ${hero.mp - points} MP!`);
                    hero.mp -= points;
                }
                else {
                    console.log(`${heroName} does not have enough MP to cast ${attackerOrSpell}!`);
                }
            }
            else if (command == 'TakeDamage') {
                if ((hero.hp - points) > 0) {
                    console.log(`${heroName} was hit for ${points} HP by ${attackerOrSpell} and now has ${hero.hp - points} HP left!`);
                    hero.hp -= points;
                }
                else {
                    console.log(`${heroName} has been killed by ${attackerOrSpell}!`);
                    let index = heroesList.findIndex(item => item.name === heroName);

                    if (index !== -1) {
                        heroesList.splice(index, 1);
                    }
                }
            }
            else if (command == 'Recharge') {
                if ((hero.mp + points) >= 200) {
                    console.log(`${heroName} recharged for ${200 - hero.mp} MP!`);
                    hero.mp = 200;
                }
                else {
                    console.log(`${heroName} recharged for ${points} MP!`);
                    hero.mp += points;
                }
            }
            else {
                if ((hero.hp + points) >= 100) {
                    console.log(`${heroName} healed for ${100 - hero.hp} HP!`);
                    hero.hp = 100;
                }
                else {
                    console.log(`${heroName} healed for ${points} HP!`);
                    hero.hp += points;
                }
            }

        }
        currentStep = arr.shift();
    }

    for (let hero of heroesList) {
        console.log(`${hero.name}`);
        console.log(`  HP: ${hero.hp}`);
        console.log(`  MP: ${hero.mp}`);
    }
}

heroesOfCodeAndLogicVII([`4`,
    `Adela 90 150`,
    `SirMullich 70 40`,
    `Ivor 1 111`,
    `Tyris 94 61`,
    `Heal - SirMullich - 50`,
    `Recharge - Adela - 100`,
    `CastSpell - Tyris - 1000 - Fireball`,
    `TakeDamage - Tyris - 99 - Fireball`,
    `TakeDamage - Ivor - 3 - Mosquito`,
    `End`])