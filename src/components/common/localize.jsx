import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { selectLanguage } from '../../store/slices/userSettingsSlice';
import { translateRequest } from '../../utils/translation/translate';

export default function Localize({ input }) {
    const [output, setOutput] = useState(input);
    const language = useSelector(selectLanguage);

    const translate = async (input, language) => {
        translateRequest(input, language)
        .then((res) => {
            setOutput(res.data[0][0][0]);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        translate(input, language);
    }, [language, input])

    return(
        <>{output}</>
    );
}