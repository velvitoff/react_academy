import axios from "axios";

export const translateRequest = (sourceText, targetLanguage) => {
    console.log(`Translating ${sourceText} to ${targetLanguage}`);
    return axios.get('https://translate.googleapis.com/translate_a/single', {
        params: {
            client: 'gtx',
            sl: 'en', //source lang
            tl: targetLanguage,
            dt: 't',
            q: sourceText
        }
    });
}