import React, {useEffect} from 'react';
import Header from './header/Header';
import Body from './body/Body';
import {Wrapper} from './App.styled';
import {useDispatch} from "react-redux";
import {fetchNews} from "../store/actionCreators/news";
import {useTypedSelector} from "../hooks/useTypedSelector";

const App: React.FC = () => {
    const dispatch = useDispatch();
    const {language} = useTypedSelector((state) => state.news);

    useEffect(() => {
        dispatch(fetchNews(language))
    }, [language])

    return (
        <Wrapper>
            <Header/>
            <Body />
        </Wrapper>
    );
}

export default App;
