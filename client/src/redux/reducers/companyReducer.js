import {GET_ALL_COMPANY} from '../constants/actionTypes'

export const companyReducers = (companies = [], action) => {
    switch(action.type) {
        case GET_ALL_COMPANY:
            return action.payload;
        default:
            return companies;
    }
}