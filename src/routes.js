import VueRouter from 'vue-router'
import InputForm from './components/InputForm.vue'

let routes = [
    {
        path: '/input',
        component: InputForm
    }
]

export default new VueRouter({
    mode: 'history',
    base: __dirname,
    routes
})