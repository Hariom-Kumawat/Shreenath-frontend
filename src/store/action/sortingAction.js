import { SET_SORTING, SET_PAGINATION, TOGGLE_DROPDOWN } from "../types";

export const setPagination = (page, limit) => {
    return {
        type: SET_PAGINATION,
        payload: { page, limit }
    }
}

export const setSorting = (sortField, sortingOrder) => {
    return {
        type: SET_SORTING,
        payload: { sortField, sortingOrder }
    }
}

export const toggleDropDown = () => {
    return {
        type: TOGGLE_DROPDOWN,
    }
}