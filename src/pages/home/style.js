import styled from 'styled-components';
export const PageWrapper = styled.main`
    width:960px;
    margin 0 auto;
    overflow:hidden;
    min-width:800px;
    margin-top:30px;
`;
export const PageLeft = styled.div`
    float:left;
    width:66.6%;
    box-sizing:border-box;
    padding-left:15px;
     .banner
    {   
        width:100%;
        height:270px;
        border-radius: 5px;
    }
`;
export const PageRight = styled.div`
    float:right;
    width:33.3%;
    padding-left:40px;
    box-sizing:border-box;

`;
export const TopicsWrapper = styled.div`
    width:100%;
    overflow:hidden;
    margin-top:30px;
    padding-bottom:20px;
    border-bottom: 1px solid #f0f0f0;

`;
export const TopicsItem = styled.div`
    display:inline-block;
    margin: 18px 18px 0 0 ;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    line-height:32px;
    font-size:14px;
    color:#333;
    padding-right:8px;
    overflow:hidden;
    box-sizing:border-box;
    cursor:pointer;
    
    .topicPic
    {
        padding-right:5px;
        display:block;
        float:left;
        width:32px;
        height:32px;
    }
`;
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    .articlePic
    {
        float:right;
        width:150px;
        height:100px;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
        box-sizing:border-box;
        margin-left:10px;
    }
`;
export const ListInfo = styled.div`
    cursor:pointer;
    .articleTitle
    {
        margin: 0 0 4px 0;
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #000;
    }
    .articleContent
    {   
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    .articleAuthor
    {
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        margin-right: 10px;
        color: #b4b4b4;
        .iconfont{
            margin-left: 10px;
            font-size：12px;
            &.comment:hover
                {   
                    color:#5a5555;
                }
            &.likeState
            {
                color:red;
            }    
        }
         span
            {   
                margin-left:3px;
                display:inline-block;
                font-size: 12px;
                margin-left: 10px;
            }
    }
`;
export const LoadMore=styled.div`
    width:100%;
    line-height:40px;
    height:40px;
    text-align:center;
    color:white;
    border-radius: 20px;
    background-color: #a5a5a5;
    font-size:15px;
    margin: 30px auto 60px;
    cursor:pointer;
`;
export const RecommendWrapper = styled.div`
    width:100%;
    cursor:pointer;
    margin-top:-4px;
    img
    {
        width:100%;
        height:50px;
        margin-bottom:5px;
        border-radius:4px;
    } 
`;
export const ContactMe = styled.div`
    position:relative;
    margin: 5px 0 30px 0;
    padding: 10px 22px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    float:left;
    width:100%;
    box-sizing:border-box;
     &:hover
        {   
           .HDQRPic
           {
                opacity:1;
           }
        }
    .QRPic
    {
        float:left;
        height:60px;
        width:60px;
    }
    
    .HDQRPic{
        position:absolute;
        top:0;
        left: 50%;
        transform:translate(-90px,-190px);
        height:180px;
        width:180px;
        opacity:0;
        padding: 10px;
        box-sizing:border-box;
        background-color:white;
        border: 2px solid #f0f0f0;
        &:hover
        {
            opacity:0;
        }
       
    }
`;
export const AddMyWeChat = styled.div`
    display:inline-block;
    margin-left:10px;
    height:60px;
    padding:10px 0;
    box-sizing:border-box;
    .addMe{
        font-size: 15px;
        color: #333;
        margin-bottom:10px;
    }
    .shareMe
    {   
        font-size: 13px;
        color: #999; 

    }
`;
//作者介绍区域
export const WriterWrap = styled.div`
    width:100%;
    overflow:hidden;
    cursor:pointer;
`;
export const WriterTitle = styled.div`
    overflow:hidden;
    font-size: 14px;
    color: #969696;
    .writerRecommend
    {
        float:left;
    }
    .writerSwitch
    {
        float:right;
        .iconfont
        {   
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
export const WriterList = styled.div`
    overflow:hidden;
`;
export const WriterItem = styled.div`
    margin-top:15px;
    .writerPic
    {
        float:left;
        border: 1px solid #ddd;
        border-radius: 50%; 
        width:48px;
        height:48px;
        box-sizing:border-box;
    }
    .writerFollow
    {
        float: right;
        margin-top: 10px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;  
        span
        {
            font-size:16px;
            font-weight:bold;
        }      
    }
    .writerName
    {
        padding-top: 5px;
        margin-left: 60px;
        font-size: 14px;
        color: #333;
        line-height: 20px;
    }
    .writerIntro
    {        
        margin-left: 60px;
        line-height: 20px;
        margin-top: 2px;
        font-size: 12px;
        color: #969696;
    }
`;
export const Backtop=styled.div`
    position:fixed;
    right:20px;
    bottom:20px;
    width:50px;
    height:50px;
    font-size:15px;
    text-align:center;
    line-height:50px;
    border: 1px solid #dcdcdc;
    cursor:pointer;
`;
