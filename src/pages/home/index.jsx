import React, { Component } from 'react';
import './index.less';
import axios from 'axios'

class Home extends Component {
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
      <div className="home">
        首页
        {
          this.state.list.map((item, key) => {
            return <p key={key}>{item}</p>
          })
        }
      </div>
    );
  }
}

export default Home;
