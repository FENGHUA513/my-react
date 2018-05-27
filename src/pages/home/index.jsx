import React, { Component } from 'react';
import {Link, } from 'react-router-dom'
import { connect } from 'react-redux';
import {getData, addUser} from '@/store/home/action'
import './index.less';

class Home extends Component {
  state = {
    list: []
  }
  componentWillMount(){
    this.props.getData()
    this.props.addUser({
      name: 'huahua'
    })
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
        {
          this.props.List.map((item, key) => {
            return <p key={key}>{item}</p>
          })
        }
      </div>
    );
  }
}

export default connect(state => ({
  List: state.list,
  User: state.user
}), {
  getData,
  addUser
})(Home);
