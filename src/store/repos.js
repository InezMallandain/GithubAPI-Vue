import axios from "axios";

const ReposStore = {
  state: () => ({
    repos: [],
    repo: {},
    languages:[]
  }),
  mutations: {
    SET_REPOS(state, payload) {
     state.repos = [...payload];
    },
    SET_REPO_DETAILS(state, payload) {
     state.repo = {...payload};
    },
    SET_REPO_LANGUAGE(state,payload){
      let languages = [];
      Object.entries(payload).forEach(([key, value]) => {
      languages.push({
          name: key,
          value: value,
        });
      });
      state.languages = [...languages];
    }
  },
  actions: {
    // fetchRepos
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
    // Fetch Repo Details
    async fetchRepoDetails({ commit }, payload) {
      if(!payload)return;
      await axios
        .get(`https://api.github.com/repos/${payload.login}/${payload.repoName}`)
        .then((res) => {
          // check if response has items property
          if (res.data) {
            commit("SET_REPO_DETAILS", res.data);
          }
        });
    },
    async getStack({ commit }, payload) {
      if(!payload)return;
      await axios
        .get(`https://api.github.com/repos/${payload.login}/${payload.repoName}/languages`)
        .then((res) => {
          // check if response has items property
          if (res.data) {
            commit("SET_REPO_LANGUAGE", res.data);
          }
        });
    },
  },
  getters: {
    repos({ repos }) {
      return repos;
    },
    repo({ repo }) {
      return repo;
    },
    languages({ languages }) {
      return languages;
    },
  },
};

export default ReposStore;
