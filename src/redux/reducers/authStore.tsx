import React from "react";
import {UserMenu} from "../../model/Menu";

export interface UserAuth {
    userid: string
    username: string,
    accessToken: string,
    isAuth: boolean,
    menus: UserMenu[]
}

export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

interface UserLoginAction {
    type: typeof USER_LOGIN,
    payload: UserAuth
}

interface UserLogoutAction {
    type: typeof USER_LOGOUT
}

export type UserAuthActionTypes = UserLoginAction | UserLogoutAction;

export function setCurrentUserInfo(userAuth:UserAuth) : UserAuthActionTypes {
    return {
        type: USER_LOGIN,
        payload: userAuth
    };
}

export function userLogout() : UserAuthActionTypes {
    return {
        type: USER_LOGOUT
    };
}

//
//  상태 초기값 설정
const initialState: UserAuth = {
    userid: "",
    username: "",
    accessToken: "",
    isAuth: false,
    menus: []
}

export function userAuthReducer(state= initialState, action : UserAuthActionTypes) : UserAuth {

    switch (action.type) {
        case USER_LOGIN: return {
            userid: action.payload.userid,
            username: action.payload.username,
            accessToken: action.payload.accessToken,
            isAuth: true,
            menus: action.payload.menus
        }
        case USER_LOGOUT: return initialState;
        default:
            return state;
    }
}