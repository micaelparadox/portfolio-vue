import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/HomeSection.vue';
import ProfileSection from './components/ProfileSection.vue';
import ExperienceSection from './components/ExperienceSection.vue';
import WorkSlider from './components/WorkSlider.vue';
import AboutSection from './components/AboutSection.vue';
import ContactSection from './components/ContactSection.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/profile',
        name: 'ProfileSection',
        component: ProfileSection
    },
    {
        path: '/experience',
        name: 'ExperienceSection',
        component: ExperienceSection
    },
    {
        path: '/work',
        name: 'WorkSlider',
        component: WorkSlider
    },
    {
        path: '/about',
        name: 'AboutSection',
        component: AboutSection
    },
    {
        path: '/contact',
        name: 'ContactSection',
        component: ContactSection
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
