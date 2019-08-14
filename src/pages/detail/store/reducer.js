import {fromJS} from 'immutable';
import {actionType} from './index';
const defaultState=fromJS({
    title:'',
    content:""});
export default (state=defaultState,action)=>{
    switch (action.type) {
        case actionType.INIT_DETAIL_DATA:
        return state.merge({
            title:action.data.get('title'),
            content:action.data.get('content')
        });

        default:
            return state

    }
}