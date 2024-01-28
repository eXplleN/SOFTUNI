function pieceOfPie(arr, fl1, fl2) {

    let start = arr.indexOf(fl1);
    let end = arr.indexOf(fl2) + 1;

    let result = arr.slice(start, end);

    return result;

}

pieceOfPie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie')