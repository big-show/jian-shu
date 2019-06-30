import React,{ PureComponent } from 'react';
import {TopicsItem,TopicsWrapper} from '../style';
import {connect} from 'react-redux';
class Topics extends PureComponent{
    render(){
        const{topicList}=this.props;
        return(
            <TopicsWrapper>
                {topicList.map((item)=>(
                    <TopicsItem key={item.get('id')}>
                        <img className='topicPic'src={item.get('imgUrl')} alt=''/>
                        {item.get('content')}
                    </TopicsItem>
                ))}
            </TopicsWrapper>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        topicList:state.get('home').get('topicList')
    }
}
export default connect(mapStateToProps,null)(Topics);