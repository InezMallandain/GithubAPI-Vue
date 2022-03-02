<template>
  <RepoTableView :repos="repos"></RepoTableView>
</template>
<script>
import RepoTableView from "../components/repos-table.component.vue";
export default {
  components: {
    RepoTableView
  },
  computed: {
    repos() {
      return this.$store.getters.repos;
    }
  },
  mounted() {
    this.$store.dispatch("fetchRepos", this.$route.params.id);
  }
}
</script>
<style lang="scss">
  
</style>