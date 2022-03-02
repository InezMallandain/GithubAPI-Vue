<template>
  <div>
    <SearchBar></SearchBar>
    <TableView :users="users"></TableView>
  </div>
</template>
<script>
import SearchBar from '../components/search-bar.component.vue';
import TableView from '../components/table-view.component.vue'

export default {
    components: {
      SearchBar,
      TableView
    },
    computed: {
      users(){
        return this.$store.getters.users;
      }
    },
    mounted(){
      console.log('HomeView mounted');
      this.$store.dispatch('fetchUserList');
    }
}
</script>
<style lang="scss">
  
</style>