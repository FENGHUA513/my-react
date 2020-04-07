import React, { Component, useState, useEffect } from 'react'
import './index.less'
import axios from 'axios'
import toast from 'libs/toast'
function Example() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    //componentDidMount and componentDidUpdate:
    document.title = `${count} times`
    return () => {
      // componentWillUnmount 组件卸载
      document.title = ''
    }
  }, [count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
class Detail extends Component {
  state = {
    list: []
  }
  componentWillMount() {
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
        {this.state.list.map((item, key) => {
          return <p key={key}>{item}</p>
        })}
        <Example></Example>
      </div>
    )
  }
}

export default Detail
