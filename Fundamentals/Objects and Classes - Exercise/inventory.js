function inventory(arr) {

    let heroes = [];

    class persson {
        constructor(Hero, level, items) {
            this.Hero = Hero;
            this.level = level;
            this.items = items;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let currentHero = arr[i].split(' / ');
        let heroName = currentHero.shift();
        let heroLevel = Number(currentHero.shift());
        let heroItems = currentHero.join(' ');
        heroes.push(new persson(heroName, heroLevel, heroItems));
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let obj of heroes) {
        console.log(`Hero: ${obj.Hero}`);
        console.log(`level => ${obj.level}`);
        console.log(`items => ${obj.items}`);
    }
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])