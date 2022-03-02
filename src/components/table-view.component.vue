<template>
  <div>
    <table class="table" v-if="users.length > 0">
      <thead>
        <tr>
          <th scope="col">index</th>
          <th scope="col">Username</th>
          <th scope="col">User Type</th>
          <th scope="col">Profile Image</th>
          <th scope="col">
            <!--  Actions -->
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) of users" :key="index">
          <td scope="row">{{ index + 1 }}</td>
          <td>{{ user.login }}</td>
          <td>{{ user.type }}</td>
          <td>
            <img class="profile" :src="user.avatar_url" :alt="user.login" />
          </td>
          <router-link :to="'/user/' + user.login">
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </td>
          </router-link>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: pageIndex < 2 }">
          <span class="page-link" v-on:click="onPageChange(pageIndex - 1)"
            >Previous</span
          >
        </li>
        <li class="page-item">
          <span class="page-link" v-on:click="onPageChange(pageIndex)">{{
            pageIndex
          }}</span>
        </li>
        <li class="page-item">
          <span class="page-link" v-on:click="onPageChange(pageIndex + 1)">{{
            pageIndex + 1
          }}</span>
        </li>
        <li class="page-item">
          <span class="page-link" v-on:click="onPageChange(pageIndex + 2)">{{
            pageIndex + 2
          }}</span>
        </li>
        <li class="page-item">
          <span class="page-link" v-on:click="onPageChange(pageIndex + 1)"
            >Next</span
          >
        </li>
      </ul>
    </nav>
    <div
      v-if="!users"
      class="d-flex justify-content-center align-content-center"
    >
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
      default: () => [],
    },
    pageIndex: {
      type: Number,
      default: 1,
    }
  },
  data: () => {
    return {};
  },
  methods: {
    onPageChange(pageIndex) {
      this.$emit("page-change", pageIndex);
    },
  }
};
</script>
<style scoped lang="scss">
.profile {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
