
import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import PerfectScrollbar from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import { VueQueryPlugin } from '@tanstack/vue-query'
import Maska from 'maska';
const app = createApp(App);
// en el main.ts
// app.use(VueQueryPlugin)

VueQueryPlugin.install(app,{
    queryClientConfig:{
        defaultOptions:{
            queries: {
                cacheTime: 1000* 120, // 2 minutos
                refetchOnReconnect: 'always'
            }
        }
    }
})

app.use(router);
app.use(PerfectScrollbar);
app.use(VueTablerIcons);
app.use(Maska);
app.use(VueApexCharts);
app.use(vuetify).mount('#app');
