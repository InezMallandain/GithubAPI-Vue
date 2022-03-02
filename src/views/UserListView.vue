<template>
  <div>
    <SearchBar @search="onSearch"></SearchBar>
    <TableView
      :users="users"
      :pageIndex="pageIndex"
      @page-change="changePage"
    ></TableView>
  </div>
</template>
<script>
import SearchBar from "../components/search-bar.component.vue";
import TableView from "../components/table-view.component.vue";

export default {
  components: {
    SearchBar,
    TableView,
  },
  data() {
    return {
      searchText: "vue",
    };
  },
  computed: {
    users() {
      return this.$store.getters.users;
    },
    pageIndex() {
      return this.$store.getters.pageIndex;
    },
  },
  mounted() {
    this.$store.dispatch("fetchUserList");
  },
  methods: {
    onSearch(searchText) {
      this.searchText = searchText;
      this.$store.dispatch("fetchUserList", { login: searchText });
    },
    changePage(pageIndex) {
      this.$store.dispatch("fetchUserList", { login: this.searchText, page: pageIndex });
    },
  },
};
</script>
<style lang="scss"></style>
