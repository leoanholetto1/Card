import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import Visualizar from './components/Visualizar.vue'
import Cadastrar from './components/Cadastrar.vue'
import Alterar from './components/Alterar.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/Visualizar', component: Visualizar },
        { path: '/Cadastrar', component: Cadastrar },
        { path: '/Alterar', component: Alterar }
    ]
});

const app = createApp(App)
app.use(router);
app.mount('#app')