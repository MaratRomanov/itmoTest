import { AppState, AppActionTypes, AppAction } from '../types/news';

const defaultState: AppState = {
    news: [],
    language: 1,
    loading: false,
    error: null,
};

export const reducer = (state = defaultState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionTypes.GET_NEWS:
            return {...state, loading: true, error: null}
        case AppActionTypes.GET_NEWS_SUCCESS:
            return {...state, loading: false, error: null, news: [...state.news, action.payload]}
        case AppActionTypes.GET_NEWS_ERROR:
            return {...state, loading: false, error: action.payload, news: []}
        default:
            return state
    }
}

export const getNewsAction = (payload) => ({type: GET_NEWS, payload})
