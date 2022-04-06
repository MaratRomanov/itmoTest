import {AppAction, AppActionTypes, AppState} from '../../types/news';

const defaultState: AppState = {
    news: [],
    language: 1,
    loading: false,
    error: null,
    card: {
        isOpen: false,
        url: undefined
    },
};

export const newsReducer = (state = defaultState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionTypes.GET_NEWS:
            return {...state, loading: true, error: null}
        case AppActionTypes.GET_NEWS_SUCCESS:
            return {...state, loading: false, error: null, news: [...state.news, action.payload]}
        case AppActionTypes.GET_NEWS_ERROR:
            return {...state, loading: false, error: action.payload, news: []}
        case AppActionTypes.SWITCH_LANGUAGE:
            return {...state, language: action.payload, news: []}
        case AppActionTypes.OPEN_CARD_NEWS:
            return {...state, card: action.payload}
        default:
            return state
    }
}
