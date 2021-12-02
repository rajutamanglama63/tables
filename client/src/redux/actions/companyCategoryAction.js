import {GET_ALL_COMPANY_CATEGORY} from '../constants/actionTypes'
import axios from 'axios'

export const getAllCompanyCategory = () => async (dispatch) => {
    try {
        const companyCategories = await axios.get('/api/companyCategory/all');

        dispatch({
            type : GET_ALL_COMPANY_CATEGORY,
            payload : companyCategories.data
        });
    } catch (error) {
        console.log(error);
    }
};
