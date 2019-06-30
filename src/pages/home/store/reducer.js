import {fromJS} from 'immutable';

import {
    photo, movie, handmade, reading, internet, science, story,
    articleItem_1, articleItem_2, articleItem_3, articleItem_4, articleItem_5, articleItem_6,
    writer_10,writer_9,writer_8,writer_7,writer_6,writer_5,writer_4,writer_3,writer_2,writer_1,
} from '../../../statics/image';
import {actionType} from './index';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            content: '摄影',
            imgUrl: photo
        },
        {
            id: 2,
            content: '简书电影',
            imgUrl: movie
        },
        {
            id: 3,
            content: '手绘',
            imgUrl: handmade
        },
        {
            id: 4,
            content: '读书',
            imgUrl: reading
        },
        {
            id: 5,
            content: '@IT.互联网',
            imgUrl: internet
        },
        {
            id: 6,
            content: '自然科普',
            imgUrl: science
        },
        {
            id: 7,
            content: '故事',
            imgUrl: story
        }
    ],
    articlePage:1,
    articleList: [
        {
            id: 1,
            title: '前世缘，今生劫41',
            content: '白浅让凤九变回狐狸，让东华帝君抱着。（其实凤九乘白浅睡觉时进入了她的梦境。告诉了白浅自己在大殿上发生的事情，还打算和白真一起帮助凤九。何...',
            author: '笙笙不息白笙',
            imgUrl: articleItem_1,
            comment: 5,
            like: 12,
            likeState: false
        },
        {
            id: 2,
            title: '老外：凭啥中国是二战五大战胜国之一？法国：你们聊，我先走了！',
            content: '第二次世界大战可以说是人类历史上最残酷的战争，没有之一，全世界61个国家和地区，卷入了这场混战（二战前世界上独立国家才65个），超过20亿人陷入...',
            author: '历史大事件',
            imgUrl: articleItem_2,
            comment: 32,
            like: 6,
            likeState: false
        },
        {
            id: 3,
            title: '未婚先孕，被我妈知道了',
            content: '和男友同居2年，只有一次未做防护，就真的怀孕了，中奖率100%。 在外漂泊，难得的温暖来源于给妈妈煲电话粥。怀孕这么大的事，既为难又忍不住想告诉...',
            author: '丫丫倾了城',
            imgUrl: articleItem_3,
            comment: 51,
            like: 21,
            likeState: false
        },

        {
            id: 4,
            title: '为了不再卑微的活着，她将婆婆一家人赶出家门',
            content: '文/绿叶的思念 花儿，学校的饭还吃的惯不？ 来回的路太远你也别每个星期都回来，妈在家老担心你，以后不成你就一个月回来一两次吧，话费贵咱就别多聊了...',
            author: '绿叶青了城',
            imgUrl: articleItem_4,
            comment: 46,
            like: 33,
            likeState: false

        },
        {
            id: 5,
            title: '只管念佛 念佛就对了',
            content: '只管念佛，念佛就对了 念佛不光有往生成佛的利益，还有今生种种现实利益，所以，也有人问了：“我身体不好，有灾难，业障重，是不是念《灭定业真言》？求...',
            author: '正觉大音响流十方',
            imgUrl: articleItem_5,
            comment: 643,
            like: 122,
            likeState: false
        },
        {
            id: 6,
            title: '杨颖竟裹着“窗帘”就上场，身材走样，低头惊现“双下巴',
            content: '出生在上海的杨颖以模特身份出道，早期在香港发展时，事业略微平淡，转而回到内地发展后却收获空...',
            author: '庐州冢虎',
            imgUrl: articleItem_6,
            comment: 35,
            like: 24,
            likeState: false

        },
    ],
    //writer section data
    writerPage:1,
    writerTotalPage:0,
    writerSwitchState:false,
    writerList: [
        {
            name:'王诗翔',
            intro:'写了444.6k字 · 1.8k喜欢',
            imgUrl:writer_1,
        },
        {
            name:'乌大经',
            intro:'写了124.6k字 · 4.8k喜欢',
            imgUrl:writer_2,
        },
        {
            name:'王北车',
            intro:'写了44.3k字 · 1.1k喜欢',
            imgUrl:writer_3,

        },
        {
            name:'吴雨欣',
            intro:'写了213.6k字 · 50k喜欢',
            imgUrl:writer_4,
        },
        {
            name:'乌木阳',
            intro:'写了1434.1k字 · 31.5k喜欢',
            imgUrl:writer_5,

        },
        {
            name:'郭艾伦',
            intro:'写了4.1k字 · 0.3k喜欢',
            imgUrl:writer_6,

        },
        {
            name:'穆志高',
            intro:'写了14.1k字 · 1.5k喜欢',
            imgUrl:writer_7,
        },
        {
            name:'Mick',
            intro:'写了2334.1k字 · 36.5k喜欢',
            imgUrl:writer_8,

        },
        {
            name:'吴金贵',
            intro:'写了34.1k字 · 0.5k喜欢',
            imgUrl:writer_9,
        },
        {
            name:'艾伦',
            intro:'写了43.1k字 · 3.5k喜欢',
            imgUrl:writer_10,
        },
    ],
    scrollToTop:true,
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionType.LIKE_CLICK: {
            if (action.state === false) {
                const newState = state.updateIn(['articleList', action.id - 1, 'like'], like => (like + 1));
                return newState.setIn(['articleList', action.id - 1, 'likeState'], true);
            }
            else {
                const newState = state.updateIn(['articleList', action.id - 1, 'like'], like => (like - 1));
                return newState.setIn(['articleList', action.id - 1, 'likeState'], false);
            }
        }
        case actionType.WRITER_SWITCH:
        {
            return state.merge({
                writerPage: fromJS(action.writerPage),
                writerTotalPage:fromJS(action.writerTotalPage),
                writerSwitchState:fromJS(action.writerSwitchState),
            })
        }
        case actionType.INIT_HOME_INFO:
            return state.merge({
                writerPage:action.data.writerPage,
                writerSwitchState:action.data.writerSwitchState,
                writerTotalPage:action.data.writerTotalPage
            });
        case actionType.LOAD_MORE_LIST:
            return state.merge({
                    "articleList": state.get("articleList").concat(action.list),
                    "articlePage":action.page,
                }
            );
        case actionType.SCROLL_TOP:
            return state.set('scrollToTop',action.scrollTopState);
        default:
            return state;
    }
}