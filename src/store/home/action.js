import * as home from "./action-type";
import axios from "axios";

// 保存数据列表
export const getData = () => {
  // 返回函数，异步dispatch
  return (dispatch) => {
    axios.post("/api/list").then((res) => {
      if (res.data.list) {
        dispatch({
          type: home.GETDATA,
          list: res.data.list,
        });
      }
    });
  };
};

export const addUser = (name) => {
  return {
    type: home.SAVEUSER,
    name,
  };
};
