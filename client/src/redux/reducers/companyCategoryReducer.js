import {GET_ALL_COMPANY_CATEGORY} from '../constants/actionTypes'

export const companyCategoryReducers = (companyCategories = [], action) => {
    switch(action.type) {
        case GET_ALL_COMPANY_CATEGORY:
            return action.payload;
        default:
            return companyCategories;
    }
}