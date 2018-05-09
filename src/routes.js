import VueRouter from 'vue-router'


let routes = [
    {
        path: '/',
        component: require('./components/InputForm')
    }
]

export default new VueRouter({
    routes
})