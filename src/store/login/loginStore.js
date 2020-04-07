import { observable, computed, action, autorun } from 'mobx'
import axios from 'axios'

class loginStore {
  @observable list = [1, 3, 5, 7, 9]

  /*获取数据列表*/
  @action getList = () => {
    axios.post('/api/list').then((res) => {
      if (res.data.list) {
        this.list = res.data.list
      }
    })
  }
}

export default new loginStore()
