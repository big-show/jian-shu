import React, {Component} from 'react';
import {Wrapper,RegisterWrapper,InputWrapper,Input,Button} from './styled';
import {connect} from 'react-redux';
import {actionCreator} from './store'
import {Redirect,withRouter} from 'react-router-dom';
class Login extends Component {
    render() {
        const{loginState,login}=this.props;
        console.log(loginState);
        if(!loginState){
        return (
            <Wrapper>
            <RegisterWrapper>
                <h1>登录</h1>
                <InputWrapper>
                    <i className='iconfont'>&#xe616;</i>
                    <Input ref={(input)=>{this.account=input}}
                        type='text' className='account' placeholder='电话及邮箱'/>
                </InputWrapper>
                <InputWrapper>
                    <i className='iconfont'>&#xe6b2;</i>
                    <Input ref={(input)=>{this.password=input}} type='password' placeholder='密码'/>
                </InputWrapper>
                <Button type='button' onClick={()=>login(this.account,this.password)}>登录</Button>
            </RegisterWrapper>
            </Wrapper>
        )
        }
        else {
           return <Redirect to='/'/>;
        }
    }
}
const mapProps=(state)=>({
    loginState:state.getIn(['login','login'])
});
const mapDispatch=(dispatch)=>({
    login(account,password){
        dispatch(actionCreator.handleLogin(account.value,password.value))
    }
});
export default connect(mapProps,mapDispatch)(withRouter(Login));
