import Home from './components/home/Home.vue';
import Registration from './components/registration/Registration.vue';

export const routes = [
    {
        path: "",
        component: Home,
        title: "Home"
    },
    {
        path: "/create",
        component: Registration,
        title: "Cadastro"
    }
];