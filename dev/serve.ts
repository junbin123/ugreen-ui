import Vue, { VNode } from 'vue';
import Dev from './serve.vue';
// 使用本地
// import UgreenUI from '@/entry.esm';
// 使用npm
import UgreenUI from 'ugreen-ui'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(UgreenUI);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev),
}).$mount('#app');
