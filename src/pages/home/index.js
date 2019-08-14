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
                    {this.props.scrollToTop?<Backtop onClick={this.handleScrollTop}><i className='iconfont'>&#xe61f;</i></Backtop>:null}
                </PageWrapper>
            </div>
        )
    }

    componentDidMount() {
        this.props.getHomeInfo();
        this.bindEvent();
    }
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
    changeBackTopShow()
    {
        const scrollTop=document.documentElement.scrollTop;
        (scrollTop<100)?dispatch(actionCreator.getScrollTop(false)):dispatch(actionCreator.getScrollTop(true));
    }
});
export default connect(mapProps, mapDispatchToProps)(withRouter(home));