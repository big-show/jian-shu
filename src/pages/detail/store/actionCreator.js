import axios from 'axios';
import {fromJS} from 'immutable';
import {actionType} from './index';

const initDetailData=(data)=>({
  type:actionType.INIT_DETAIL_DATA,
    data:fromJS(data),
})
export const getInitDetailData=(id)=>((dispatch)=>{
    axios.get('/api/detail.json?id='+id).then((res)=>{
        dispatch(initDetailData(res.data.data))
    })
});
