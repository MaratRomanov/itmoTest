import React from 'react';
import {
    Wrapper,
    Frame,
    ButtonClose,
} from './NewsPage.styled';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import close from '../../../files/icons/close-cross.svg';
import {AppActionTypes} from "../../../types/news";
import {useDispatch} from "react-redux";

const NewsPage = () => {
    const dispatch = useDispatch();
    const {card} = useTypedSelector((state) => state.news);

    const handleClose = () => {
        const payload = {
            isOpen: false,
            url: undefined,
        };

        dispatch({type: AppActionTypes.OPEN_CARD_NEWS, payload: payload})
    }

    return (
        <Wrapper>
            <ButtonClose src={close} onClick={handleClose}/>
            <Frame src={card.url}/>
        </Wrapper>
    );
}

export default NewsPage;
