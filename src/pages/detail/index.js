import React,{ Component } from 'react';
import {DetailWrapper,Header,Content} from "./style";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreator} from './store';
class detail extends Component{
    render(){
        return(
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
                </Content>
            </DetailWrapper>

    )}
    componentDidMount()
    {
        this.props.handleInitDetailData(this.props.match.params.id);
    }
}
const mapProps=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
});
const mapDisptach=(dispatch)=>({
    handleInitDetailData(id)
    {
        dispatch(actionCreator.getInitDetailData(id))
    }
})
export default connect(mapProps,mapDisptach)(withRouter(detail));