import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import filter from './filter/filter'

Vue.config.productionTip = false
Vue.prototype.$ajax = axios;


//全局过滤器
Object.keys(filter).forEach(key =>{
  Vue.filter(key,filter[key])
});
/**
 * axios拦截器
 */
 axios.interceptors.request.use(function (config){
  console.log("请求",config)
  return config;
},error=>{})// eslint-disable-line no-unused-vars
axios.interceptors.response.use(function (response){
  console.log("响应",response)
  return response;
},error=>{})// eslint-disable-line no-unused-vars

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
