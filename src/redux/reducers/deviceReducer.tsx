import React, {useReducer} from "react";



export type State = {
  id:number,
  deviceCode:string,
  deviceName:string,
  runFlag:boolean
}

export type Action = {
  data:State,
  type:string
}

const initialState:State = {
  id:0,
  deviceCode:"",
  deviceName:"",
  runFlag:false
}

export const DeviceReducer = (state:State[], action:Action) => {
  switch (action.type) {
    case 'reset': {
      return initialState
    }
    case 'toggleToBeAdmin': {
      return initialState
    }
    case 'updateNickname': {
      return initialState
    }
    case 'updateEmail': {
      return initialState
    }
    default: {
      throw new Error(`unexpected action.type: ${action.type}`)
    }
  }
}

