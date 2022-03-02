import axios from "axios";

const followersStore = {
  state: () => ({
    followers: [],
    following: [],
  }),
  mutations: {
    SET_FOLLOWERS(state, payload) {
     state.followers = [...payload];
    },
    SET_FOLLOWING(state, payload) {
     state.following = [...payload];
    },
  },
  actions: {
    // fetchUserList
    async fetchFollowers({ commit }, payload) {
      if(!payload)return;
      await axios
        .get(`https://api.github.com/users/${payload}/followers`)
        .then((res) => {
          // check if response has data
          if (res.data) {
            commit("SET_FOLLOWERS", res.data);
          }
        });

    },
    async fetchFollowing({commit}, payload) {
      if(!payload)return;
      await axios
        .get(`https://api.github.com/users/${payload}/following`)
        .then((res) => {
          // check if response has data
          if (res.data) {
            commit("SET_FOLLOWING", res.data);
          }
        });
    }
  },
  getters: {
    followers({ followers }) {
      return followers;
    },
    following({ following }) {
      return following;
    },
  },
};

export default followersStore;
