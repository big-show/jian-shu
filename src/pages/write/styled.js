import styled from 'styled-components';
export const PageWrapper=styled.div`
    position:absolute;
    background-color:#fff;
    top:0;
    left:0;
    bottom:0;
    right:0;
`;
export const WriteWrapper=styled.div`
    width:800px;
    background-color:#f1f1f1;
    margin:60px auto;
    padding:30px;
    text-align:center;
    position:relative;
    h1
    {
    font-weight: 700;
    color: #ea6f5a;
    border-bottom: 2px solid #ea6f5a;
    width: 60px;
    font-size: 18px;
    margin: 0 auto 20px;
    padding: 10px;
    }
`;
export const TitleInput=styled.input`
    width:600px;
    border:1px solid rgb(169, 169, 169);
    margin:0 0 20px 0;
    height:50px;
    font-size:20px;
    border-radius:5px;
    background-color:#fff;

`;
export const ContentArea=styled.textarea`
    width:600px;
    margin:0 auto;
    height:600px;
    font-size:15px;
    background-color:#fff;
    border-radius:5px;
    margin-bottom:20px;

`;
export const Button=styled.button`
    width: 300px;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #42c02e;
    cursor: pointer;
    display:block;
    margin:0 auto;
    outline:none;
`;
