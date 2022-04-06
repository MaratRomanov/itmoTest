import React, {useState} from 'react';
import {
    Wrapper,
    Logo,
    Text,
    DropdownButton,
    DropdownLanguageses,
    DropdownLanguagesesElement
} from './LanguageSelect.styled';
import {useDispatch} from "react-redux";
import rus from '../../../files/icons/flag-rus.svg';
import eng from '../../../files/icons/flag-eng.svg';
import dropdown from '../../../files/icons/dropdown.svg';
import {AppActionTypes} from "../../../types/news";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

const LanguageSelect = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const {language} = useTypedSelector((state) => state.news);
    const dispatch = useDispatch();

    const handleDropdown = () => setShowDropdown(prev => !prev);

    const switchLanguage = (number: number) => {
        if(number !== language) {
            dispatch({type: AppActionTypes.SWITCH_LANGUAGE, payload: number})
        }
    };

    const src = language === 1 ? rus : eng;

    return (
        <Wrapper onClick={handleDropdown}>
            <Logo src={src}/>
            <Text>
                {language === 1 ? 'Рус' : 'Eng'}
            </Text>
            <DropdownButton src={dropdown} isShown={showDropdown}/>
            {
                showDropdown
                    ? <DropdownLanguageses>
                        <DropdownLanguagesesElement onClick={() => switchLanguage(1)}>
                            <Logo src={rus}/>
                            <Text>
                                Рус
                            </Text>
                        </DropdownLanguagesesElement>
                        <DropdownLanguagesesElement onClick={() => switchLanguage(2)}>
                            <Logo src={eng}/>
                            <Text>
                                Eng
                            </Text>
                        </DropdownLanguagesesElement>
                    </DropdownLanguageses>
                    : ''
            }
        </Wrapper>
    );
}

export default LanguageSelect;
