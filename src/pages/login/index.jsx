import React, { Component } from 'react';
import './index.less';
import {observer} from 'mobx-react';
import axios from 'axios';

@observer
class Login extends Component {
  state = {
    list: []
  }
  componentWillMount(){
    this.props.store.getList()
    console.log(this.props.store.list, 'store')
  }
  render() {
    return (
      <div className="login">
        登录
        {
          this.props.store.list.map((item, key) => {
            return <p key={key}>{item}</p>
          })
        }
      </div>
    );
  }
}

export default Login;
