import axios from "axios";

const ReposStore = {
  state: () => ({
    repos: [],
  }),
  mutations: {
    SET_REPOS(state, payload) {
     state.repos = [...payload];
    },
  },
  actions: {
    // fetchUserList
    async fetchRepos({ commit }, payload) {
      if(!payload)return;
      await axios
        .get(`https://api.github.com/users/${payload}/repos?page=1&per_page=10`)
        .then((res) => {
          // check if response has items property
          if (res.data) {
            commit("SET_REPOS", res.data);
          }
        });

    },
  },
  getters: {
    repos({ repos }) {
      return repos;
    },
  },
};

export default ReposStore;
