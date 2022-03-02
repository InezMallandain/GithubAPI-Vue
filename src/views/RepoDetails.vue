<template>
<div>
  <div class="container" v-if="repo">
    <div class="row">
      <div class="col-xs-12">
        <h1>{{ repo?.name }}</h1>
        <h3>{{ repo?.owner?.login }}</h3>

        <div class="d-flex justify-space-between">
          <h5>Watchers: {{ repo?.watchers }}</h5>
          | |
          <h5>Forks: {{ repo?.forks }}</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between">
          <h5>Mainly: {{ repo.language }}</h5>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <!-- loop through language array -->
        <div v-for="(language, index) of languages" :key="index">
          <div class="d-flex justify-content-between">
            <h5 class="ml-5">{{ language?.name }}</h5>
            <div class="progress w-75">
              <div
                class="progress-bar"
                role="progressbar"
                :style="{ width: (language?.value / total) * 100 + '%' }"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {{ roundNumber((language?.value / total) * 100) + "%" }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
  <div class="d-flex justify-content-center align-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only"></span>
    </div>
  </div>
</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      total:0,
    }
  },
  computed:{
    repo() {
      return this.$store.getters.repo;
    },
    languages() {
      return this.$store.getters.languages;
    }
  },
  async mounted(){
    await this.$store.dispatch("fetchRepoDetails", {login:  this.$route.params.id, repoName: this.$route.params.repoName});
    await this.$store.dispatch("getStack", {login:  this.$route.params.id, repoName: this.$route.params.repoName});
    this.getTotal();
  },
  methods: {
    getTotal() {
      this.languages.forEach((language) => {
        this.total += language.value;
      });
    },
    roundNumber(number) {
      return Math.round(number);
    },
  },
};
</script>
<style lang="scss"></style>
