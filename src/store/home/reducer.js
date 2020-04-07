import * as home from "./action-type";

let defaultState = [1, 3, 5, 7, 9];
// 数据列表
export const list = (state = defaultState, action = {}) => {
  switch (action.type) {
    case home.GETDATA:
      return Object.assign([], state, action.list);
    default:
      return state;
  }
};
let defaultUser = {
  name: "",
};
export const user = (state = defaultUser, action = {}) => {
  switch (action.type) {
    case home.SAVEUSER:
      return Object.assign({}, state, action.name);
    default:
      return state;
  }
};
