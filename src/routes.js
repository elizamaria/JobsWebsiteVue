import VueRouter from 'vue-router'
import InputForm from './components/InputForm.vue'
import Departments from './modules/departments/Departments.vue'
import Home from './modules/home/Home.vue'
import Jobs from './modules/jobs/Jobs.vue'
import Internships from './modules/internships/Internships.vue'

let routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/departments',
        component: Departments
    },
    {
        path: '/jobs',
        component: Jobs
    },
    {
        path: '/programs',
        component: Internships
    }
]

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes,
    linkActiveClass: 'is-active'
})