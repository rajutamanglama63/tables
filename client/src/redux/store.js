import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {companyCategoryReducers} from './reducers/companyCategoryReducer'
import {companyReducers} from './reducers/companyReducer'

const middleware = [thunk];

const reducers = combineReducers({
    company_category : companyCategoryReducers,
    company : companyReducers
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;