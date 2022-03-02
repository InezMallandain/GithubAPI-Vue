import { createStore } from 'vuex'
import userList from "./userList";
import userDetails from "./userDetails"
import follow from "./follow";
import repos from "./repos";
import gists from "./gist";
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
