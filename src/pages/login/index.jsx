import React, { Component } from 'react';
import './index.less';
import {observer} from 'mobx-react';
import axios from 'axios';
import {Button, Toast} from 'antd-mobile'
import toast from 'libs/toast'

@observer
class Login extends Component {
  componentWillMount(){
    this.props.store.getList()
    console.log(this.props.store.list, 'store')
  }
  showToast() {
    toast('fafafa')
    Toast.info('This is a toast tips !!!', 5);
  }
  render() {
    return (
      <div className="login">
        登录
        {
          this.props.store.list.map((item, key) => {
            return <Button style={{width: '50%'}} type="primary" size="big" onClick={this.showToast}><p key={key}>{item}</p></Button>
          })
        }
      </div>
    );
  }
}

export default Login;
