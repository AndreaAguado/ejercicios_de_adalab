const paddingLeft = (word, finalSize, elementForFilling) => {
    if (finalSize <= word.split('').length || Boolean(elementForFilling) === false) {
        return word;
    }
    else if (elementForFilling.split('').length + word.split('').length === finalSize) {
        return elementForFilling + word;
    }
    else {
        if (elementForFilling.split('').length === 1) {
            let fillingSize = finalSize - word.split('').length;
            let filling = '';
            for (let i = 0; i < fillingSize; i++) {
                filling += elementForFilling;
            }
            let newWord = filling + word;
            return newWord;
        }
        else {

        }
    }
}

const objectToExport = {
    paddingLeft: paddingLeft
}
export default objectToExport;