function checkDistanceValidity(x1, y1, x2, y2) {
    function calculateDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    function isInteger(value) {
        return Number.isInteger(value);
    }

    function checkAndPrintValidity(point1, point2) {
        const distance = calculateDistance(point1[0], point1[1], point2[0], point2[1]);
        const isValid = isInteger(distance);

        console.log(`{${point1.join(', ')}} to {${point2.join(', ')}} is ${isValid ? 'valid' : 'invalid'}`);
    }

    checkAndPrintValidity([x1, y1], [0, 0]);
    checkAndPrintValidity([x2, y2], [0, 0]);
    checkAndPrintValidity([x1, y1], [x2, y2]);
}

checkDistanceValidity(3, 0, 0, 4)