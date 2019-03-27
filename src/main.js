import Vue from 'vue';
import App from './App';
import { hooks } from 'vue-hooks';

Vue.use(hooks);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
