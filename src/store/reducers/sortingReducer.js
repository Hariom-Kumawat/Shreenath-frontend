import { SET_PAGINATION, SET_SORTING, TOGGLE_DROPDOWN } from "../types";

const initialState = {
    pagination: {
        page: 1,
        limit: 10
    },
    sorting: {
        fieldOrder: "name",
        sortingOrder: 'asc'
    },
    dropdownOpen: false
}

const sortingReducer = (state = initialState, action) => {
    switch (action.payload) {
        case SET_PAGINATION:
            return {
                ...state,
                pagination: action.payload
            };

        case SET_SORTING:
            return {
                ...state,
                sorting: action.payload
            };

        case TOGGLE_DROPDOWN:
            return {
                ...state,
                dropdownOpen: !state.dropdownOpen
            }
        default:
            return state;
    }
}

export default sortingReducer;