function meetings(arr) {

    let schedule = {};

    for (let dayAndPerson of arr) {
        let [day, person] = dayAndPerson.split(' ');

        if (day in schedule) {
            console.log(`Conflict on ${day}!`);
            continue;
        }
        else {
            schedule[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [day, person] of Object.entries(schedule)) {
        console.log(`${day} -> ${person}`);
    }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])