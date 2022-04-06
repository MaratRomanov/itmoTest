import React from 'react';
import {
    Wrapper,
    Content,
    Logo,
} from './Header.styled';
import LanguageSelect from './languageSelect/LanguageSelect';
import logo from '../../files/icons/logo.svg';

const Header: React.FC = () => {
    return (
        <Wrapper>
            <Content>
                <Logo src={logo}/>
                <LanguageSelect />
            </Content>
        </Wrapper>
    );
}

export default Header;
