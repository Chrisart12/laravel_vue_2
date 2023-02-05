require('./bootstrap');

import { createApp } from 'vue';
import AppComponent from './components/AppComponent.vue'
import router from './router'

createApp(AppComponent).use(router).mount('#app')

// let app = createApp({})
// app.use(router)
// app.component('app-component', require('./components/AppComponent.vue').default);
// app.mount("#app")
// // window.Vue = require('vue');

// import Vue from 'vue'


// Vue.component('test-component', require('./components/TestComponent.vue').default);

// Vue.component('test-component', require('./components/TestComponent.vue').default);

// Vue.component('example-component', require('./components/ExampleComponent.vue'));


// const app = new Vue({
//     el: '#app',
// });
