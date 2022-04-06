export interface AppState {
    news: any[];
    language: number;
    loading: boolean;
    error: null | string;
    card: {
        isOpen: boolean,
        url: string | undefined
    };
}

export enum AppActionTypes {
    GET_NEWS = 'GET_NEWS',
    GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS',
    GET_NEWS_ERROR = 'GET_NEWS_ERROR',
    SWITCH_LANGUAGE = 'SWITCH_LANGUAGE',
    OPEN_CARD_NEWS = 'OPEN_CARD_NEWS',
}

interface GetNewsAction {
    type: AppActionTypes.GET_NEWS;
}

interface GetNewsSuccessAction {
    type: AppActionTypes.GET_NEWS_SUCCESS;
    payload: any[];
}

interface GetNewsErrorAction {
    type: AppActionTypes.GET_NEWS_ERROR;
    payload: string;
}

interface SwitchLanguage {
    type: AppActionTypes.SWITCH_LANGUAGE;
    payload: number;
}

interface OpenCardNews {
    type: AppActionTypes.OPEN_CARD_NEWS;
    payload: {
        isOpen: boolean,
        url: string | undefined
    };
}

export type AppAction = GetNewsAction | GetNewsSuccessAction | GetNewsErrorAction | SwitchLanguage | OpenCardNews;
