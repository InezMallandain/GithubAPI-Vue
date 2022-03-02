<template>
 <table class="table" v-if="repos">
  <thead>
    <tr>
      <th scope="col">Index</th>
      <th scope="col">Name</th>
      <!-- <th scope="col">Stack</th> -->
      <th scope="col">Owner</th>
      <th scope="col">Watchers</th>
      <th scope="col">Forks</th>
      <th scope="col">
        <!--  Actions -->
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(repo, index) of repos" :key="index">
      <td scope="row">{{ index+1 }}</td>
      <td>{{ repo.name }}</td>
      <!-- <td>
        <div class="stacked-bar-graph">
          <span style="width:20%" class="bar-1">20%</span>
          <span style="width:15%" class="bar-2">15%</span>
          <span style="width:30%" class="bar-3">30%</span>
        </div>
      </td> -->
      <td>
        <router-link  :to="'/users/' + repo.owner.login">
        <img :src="repo.owner.avatar_url" :alt="repo.owner.login" class="profile">
      </router-link>
      </td>
      <td>
        {{ repo.watchers }}
      </td>
      <td>
          {{ repo.forks }}
        </td>
      <routerLink :to="'/repo/' + repo.owner.login + '/' + repo.name"
      ><td>
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
    </routerLink>
    </tr>
  </tbody>
</table>
<!-- <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item" [class.disabled]="pageIndex < 2" >
      <span class="page-link" (click)="onPageChange(pageIndex - 1)" 
        >Previous</span
      >
    </li>
    <li class="page-item">
      <span class="page-link" (click)="onPageChange(pageIndex)">{{ pageIndex }}</span>
    </li>
    <li class="page-item">
      <span class="page-link" (click)="onPageChange(pageIndex + 1)">{{ pageIndex + 1 }}</span>
    </li>
    <li class="page-item">
      <span class="page-link" (click)="onPageChange(pageIndex + 2)">{{ pageIndex + 2 }}</span>
    </li>
    <li class="page-item">
      <span class="page-link" (click)="onPageChange(pageIndex + 1)">Next</span>
    </li>
  </ul>
</nav> -->
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
    repos: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
<style scoped lang="scss">
  .profile{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
</style>