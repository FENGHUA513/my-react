import React, { Component } from 'react';
import './index.less';
import axios from 'axios'

class Login extends Component {
  state = {
    list: []
  }
  componentWillMount(){
    axios.post('/api/list').then((res) => {

      console.log(res, 'res')
      this.setState({
        list: res.data.list
      })
      console.log(this.state.list, '0000')
    })
    axios.get('/api/user').then((res) => {
      console.log(res, 'res')
    })
  }
  render() {
    return (
      <div className="login">
        登录
        {
          this.state.list.map((item, key) => {
            return <p key={key}>{item}</p>
          })
        }
      </div>
    );
  }
}

export default Login;
