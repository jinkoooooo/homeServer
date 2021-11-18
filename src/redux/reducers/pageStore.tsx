
export interface PageState {
    isLoading: boolean
}

export const PAGE_STATE_CHANGE = "PAGE_STATE_CHANGE";

interface PageStateAction {
    type: typeof PAGE_STATE_CHANGE,
    payload: PageState
}


export type PageStateActionTypes = PageStateAction;

export function setCurrentPageState(pageState:PageState) : PageStateActionTypes {
    return {
        type: PAGE_STATE_CHANGE,
        payload: pageState
    };
}

//
//  상태 초기값 설정
const initialState: PageState = {
    isLoading: false,
}

export function pageStateReducer(state= initialState, action : PageStateActionTypes) : PageState {

    switch (action.type) {
        case PAGE_STATE_CHANGE: return {
            isLoading: action.payload.isLoading,
        }
        default:
            return state;
    }
}