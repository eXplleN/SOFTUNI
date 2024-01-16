function previousDay(year, month, day) {

    let currentDate = new Date(year, month - 1, day);

    let previousDay = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);

    let prevYear = previousDay.getFullYear();
    let prevMonth = previousDay.getMonth() + 1;
    let prevDay = previousDay.getDate();

    console.log(`${prevYear}-${prevMonth}-${prevDay}`);

}

previousDay(2016, 9, 30)