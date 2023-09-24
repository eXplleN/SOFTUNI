function requiredReading(pages, pagesFor1Hour, days) {

    let totalHours = pages / pagesFor1Hour;
    let hoursPerDay = totalHours / days;

    console.log(hoursPerDay);
}

requiredReading(212, 20, 2)
requiredReading(432, 15, 4)