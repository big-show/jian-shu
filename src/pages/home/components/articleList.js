import React,{ PureComponent } from 'react';
import {ListItem,ListInfo,LoadMore} from '../style';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {actionCreator} from '../store'
class ArticleList extends PureComponent{
    render(){
        const{articleList,handleLikeCLick,getLoadMoreList,page}=this.props;
        return(
            <div>

                {articleList.map((item,index) => (
                        <ListItem key={index}>
                            <img alt='' className='articlePic' src={item.get('imgUrl')}/>
                            <ListInfo>
                                <Link to={'/detail/'+item.get('id')}  style={{textDecoration:'none'}}>
                                <h3 className='articleTitle'>{item.get('title')}</h3>
                                <p className='articleContent'>{item.get('content')}</p>
                                </Link>
                                <p className='articleAuthor'>{item.get('author')}
                                    <i className='iconfont comment'>&#xe684;</i><span>{item.get('comment')}</span>
                                    <i className={item.get('likeState') ? 'iconfont like likeState ' : 'iconfont like'}
                                       onClick={() => {
                                           handleLikeCLick(item.get('id'), item.get('like'), item.get('likeState'))
                                       }}>&#xe60f;</i><span>{item.get('like')}</span>
                                </p>
                            </ListInfo>
                        </ListItem>
                    )
                )}
                {/*点击可以异步获取更多文章*/}
                < LoadMore onClick={()=>getLoadMoreList(page)}>
                阅读更多
                </LoadMore>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        articleList:state.getIn(['home','articleList']),
        page:state.getIn(['home','articlePage']),
    }
};
const mapDispatchToProps=(dispatch)=>{
     return{
         handleLikeCLick(id,like,state)
         {
             dispatch(actionCreator.getLikeClick(id,like,state));
         },
         getLoadMoreList(page){
             dispatch(actionCreator.getMoreArticleList(page+1))
         }
     }
};

export default connect(mapStateToProps,mapDispatchToProps) (ArticleList);