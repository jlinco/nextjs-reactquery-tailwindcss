import { AppReducer, InitialAppState } from "@/types/App.model";

const mainReducer: AppReducer = (state, action): InitialAppState => {
  switch(action.type) {
    case 'NAVIGATION':
      return { ...state, nav: action.payload }
    default:
      return state
  }
}

export default mainReducer