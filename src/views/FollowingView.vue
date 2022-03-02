<template>
  <TableView :users="following"/>
</template>
<script>
import TableView from "../components/table-view.component.vue";
export default {
  components: {
    TableView,
  },
  computed: {
    following() {
      return this.$store.getters.following;
    },
  },
  mounted() {
    this.$store.dispatch("fetchFollowing", this.$route.params.id);
  },
}
</script>
<style lang="">
  
</style>