import VueRouter from 'vue-router'
import Vue from 'vue'
import GlobalConfig from '../components/GlobalConfig.vue'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/globalConfig",
            name: "globalConfig",
            component: GlobalConfig
        }
    ]

})

export default router;