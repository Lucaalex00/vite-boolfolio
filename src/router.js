import { createWebHistory, createRouter } from "vue-router";
import AppHome from "./views/AppHome.vue";
import AppAbout from "./views/AppAbout.vue";
import AppProjects from "./views/AppProjects.vue";
import AppContacts from "./views/AppContacts.vue";
import Project from "./views/Project.vue";
import NotFound from "./views/NotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: AppHome },
    { path: "/about", name: "about", component: AppAbout },
    { path: "/projects", name: "projects", component: AppProjects },
    { path: "/contacts", name: "contacts", component: AppContacts },
    { path: "/projects/:id", name: "project", component: Project },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
