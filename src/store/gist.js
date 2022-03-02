import axios from "axios";

const GistsStore = {
  state: () => ({
    gists: [],
  }),
  mutations: {
    SET_GISTS(state, payload) {
     state.gists = [...payload];
    },
  },
  actions: {
    // fetchUserList
    async fetchGists({ commit }, payload) {
      if(!payload)return;
      await axios
        .get(`https://api.github.com/users/${payload}/gists`)
        .then((res) => {
          // check if response has items property
          if (res.data) {
            commit("SET_GISTS", res.data);
          }
        });

    },
  },
  getters: {
    gists({ gists }) {
      return gists;
    },
  },
};

export default GistsStore;
