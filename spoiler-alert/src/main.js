// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(require('vue-moment'))


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//added for charts
// Vue.use(VueCharts);
//   const app = new Vue({
//       el: '#app',
//       type: 'pie',
//       data: {
//         myBoolean: 'false',
//         label : 'TestDataLabel',
//         width : '300px',
//         labels : ['Meat, Dairy, Produce, Grain'],
//         data : [5,4,3,2],
//         //items.filter(type).length
//         //indexes on labels and data will be the same
//         backgroundColor: ["red", "blue", "green", "yellow"],

//       }
//   });
