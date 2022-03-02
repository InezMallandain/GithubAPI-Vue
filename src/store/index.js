import { createStore } from 'vuex'
import userList from "./userList";
import userDetails from "./userDetails"
import follow from "./follow";
import repos from "./repos";
import gists from "./gist";
import {BasicAuthInterceptor} from '../_helpers/auth-interceptor'
BasicAuthInterceptor();
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    userList,
    userDetails,
    follow,
    repos,
    gists
  }
})
