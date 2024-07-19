import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import AddContact from './views/AddContact.vue';
import EditContact from './views/EditContact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/add', component: AddContact },
  { path: '/edit/:id', component: EditContact, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
