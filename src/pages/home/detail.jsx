import React, { Component } from 'react';
import './index.less';
import axios from 'axios'
import toast from 'libs/toast'
class Detail extends Component {
  state = {
    list: []
  }
  componentWillMount(){
    toast('详情页')
    console.log(this.props.location.query, 'jljljlkjlk')
    axios.post('/api/list').then((res) => {
      this.setState({
        list: res.data.list
      })
    })
    axios.get('/api/user').then((res) => {
      console.log(res, 'res')
    })
  }
  render() {
    return (
      <div className="home">
        详情页
        {
          this.state.list.map((item, key) => {
            return <p key={key}>{item}</p>
          })
        }
      </div>
    );
  }
}

export default Detail;
