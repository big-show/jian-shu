import * as actionTypes from "./actionTypes";
import {fromJS} from 'immutable';
const defaultState=fromJS({
    focused:false,
    list:[],
    mouseIn:false,
    page:0,
    totalPage:0,
    showContent:false,
    iconSwitch:false,
});

export default (state=defaultState,action)=>{
    switch(action.type) {
        case actionTypes.INPUT_FOUCS:
            return state.set('focused',true);
        case  actionTypes.INPUT_BLUR  :
            return state.set('focused',false);
        case  actionTypes.LIST_ITEM:
            return state.merge(
                {'list':action.data},
                {'totalPage':action.totalPage}
                );
        case  actionTypes.MOUSE_IN:
            return state.set('mouseIn',true);
        case  actionTypes.MOUSE_OUT:
            return state.set('mouseIn',false);
        case  actionTypes.SWITCH_CLICK:
            return state.merge(
                {'page':action.page},
                {'iconSwitch':action.iconState}
            );
        case actionTypes.SHOW_CONTENT:
            return state.set('showContent',action.showState);
        default:
            return state;
    }
};