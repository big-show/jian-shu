import React, {Component} from 'react';
import {GlobalStyle} from './style';
import Header from './common/header'
import IconfontStyle from './statics/iconfont/iconfont';
import {Provider} from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import store from './store';
import Home from './pages/home/loadable';
import Detail from './pages/detail/loadable';
import Login from './pages/login/loadable'
import Write from './pages/write/loadable'

class App extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
                <IconfontStyle/>
                <Provider store={store}>
                        <HashRouter>
                            <div>
                                {/*路径是/时显示两个组件*/}
                                <Route path='/' exact component={Header}></Route>
                                <Route path='/' exact component={Home}></Route>
                                <Route path='/detail/:id' exact component={Detail}></Route>
                                <Route path='/login' exact component={Login}></Route>
                                <Route path='/write' exact component={Write}></Route>
                            </div>
                        </HashRouter>
                </Provider>
            </div>
        );
    }
}

export default App;
