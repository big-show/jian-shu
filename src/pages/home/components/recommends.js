import React,{ PureComponent } from 'react';
import {recommend_1,recommend_2,recommend_3,recommend_4,recommend_5,QR_code} from '../../../statics/image';
import {RecommendWrapper,ContactMe,AddMyWeChat} from '../style';
class Recommends extends PureComponent{
    render(){
        return(
            <RecommendWrapper>
                <img src={recommend_1} alt=''/>
                <img src={recommend_2} alt=''/>
                <img src={recommend_3} alt=''/>
                <img src={recommend_4} alt=''/>
                <img src={recommend_5} alt=''/>
                <ContactMe>
                    <img  className='QRPic' src={QR_code} alt=''/>
                    <AddMyWeChat>
                    <p className='addMe'>扫码二维码加我好友</p>
                    <p className='shareMe'>随时随地分享知识、加油</p>
                    </AddMyWeChat>
                    <img src={QR_code} className='HDQRPic' alt=''/>
                </ContactMe>

            </RecommendWrapper>
        )
    }
}
export default Recommends;