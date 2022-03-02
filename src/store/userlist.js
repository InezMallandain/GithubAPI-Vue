import axios from "axios";
import {BasicAuthInterceptor} from '../_helpers/auth-interceptor'
BasicAuthInterceptor();
const userListStore = {
  state: () => ({
    users: [],
    pageIndex: 1,
  }),
  mutations: {
    SET_USER_LIST(state, payload) {
      state.users = [...payload];
    },
    SET_PAGE_INDEX(state,payload){
      state.pageIndex = payload;
    }
  },
  actions: {
    // fetchUserList
    async fetchUserList({ commit }, payload = {login: "vue", page: 1}) {
      commit('SET_PAGE_INDEX',payload.page);
      await axios
        .get(`https://api.github.com/search/users?q=${payload.login}&page=${payload.page}&per_page=10`)
        .then((res) => {
          // check if response has items property
          if (res.data.items) {
            commit("SET_USER_LIST", res.data.items);
          }
        });
    },
  },
  getters: {
    users({ users }) {
      return users;
    },
    pageIndex({pageIndex}){
      return pageIndex;
    }
  },
};

export default userListStore;
