import { TOGGLE_BAR_ICON } from "../types";

const initialState = {
    barIconClicked : false
}

const barIconReducer = (state = initialState , action) => {
 switch (action.type) {
    case TOGGLE_BAR_ICON : 
    return {
      ...state ,
      barIconClicked :!state.barIconClicked
    }
    default:
        return state;
 }
}

export default barIconReducer;