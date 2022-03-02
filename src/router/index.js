import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'user-list',
    component: () => import('../views/UserListView.vue')
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/UserDetailsView.vue')
  },
  {
    path: '/users/:id/followers',
    name: 'followers',
    component: () => import('../views/FollowersView.vue')
  },
  {
    path: '/users/:id/following',
    name: 'following',
    component: () => import('../views/FollowingView.vue')
  },
  {
    path: '/users/:id/repos',
    name: 'repos',
    component: () => import('../views/ReposView.vue')
  },
  {
    path: '/users/:id/gists',
    name: 'gists',
    component: () => import('../views/GistView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
