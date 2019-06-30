import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect,withRouter} from 'react-router-dom';
import {PageWrapper,WriteWrapper,TitleInput,ContentArea,Button} from './styled'
class Write extends Component {
    render() {
        const{loginState}=this.props;
        console.log(loginState);
        if(loginState){
            return (
                <PageWrapper>
                    <WriteWrapper>
                        <h1>写文章</h1>
                        <TitleInput placeholder='标题'/>
                        <ContentArea/>
                        <Button>提交</Button>
                    </WriteWrapper>
                </PageWrapper>
            )
        }
        else {
            return <Redirect to='/login'/>;
        }
    }
}
const mapProps=(state)=>({
    loginState:state.getIn(['login','login'])
});
export default connect(mapProps,null)(withRouter(Write));
