import {AppAction, AppActionTypes} from "../../types/news";
import {Dispatch} from "react";

export const fetchNews = (language: number) => {
    return async (dispatch: Dispatch<AppAction>) => {
        try {
            dispatch({type: AppActionTypes.GET_NEWS})
            await (fetch(`https://news.itmo.ru/api/news/list/?ver=2.0&per_page=9&language_id=${language}`)
                .then(res => res.json())
                .then(json => dispatch({type: AppActionTypes.GET_NEWS_SUCCESS, payload: json})))
        } catch (error) {
            dispatch({type: AppActionTypes.GET_NEWS_ERROR, payload: 'Ошибка при загрузке новостей'})
        }
    }
}
