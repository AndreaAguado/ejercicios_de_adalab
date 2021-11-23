const paddingLeft = (word, finalSize, elementForFilling) => {
    if (finalSize <= word.split('').length || Boolean(elementForFilling) === false || elementForFilling.split('').length + word.split('').length > finalSize) {
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
            let newWord = '';
            for (let i = 0; i < finalSize; i++) {
                newWord += elementForFilling;
                if (newWord.split('').length === finalSize) {
                    return newWord;
                }
                return newWord;
            }
            // if (newWord.split('').length < finalSize) {
            //     newWord += elementForFilling;
            // }
            // else if (newWord.split('').length === finalSize) {
            //     return newWord;
            // }
            // else if (newWord.split('').length > finalSize) {
            //     return newWord;
            // }
        }
    }
}

const objectToExport = {
    paddingLeft: paddingLeft
}
export default objectToExport;