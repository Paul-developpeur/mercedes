// data
const products = [
    { description: 'Mercedes AMG C63', img: '../assets/img/15C792_092.webp'},
    { description: 'Mercedes-Benz S', img: '../assets/img/Mercedes-Benz-S-Class_Coupe-2018-1600-03.jpg' },
    { description: 'Mercedes AMG E43', img: '../assets/img/2017-Mercedes-AMG-E43-review-17.jpg' }
]

const Home = { 
    template: '#home', 
    name: 'Home',
    data: () => {
        return{
            products
        }
    } 
}

const Contact = { template: '#contact', name: 'Contact' }

const router = new VueRouter({
    routes: [
        { path:'/', component: Home, name:'Home' },
        { path:'/contact', component: Contact, name:'Contact' }
    ]
})

const vue = new Vue({
    router
}).$mount('#app')