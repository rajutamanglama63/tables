import {GET_ALL_COMPANY} from '../constants/actionTypes'
import axios from 'axios'

export const getAllCompany = () => async (dispatch) => {
    try {
        const company = await axios.get('/api/company/all');

        dispatch({
            type : GET_ALL_COMPANY,
            payload : company.data
        });
    } catch (error) {
        console.log(error);
    }
};
