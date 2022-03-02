import { createStore } from 'vuex'
import userList from "./userList";
import userDetails from "./userDetails"
import follow from "./follow";
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
    follow
  }
})
