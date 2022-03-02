<template>
  <GistTableView :gists="gists"></GistTableView>
</template>
<script>
import GistTableView from "../components/gist-table.component.vue";
export default {
  components: {
    GistTableView
  },
  computed:{
    gists(){
      return this.$store.getters.gists;
    }
  },
  mounted(){
    this.$store.dispatch("fetchGists", this.$route.params.id);
  }
}
</script>
<style lang="scss">
  
</style>