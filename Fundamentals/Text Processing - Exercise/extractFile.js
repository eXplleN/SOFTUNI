function extractFile(str) {

    let toArr = str.split('\\');
    let searched = toArr[toArr.length - 1];
    let found = searched.split('.');
    let fileExtension = found[found.length - 1];
    let fileName = '';

    if (found.length > 2) {
        found.pop();
        fileName = found.join('.');
    }
    else {
        fileName = found[0];
    }

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')