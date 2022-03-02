<template>
  <table class="table" v-if="gists">
    <thead>
      <tr>
        <th scope="col">Index</th>
        <th scope="col">Name</th>
        <!-- <th scope="col">Stack</th> -->
        <th scope="col">Owner</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(gist, index) of gists" :key="index">
        <td scope="row">{{ index + 1 }}</td>
        <td>{{ getGistFileName(gist) }}</td>
        <!-- <td>
        <div class="stacked-bar-graph">
          <span style="width:20%" class="bar-1">20%</span>
          <span style="width:15%" class="bar-2">15%</span>
          <span style="width:30%" class="bar-3">30%</span>
        </div>
      </td> -->
        <td>
          <routerLink :to="'/users/' + gist.owner.login">
            <img
              :src="gist.owner.avatar_url"
              :alt="gist.owner.login"
              class="profile"
            />
          </routerLink>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else>
    <div class="d-flex justify-content-center align-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    gists: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    getGistFileName(gist) {
      return Object.keys(gist.files)[0];
    },
  },
};
</script>
<style lang="scss">
.profile {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
