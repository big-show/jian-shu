import * as actionTypes from "./actionTypes";
import axios from 'axios';
import {fromJS} from 'immutable';
const changeList = (data) => {
    return {
        type: actionTypes.LIST_ITEM,
        data: fromJS(data),
        //计算一共有多少页listItem
        totalPage:Math.ceil(data.length/10)
    }
};
//设置focused为true
export const getInputFocus = () => ({type: actionTypes.INPUT_FOUCS});
//设置focused为false
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
//设置mouseIn为true
export const getMouseIn=()=>({type:actionTypes.MOUSE_IN});
//设置mouseIn为false
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
