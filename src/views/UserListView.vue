<template>
  <div>
    <TableView :users="users"></TableView>
  </div>
</template>
<script>
import TableView from '../components/table-view.component.vue'

export default {
    components: {
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