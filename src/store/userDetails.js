import axios from "axios";

const userDetailsStore = {
  state: () => ({
    user: {},
  }),
  mutations: {
    SET_USER(state, payload) {
     state.user = {...payload};
    },
  },
  actions: {
    // fetchUserList
    async fetchUserDetails({ commit }, payload) {
      if(!payload)return;
      await axios
        .get(`https://api.github.com/users/${payload}`)
        .then((res) => {
          // check if response has items property
          if (res.data) {
            commit("SET_USER", res.data);
          }
        });

    },
  },
  getters: {
    user({ user }) {
      return user;
    },
  },
};

export default userDetailsStore;
