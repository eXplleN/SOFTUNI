function echoType(param) {

    let type = typeof param;

    console.log(type);

    if (type == 'number' || type == 'string') {
        console.log(param);
    } else {
        console.log(`Parameter is not suitable for printing`);
    }
}

echoType('Hello, JavaScript!')
echoType(18)
echoType(null)