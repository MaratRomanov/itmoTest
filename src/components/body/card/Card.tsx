import React from 'react';
import {
    Wrapper,
    Picture,
    DateLine,
    Description,
} from './Card.styled';
import {CardTypes} from '../../../types/card';
import {useDispatch} from "react-redux";
import {AppActionTypes} from "../../../types/news";

const Card = (props: CardTypes) => {
    const {
        itemDate,
        itemTitle,
        itemImageBig,
        itemLanguage,
        itemLoading,
        itemUrl,
    } = props;

    const dispatch = useDispatch();

    let date;

    if (itemDate) {
        date = new Date(itemDate).toLocaleString(itemLanguage, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        })
    }

    const handleClick = () => {
        const payload = {
            isOpen: true,
            url: itemUrl,
        };

        dispatch({type: AppActionTypes.OPEN_CARD_NEWS, payload: payload})
    }

    return (
        <Wrapper onClick={handleClick} itemLoading={itemLoading}>
            {itemImageBig
                ? <Picture src={itemImageBig}/>
                : ''
            }
            <DateLine>
                {itemLanguage === 'ru' ? date?.slice(0, -3) : date}
            </DateLine>
            <Description>
                {itemTitle ?? itemTitle}
            </Description>
        </Wrapper>
    );
}

export default Card;
