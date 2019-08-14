import {actionType} from "./index";
import axios from 'axios';
import {fromJS} from 'immutable';
const getHomeInfo=(data)=>({
    type:actionType.INIT_HOME_INFO,
    data,
});
const getLoadList=(list,page)=>({
    type:actionType.LOAD_MORE_LIST,
    list:fromJS(list),
    page
});
//处理点赞
export const getLikeClick=(id,like,state)=>
{
    return{
        type:actionType.LIKE_CLICK,
        id,
        like,
        state,
    }
};
export const getWriterSwitch=(list,writerPage,writerTotalPage,writerSwitchState)=>{
    return{
        type:actionType.WRITER_SWITCH,
        writerTotalPage,
        writerPage,
        writerSwitchState:writerSwitchState===true?false:true
    }
};
//获取的是页数，数据存储在了本地
export const getInitHomeInfo=()=>((dispatch)=>{
    axios.get('/api/home.json').then((res)=>{
        const data=res.data.data;
        dispatch(getHomeInfo(data))
    }).catch(()=>{
        console.log('error datasite');
        }
    )
});
//如果想获得更多的文字，就需要axios进行异步获取。
export const getMoreArticleList=(page)=>((dispatch)=>{
    axios.get('/api/articleList.json?page='+page).then((res)=>{
        const data=res.data.data;
       dispatch(getLoadList(data,page));
    });
});
export const getScrollTop=(scrollTopState)=>({
    type:actionType.SCROLL_TOP,
    scrollTopState,
});
