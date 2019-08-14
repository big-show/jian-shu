import {fromJS} from 'immutable';
import {actionType} from './index';
const defaultState=fromJS({
  login:false
});
export default (state=defaultState,action)=>{
    switch (action.type) {
        case actionType.LOGIN:
            return state.set('login',true);
        case actionType.LOGOUT:
            return state.set('login',false);
        default:
            return state;
    }

}