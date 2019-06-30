import * as actionTypes from "./actionTypes";
import axios from 'axios';
import {fromJS} from 'immutable';
const changeList = (data) => {
    return {
        type: actionTypes.LIST_ITEM,
        data: fromJS(data),
        totalPage:Math.ceil(data.length/10)
    }
};
export const getInputFocus = () => ({type: actionTypes.INPUT_FOUCS});
export const getInputBlur = () => ({type: actionTypes.INPUT_BLUR});

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/searchInfoList.json').then((res) => {
            const data = res.data.data;
            dispatch(changeList(data))
        }).catch(() => {
            console.log('error');
        })
    }
};
export const getMouseIn=()=>({type:actionTypes.MOUSE_IN});
export const getMouseOut=()=>({type:actionTypes.MOUSE_OUT});
export const getSwitchClick=(page,iconState)=>({
    type:actionTypes.SWITCH_CLICK,
    page:page,
    iconState:iconState
});
export const getShowContent=(showState)=>({
   type:actionTypes.SHOW_CONTENT,
    showState,
});
