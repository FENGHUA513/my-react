import React, { Component } from 'react';
import './index.less';
import {observer} from 'mobx-react';
import axios from 'axios';
import {Button, Toast} from 'antd-mobile'

@observer
class Login extends Component {
  componentWillMount(){
    this.props.store.getList()
    console.log(this.props.store.list, 'store')
  }
  showToast() {
    Toast.info('This is a toast tips !!!', 1);
  }
  render() {
    return (
      <div className="login">
        登录
        {
          this.props.store.list.map((item, key) => {
            return <Button type="primary" size="big" onClick={showToast}><p key={key}>{item}</p></Button>
          })
        }
      </div>
    );
  }
}

export default Login;
