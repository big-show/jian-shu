import React, {Component} from 'react';
import Slider from 'react-slick';
import {withRouter} from 'react-router-dom'
import {PageWrapper, PageLeft, PageRight, Backtop} from "./style";
import {carousel_1, carousel_2, carousel_3, carousel_4} from '../../statics/image';
import {ArticleList, Recommends, Writers, Topics} from './components';
import './carousel.css';
import {actionCreator} from './store';
import {connect} from 'react-redux';

class home extends Component {
    handleScrollTop=()=>
    {
        window.scrollTo(0,0);
    };
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 3000,
            pauseOnHover: true,
            swipeToSlide: true,
        };
        return (
            <div>
                <PageWrapper>
                    <PageLeft>
                        <Slider {...settings}>
                            <div><img src={carousel_1} className='banner' alt=''/></div>
                            <div><img src={carousel_2} className='banner' alt=''/></div>
                            <div><img src={carousel_3} className='banner' alt=''/></div>
                            <div><img src={carousel_4} className='banner' alt=''/></div>
                        </Slider>
                        <Topics/>
                        <ArticleList/>
                    </PageLeft>
                    <PageRight>
                        <Recommends/>
                        <Writers/>
                    </PageRight>
                    {/*回到首页组件何时显示，scrollToTop为ture时显示出来，点击时跳到最上面*/}
                    {this.props.scrollToTop?<Backtop onClick={this.handleScrollTop}><i className='iconfont'>&#xe61f;</i></Backtop>:null}
                </PageWrapper>
            </div>
        )
    }

    componentDidMount() {
        this.props.getHomeInfo();
        //页面加载完毕绑定回到top滚动事件。
        this.bindEvent();
    }
    //监听scroll，触发BackTopShow函数。可以用防抖来优化
    bindEvent()
    {
        window.addEventListener("scroll", this.props.changeBackTopShow)
    }
}
const mapProps = (state) =>
    ({
       scrollToTop:state.getIn(['home','scrollToTop']),
    });
const mapDispatchToProps = (dispatch) => ({
    getHomeInfo() {
        dispatch(actionCreator.getInitHomeInfo());
    },
    //
    changeBackTopShow()
    {
        const scrollTop=document.documentElement.scrollTop;
        //判断滚动高度超过100就要触发显示backTop图标
        (scrollTop<100)?dispatch(actionCreator.getScrollTop(false)):dispatch(actionCreator.getScrollTop(true));
    }
});
export default connect(mapProps, mapDispatchToProps)(withRouter(home));