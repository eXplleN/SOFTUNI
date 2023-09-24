function foreignLanguages(country) {

    switch (country) {
        case 'Spain':
        case 'Argentina':
        case 'Mexico': console.log(`Spanish`);
            break;
        case 'England':
        case 'USA': console.log(`English`);
            break;
        default: console.log(`unknown`);
            break;
    }
}

foreignLanguages(`USA`)
foreignLanguages(`Germany`)