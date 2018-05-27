import React, { Component } from 'react';
import {Link, } from 'react-router-dom'
import './index.less';

class Home extends Component {
  state = {
    list: []
  }
  componentWillMount(){
    
  }
  handClick () {
    console.log('跳转详情页')

  }
  render() {
    return (
      <div>
        <div className="home">
          我是首页
        </div>
        <Link to={{pathname: '/detail', query:{foo: 'foo'}}}>
          <button onClick={this.handClick}>详情页</button>
        </Link>
      </div>
    );
  }
}

export default Home;
