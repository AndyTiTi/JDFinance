import Vue from "vue"
import Router from "vue-router"
import home from "../home/index.vue"
import "../../css/reset.scss"
Vue.use(Router)
export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: home,
        },
    ],
})
