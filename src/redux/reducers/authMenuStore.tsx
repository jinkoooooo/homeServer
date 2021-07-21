import React from "react";
import {UserMenu} from "../../model/Menu";


export interface UserAuthMenu {
    menus : UserMenu[]
}

export const SET_USER_MENU = "SET_USER_MENU";

interface SetUserAuthMenuAction {
    type: typeof SET_USER_MENU
    payload: UserMenu[]
}

export type UserAuthActionTypes = SetUserAuthMenuAction;

export function setUserAuthMenu(menus:UserMenu[]) {
    return {
        type: SET_USER_MENU,
        payload: menus
    };
}

const initialState : UserMenu[] = [];

export function userAuthMenuReducer(state=initialState, action:UserAuthActionTypes) {

    switch (action.type) {
        case "SET_USER_MENU": return {
            menus: action.payload as UserMenu[]
        }
        default: return state;
    }

}