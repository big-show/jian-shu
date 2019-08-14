import {actionType} from './index';
import axios from 'axios';
const checkLogin=(loginState)=>(
{
    type:actionType.LOGIN,
    loginState
});

export const handleLogin=(account,password)=>((dispatch)=>
    {axios.get('api/login.json').then((res)=>{
        console.log(res.data.data);
        console.log(account,password);
        dispatch(checkLogin(true))
}).catch(()=>{
    alert('登录失败')
})}
);
export const handleLogout=()=>({
   type:actionType.LOGOUT,
   logState:false
});