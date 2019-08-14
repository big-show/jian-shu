import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.header`
    position:relative;
    height:56px;
    border:1px solid #f0f0f0;
    min-width:800px;
`;
export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;
export const Nav = styled.div`
    margin:0 250px 0 150px;
    height:56px;
    .listBar{
        display:none;
     @media screen and (max-width:900px){
        display:block;
        float:left;
        cursor:pointer;
        line-height:56px;
        padding:0 15px;
        font-size:17px;
        color:#333;
        text-decoration: none;
            &:hover
            {
                color:#999191;
                border: 1px solid #f0f0f0;

            }
        }
        
`;
export const NavItem = styled.div`

    cursor:pointer;
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    text-decoration: none;
    &.left{
    @media screen and (max-width:900px)
    {
        display:none;
    }
        float:left; 
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`
export const NavSearchWrapper = styled.div`
 @media screen and (max-width:900px)
    {
        display:none;
    }
    float:left;
    position:relative;
    z-index:100;

    .zoom{
        cursor:pointer;
        position:relative;
        right:35px;
        top:2px;
        border-radius:15px;
        width:30px;
        line-height:30px;
        display:inline-block;
        text-align:center;
        &.focused
        {
            background-color:#777;
            color:#FFF;
        }
    }
    
`;
export const NavSearch = styled.input.attrs({placeholder: '搜索'})`
    width:160px;
    height:38px;
    border:none;
    border-radius:19px;
    box-sizing:border-box;
    background-color:#eee;
    padding:0 20px;
    margin:9px 0 0 20px;
    outline:none;
    color:#666;
    padding:0 30px 0 20px;
    &::placeholder{
        font-size:14px;
        color:#999;
    }
    &.focused{
        width:240px;
    }
    &.slide-enter
    {
        transition:width 0.4s ease-in;
    }
    &.slide-enter-active
    {
        width:240px;
        transition:width 0.4s ease-in;
    }
    &.slide-exit
    {
        transition:width 0.4s ease-in;
    }
    &.slide-exit-active
    {   
        width:160px;
    }
`;
export const Addition = styled.div`
    position:absolute;
    top:0;
    right:0;
    height:56px;
`;
export const NavSearchInfoWrapper = styled.div`
    position:absolute;
    top:56px;
    left:20px;
    width:240px;
    overflow:hidden;
    background-color:green;
    padding: 20px 20px 10px;
    border-bottom: 1px solid #f0f0f0;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    box-sizing:border-box;
`;
export const NavSearchTipWrapper = styled.div`
    overflow:hidden;
    .iconfont{
        display:block;
         line-height:20px;
        float:right;
        font-size: 13px;
        color: #969696;
        cursor:pointer;
        margin-right:5px;
        transform-original:center center;
            margin-right:3px;
            display:inline-block;
            transform:rotate(0);
            &.rotate-enter{
            transition:transform 0.4s ease-in;
             }
             &.rotate-enter-active
            {
                transform:rotate(360deg);
            }
            &.rotate-exit{
                transition:all 0.4s ease-in;
            }
            &.rotate-exit-active{
                transform:rotate(360deg);
             }
    }
`;
export const NavSearchHotTip = styled.div`
    position:absolute;
    font-size:14px;
    color: #969696;
    line-height:20px;
`;
export const NavSearchInfoSwitch = styled.span`
    display:block;
    line-height:20px;
    float:right;
    font-size: 13px;
    color: #969696;
    cursor:pointer;
`;
export const NavSearchInfoList = styled.div`
    overflow:hidden;
`;
export const NavSearchInfoItem = styled.a`
    margin: 10px 10px 0 0;
    display: inline-block;
    float:left;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
}
`;
export const Button = styled.div`
    float:right;
    line-height:38px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius:19px;
    font-size:15px;
    text-align:center;
    box-sizing:border-box;
    &.left
    {
        width:80px;
        color:rgba(236,97,73,.7);
        background-color:transparent;
    }
    &.right
    {
        background:rgba(236,97,73,.7);
        width:100px;
        color:white;
    }
`;
export const DropDownContent=styled.div`
     &.{
        display:block;
     }   
     display:none;
     position:absolute:
     top:56px;
     left:0;
     width:100%;
     text-align:center;
     .show
     {
            display:inline-block;
            height: 56px;showContent
            line-height: 26px;
            padding: 15px;
            width:100%;
            box-sizing:border-box;
            border-bottom:1px solid rgb(240, 240, 240);
;
     }
     .showSearchWrapper{
        line-height:38px;
        padding: 8px 15px;
        position:relative;
        .showZoom
        {
        position:absolute;
        top:13px;
        width:30px;
        height:30px;
        right:20px;
        border-radius: 15px;
        line-height: 30px;
        display: inline-block;
        text-align: center;
        &.focused
        {
            background-color:#777;
            color:#FFF;
        }
        }
     }
     .showSearch{
           width: 100%;
           height: 38px;
            border: none;
            border-radius: 19px;
            box-sizing: border-box;
            background-color: #eee;
            margin:0;
            outline: none;
            color: #666;
            padding: 0 30px 0 20px;
     }
`;