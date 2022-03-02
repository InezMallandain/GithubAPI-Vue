import axios from "axios";

const userListStore = {
  state: () => ({
    users: [],
  }),
  mutations: {
    SET_USER_LIST(state, payload) {
      state.users = payload;
    },
  },
  actions: {
    // fetchUserList
    async fetchUserList({ commit }) {
      await axios
        .get("https://api.github.com/search/users?q=test&page=1&per_page=10")
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
  },
};

export default userListStore;
