import Vue from "vue";
import Router from "vue-router";
import navConf from "../nav.config.json";

Vue.use(Router);

let routes = [];

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header]);
});

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items);
    } else {
      if (route.type === "pages") {
        route.component = () => import(`../pages/${route.name}.vue`);
        return;
      }
      route.component = () => import(`../md/${route.name}.md`);
    }
  });
};
addComponent(routes);

export default new Router({
  routes: routes,
});
