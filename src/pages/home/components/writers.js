import React, {PureComponent} from 'react';
import {WriterWrap, WriterTitle, WriterList, WriterItem} from '../style';
import {connect} from 'react-redux';
import {actionCreator} from '../store';
import {CSSTransition} from 'react-transition-group';
class Writers extends PureComponent {
    showWriterList() {
        const {list, writerPage} = this.props;
        const newList = list.toJS();
        const showList = [];
        if (newList.length !== 0) {
            for (let i = writerPage * 5; i < (writerPage + 1) * 5; i++) {
                showList.push(
                    <WriterItem key={newList[i].name}>
                        <img className='writerPic' src={newList[i].imgUrl} alt=''/>
                        <p className='writerFollow'><span>+</span> 关注</p>
                        <p className='writerName'>{newList[i].name}</p>
                        <p className='writerIntro'>{newList[i].intro}</p>
                    </WriterItem>
                )
            }
        }
        return showList;
    }

    render() {
        const {list, writerPage, writerTotalPage,writerSwitchState, handleWriterSwitch} = this.props;
        return (
            <WriterWrap>
                <WriterTitle>
                    <p className='writerRecommend'>推荐作者</p>
                    <p className='writerSwitch'
                       onClick={() => handleWriterSwitch(list, writerPage, writerTotalPage,writerSwitchState)}>
                        <CSSTransition
                        in={writerSwitchState}
                        timeout={400}
                        classNames='rotate'
                        >
                            <i className='iconfont' ref={(icon)=>{this.Icon=icon} }>&#xe613;</i>
                        </CSSTransition>
                        换一批</p>
                </WriterTitle>
                <WriterList>
                    {
                        this.showWriterList()
                    }
                </WriterList>
            </WriterWrap>
        )
    }
}

const
    mapStateToProps = (state) => {
        return {
            list: state.get('home').get('writerList'),
            writerPage: state.get('home').get('writerPage'),
            writerTotalPage: Math.ceil(state.get('home').get('writerList').size / 5),
            writerSwitchState: state.get('home').get('writerSwitchState')
        }
    };
const
    mapDispatchToProps = (dispatch) => {
        return {
            handleWriterSwitch(list, writerPage, writerTotalPage,writerSwitchState) {
                if (writerPage < writerTotalPage-1)
                    dispatch(actionCreator.getWriterSwitch(list, writerPage + 1, writerTotalPage,writerSwitchState));
                else {
                    dispatch(actionCreator.getWriterSwitch(list, 0, writerTotalPage,writerSwitchState));
                }
            },

        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Writers)
;