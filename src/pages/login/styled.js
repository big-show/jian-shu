import styled from 'styled-components';

export const Wrapper=styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background-color:#f1f1f1;
`;
export const RegisterWrapper=styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    
    h1{
            font-weight: 700;
            color: #ea6f5a;
            border-bottom: 2px solid #ea6f5a;
            width:40px;
            font-size:18px;
            margin:0 auto 50px;
            padding:10px;
            
    } 
`;
export const InputWrapper=styled.div`
    position:relative;
    .iconfont
    {
        position: absolute;
        top:20px;
        left: 60px;
        font-size: 18px;
        color: #969696;   
    }
`;
export const Input=styled.input`
 display:block;
        width: 250px;
        height: 50px;
        margin: 0 auto ;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        border-radius: 0 0 4px 4px;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
        &.account{
            border-bottom:none;
            border-radius: 4px 4px 0 0;

        }`;
export const Button=styled.button`
margin: 20px auto 0;
        width: 300px;
        padding: 9px 18px;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        color: #fff;
        background: #42c02e;
        cursor: pointer;
        outline: none;
        display: block;
        clear: both;
`;