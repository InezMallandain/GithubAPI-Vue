<template>
  <TableView :users="followers" />
</template>
<script>
import TableView from "../components/table-view.component.vue";
export default {
  components: {
    TableView,
  },
  computed: {
    followers() {
      return this.$store.getters.followers;
    },
  },
  mounted() {
    this.$store.dispatch("fetchFollowers", this.$route.params.id);
  },
};
</script>
<style scoped lang="scss"></style>
