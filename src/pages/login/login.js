import React from "react";
import ReactDOM from "react-dom";
import Login from "./index";
import "@/assets/style/toast.less";
import loginStore from "@/store/login/loginStore";
import registerServiceWorker from "@/registerServiceWorker";
import { Provider } from "mobx-react";
const stores = {
  loginStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <Login />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
