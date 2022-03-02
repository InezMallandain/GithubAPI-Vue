<template>
  <div class="container">
    <div class="row height d-flex justify-content-center align-items-center">
      <div class="col-md-8">
        <div class="search">
          <i class="fa fa-search"></i>
          <input
            v-model="searchText"
            type="text"
            class="form-control"
            placeholder="Search for a user"
          />
          <button class="btn btn-primary" v-on:click="onSearch()">
            Search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchText: ""
    };
  },
  methods: {
    onSearch() {
      this.$store.dispatch("fetchUserList", this.searchText);
    }
  }
};
</script>
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:weight@100;200;300;400;500;600;700;800&display=swap");

.height {
  height: 100%;
}

.search {
  margin-top: 50px;
  margin-bottom: 50px;
  position: relative;
  box-shadow: 0 0 40px rgba(51, 51, 51, 0.1);
}

.search input {
  height: 60px;
  text-indent: 25px;
  border: 2px solid #d6d4d4;
}

.search input:focus {
  box-shadow: none;
  border: 2px solid blue;
}

.search .fa-search {
  position: absolute;
  top: 20px;
  left: 16px;
}

.search button {
  position: absolute;
  top: 5px;
  right: 5px;
  height: 50px;
  width: 110px;
  background: blue;
}
</style>
