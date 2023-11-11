function partyTime(arr) {

    let vip = [];
    let regular = [];

    while (arr.length > 0) {
        let guest = arr.shift();
        if (guest !== 'PARTY') {
            if (/^\d/.test(guest)) {
                vip.push(guest);
            }
            else {
                regular.push(guest);
            }
        }
        else {
            break;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let guest = arr[i];
        if (/^\d/.test(guest)) {
            if (vip.includes(guest)) {
                vip.splice(vip.indexOf(guest), 1);
            }
        }
        else {
            if (regular.includes(guest)) {
                regular.splice(regular.indexOf(guest), 1);
            }
        }
    }


    console.log(vip.length + regular.length);
    console.log(vip.join('\n'));
    console.log(regular.join('\n'));
}

partyTime(['7IK9Yo0h',

    '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc'])