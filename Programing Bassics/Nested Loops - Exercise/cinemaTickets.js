function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index++;

    let studentTicketCount = 0;
    let standardTicketCount = 0;
    let kidTicketCount = 0;
    let totalTickedCount = 0;


    while (command !== "Finish") {
        let movieName = command;
        let freeSpace = Number(input[index]);
        index++;

        let tickedType = input[index];
        index++;

        let sellTicketsCounter = 0;

        while (tickedType !== "End") {
            sellTicketsCounter++;
            switch (tickedType) {
                case "student": studentTicketCount++; break;
                case "standard": standardTicketCount++; break;
                case "kid": kidTicketCount++; break;
            }
            if (sellTicketsCounter == freeSpace) {
                break;
            }
            tickedType = input[index];
            index++;
        }
        totalTickedCount += sellTicketsCounter;
        let percent = sellTicketsCounter / freeSpace * 100;
        console.log(`${movieName} - ${percent.toFixed(2)}% full.`);

        command = input[index];
        index++;

    }
    let percentStudent = studentTicketCount / totalTickedCount * 100;
    let percentStandard = standardTicketCount / totalTickedCount * 100;
    let percentKid = kidTicketCount / totalTickedCount * 100;

    console.log(`Total tickets: ${totalTickedCount}`);
    console.log(`${percentStudent.toFixed(2)}% student tickets.`);
    console.log(`${percentStandard.toFixed(2)}% standard tickets.`);
    console.log(`${percentKid.toFixed(2)}% kids tickets.`);

}
cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"]);