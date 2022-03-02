<template>
  <div class="container align-items-center justify-content-center" v-if="user">
    <div class="row">
      <div class="d-flex col-xs-12 justify-content-center">
        <img class="profile" :src="user.avatar_url" :alt="user.login" />
      </div>
      <div class="row">
        <div
          class="d-flex col-xs-12 col-md-6 mx-auto mt-5 justify-content-center flex-column"
        >
          <h1>{{ user.login }}</h1>
          <h3>{{ user.name }}</h3>
          <hr />
          <p>{{ user.bio }}</p>
          <router-link :to="{name:'followers'}"
            >Followers: {{ user.followers }}</router-link
          >
          <router-link :to="{name:'following'}"
            >Following: {{ user.following }}</router-link
          >
          <router-link :to="['repos']"
            >Repos:{{ user.public_repos }}</router-link
          >
          <router-link :to="['gists']"
            >Gists:{{ user.public_gists }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  mounted() {
    const id = this.$route.params.id;
    console.log(id);
    this.$store.dispatch("fetchUserDetails", id);
  },
};
</script>
<style lang="scss">
.profile {
  height: 150px;
  width: auto;
  border-radius: 500px;
  margin-top: 5rem;
}
</style>
