const paddingLeft = (word, finalSize, elementForFilling) => {
    if (finalSize <= word.split('').length) {
        return word;
    }
    else {
        let fillingSize = finalSize - word.split('').length;
        let filling = '';
        for (let i = 0; i < fillingSize; i++) {
            filling += elementForFilling;
        }
        let newWord = filling + word;
        return newWord;
    }
}

const objectToExport = {
    paddingLeft: paddingLeft
}
export default objectToExport;