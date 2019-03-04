import React, { Component } from 'react';
import logo from './logo.svg';
import {Provider,observer,inject} from 'mobx-react';
import Store from "./Store/Store"
import './App.css';
import Lang from './Store/Lang';
import {Button} from 'antd'
import {HashRouter, BrowserRouter, MemoryRouter, Route, Control } from 'react-keeper'
import Home from "./Pages/Home"
import E404 from "./Pages/E404"
import Tap from "./Pages/Tap"

class App extends Component {
  render() {
    return (


      <Provider store={new Store()}  lang={new Lang()} >

      <HashRouter>
        <div>
        <Route component={Home} path="/"  />
        <Route miss cache component={E404} />
    
        </div>
      </HashRouter>

      </Provider>
    );
  }
}

@inject("store","lang")
@observer
class Mt extends Component{
  constructor(props){
    super(props)
  }
  render(){
    var { store} = this.props
    var { Lang } = store
  
    return (
      <div>
    <span>
      {store.Menus}
      {Lang.btn_name}
    </span>
    <button onClick={store.switchToEnglish}>
      切换到英语
    </button>
    <button onClick={store.switchToChinese}>
      切换到中文
    </button>
    </div>
    )
  }
}

export default App;
