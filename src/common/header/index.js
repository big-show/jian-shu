import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {Link} from 'react-router-dom';
import {actionCreators} from './store';
import{actionCreator as loginActionCreator} from '../../pages/login/store';
import {connect} from 'react-redux';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearchWrapper,
    NavSearchInfoWrapper,
    NavSearchTipWrapper,
    NavSearchHotTip,
    NavSearchInfoSwitch,
    NavSearchInfoList,
    NavSearchInfoItem,
    NavSearch,
    Addition,
    Button,
    DropDownContent
} from './style'


class Header extends Component
{
    //是否显示searchInfo内容的函数。
    showNavSearchInfo(){
        const{list,page,totalPage,focused,iconSwitchState,mouseIn,handleMouseIn,handleMouseOut,handleClickSwitch} =this.props;
        const newList=list.toJS();
        const showList=[];
        //将Item存入showList中
        if(newList.length!==0) {
            for (let i = page * 10; i < (page + 1) * 10; i++) {
                showList.push(<NavSearchInfoItem key={newList[i]}>{newList[i]}</NavSearchInfoItem>)
            }
        }
        //在点击inputfocues或者鼠标在showNavSearch内容区是显示Info
        if (focused === true||mouseIn===true) {
            return (
                <NavSearchInfoWrapper
                    onMouseEnter={handleMouseIn}
                    onMouseLeave={handleMouseOut}
                >
                    <NavSearchTipWrapper>
                        <NavSearchHotTip>热门搜索</NavSearchHotTip>

                        <NavSearchInfoSwitch onClick={()=>handleClickSwitch(page,totalPage,iconSwitchState)}>换一批</NavSearchInfoSwitch>
                        <CSSTransition
                            in={iconSwitchState}
                            timeout={400}
                            classNames='rotate'
                        >
                            <i ref={(icon)=>{this.Icon=icon}} className='iconfont'>&#xe613;</i>
                        </CSSTransition>
                    </NavSearchTipWrapper>
                    <NavSearchInfoList>
                        {showList}
                    </NavSearchInfoList>
                </NavSearchInfoWrapper>)

        }
        else {
            return null;
        }
    };
    render() {
        const{showState,list,focused,handleInputFocus,handleInputBlur,loginState,logout,showContent} =this.props;
        return (
            <HeaderWrapper>
                <Link to={'/'}>
                <Logo />
                </Link>
                <Nav>
                    {/*showState:用来判断是否在宽度比较小的情况下显示自适应的内容，listBar在宽度大于900是不显示的*/}
                    <i className='iconfont listBar' onClick={()=>showContent(showState)}>&#xea0d;</i>
                    <NavItem className='left active' href='/'>首页</NavItem>
                    <NavItem className='left ' href='/'>下载App</NavItem>
                    {
                        loginState?<NavItem className='right' href='/' onClick={logout}>退出</NavItem>:
                            <Link to='/login'><NavItem className='right' href='/' >登录</NavItem></Link>
                    }
                    <NavItem className='right' href='/'><i className='iconfont zoom'>&#xe636;</i></NavItem>
                    {/*NavSearchWrapper在宽度小于900时display：none，上面的i显示，下面的DropDwonContent也可以点击*/}
                    <NavSearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={400}
                            classNames='slide'
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={()=>{handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom '}
                        >&#xe6e4;</i>
                        {this.showNavSearchInfo()}
                    </NavSearchWrapper>
                </Nav>
                <Addition>
                    <Link to='/write'>
                    <Button className='right'>
                        <i className='iconfont'>&#xe6a4;</i>
                        写文章
                    </Button>
                    </Link>
                    <Button className='left'>注册</Button>
                </Addition>
                {/*//dropDownContent显示的是在宽度较小时，点击i时，显示自适应的内容*/}
                <DropDownContent className={showState?'showContent':''}>
                    <NavItem className='left active show' href='/'>首页</NavItem>
                    <NavItem className='left show ' href='/'>下载App</NavItem>
                    <NavSearchWrapper className='show showSearchWrapper'>
                        <CSSTransition
                            in={focused}
                            timeout={400}
                            classNames='slide'
                        >
                            <NavSearch
                                className='showSearch'
                                onFocus={()=>{handleInputFocus(list)}}
                                //当失去焦点时，设置focused为false

                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont showZoom' : 'iconfont showZoom'}
                        >&#xe6e4;</i>
                        {this.showNavSearchInfo()}
                    </NavSearchWrapper>
                </DropDownContent>
            </HeaderWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.get('header').get('focused'),
        list:state.get('header').get('list'),
        mouseIn:state.get('header').get('mouseIn'),
        page:state.getIn(['header','page']),
        totalPloginStateage:state.getIn(['header','totalPage']),
        loginState:state.getIn(['login','login']),
        showState:state.getIn(['header','showContent']),
        iconSwitchState:state.getIn(['header','iconSwitch']),
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //input框focus时，加载listItem列表，也就是热点列表，如果有了list列表，就设置focused为true，进行显示
        handleInputFocus(list) {
            (list.size===0)&& dispatch(actionCreators.getList());
            dispatch(actionCreators.getInputFocus());
        },
        //设置focused为false，取消listItem的显示
        handleInputBlur() {
            dispatch(actionCreators.getInputBlur());
        },
        //鼠标移入listItem区域，mouseIn设为true，显示listItem
        handleMouseIn(){
            dispatch(actionCreators.getMouseIn());
        },
        //鼠标移入listItem区域，mouseIn设为false，不显示显示listItem
        handleMouseOut()
        {
            dispatch(actionCreators.getMouseOut())
        },
        //点击换一换，加载下一组listItem数据
        handleClickSwitch(page,totalPage,iconSwitchState)
        {
           /* let rotateAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(rotateAngle)
            {
                rotateAngle=parseInt(rotateAngle,10);
            }
            else
            {
                rotateAngle=0;
            }
            spin.style.display="inline-block";
            spin.style.transform='rotate('+(rotateAngle+260)+'deg)';
            console.log(spin);*/
            const iconState=iconSwitchState?false:true;
            if(page<totalPage-1) {
                dispatch(actionCreators.getSwitchClick(page + 1,iconState))
            }
            else {
                dispatch(actionCreators.getSwitchClick(0,iconState))
            }
        },
        logout() {
            dispatch(loginActionCreator.handleLogout())
        },
        //点击宽度小于900时的目录图标，对dropDwom内容显示与否设置toggle
        showContent(showState){
            if(showState)
            dispatch(actionCreators.getShowContent(false));
            else
            dispatch(actionCreators.getShowContent(true));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)