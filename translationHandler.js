class TranslationHandler{
    constructor(){

    }

    translate(queryString){
        let result = 
        {
            wordsList: queryString,
            romanization: 'hou2 gaan6 daan6',
            translation: 'very easy'
        }
        return result;
    }
}

module.exports = TranslationHandler;