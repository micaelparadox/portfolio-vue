<template>
    <header class="navbar">
        <nav class="flex-1 flex items-center justify-center py-4">
            <ul v-if="!isMobileMenuOpen" class="nav-links hidden lg:flex items-center justify-center space-x-8">
                <li>
                    <a class="nav-link" :class="{ 'text-white font': $route.path === '/' }" @click="scrollTo('inicio')">
                        <home class="inline mr-2" />Início
                    </a>
                </li>
                <li>
                    <a class="nav-link" :class="{ 'text-white font': $route.path === '/experience' }"
                        @click="scrollTo('experience')">
                        <compass class="inline mr-2" />Experiências
                    </a>
                </li>
                <li>
                    <a class="nav-link" :class="{ 'text-white font': $route.path === '/about' }" @click="scrollTo('about')">
                        <info class="inline mr-2" />Sobre
                    </a>
                </li>
                <li>
                    <a class="nav-link" :class="{ 'text-white font': $route.path === '/contact' }"
                        @click="scrollTo('contact')">
                        <mail class="inline mr-2" />Contato
                    </a>
                </li>
            </ul>
            <button class="block lg:hidden" @click="toggleMobileMenu">
                <font-awesome-icon icon="bars" />
            </button>
        </nav>
        <transition name="slide-fade">
            <ul v-if="isMobileMenuOpen" class="nav-links-mobile absolute top-0 right-0 w-full mt-16 bg-gray-800 text-white">
                <li @click="toggleMobileMenu">
                    <a class="nav-link" :class="{ 'text-white font': $route.path === '/' }" @click="scrollTo('inicio')">
                        <home class="inline mr-2" />Início
                    </a>
                </li>
                <li @click="toggleMobileMenu">
                    <a class="nav-link" :class="{ 'text-white font': $route.path === '/experience' }"
                        @click="scrollTo('experience')">
                        <compass class="inline mr-2" />Experiências
                    </a>
                </li>
                <li @click="toggleMobileMenu">
                    <a class="nav-link" :class="{ 'text-white font': $route.path === '/about' }" @click="scrollTo('about')">
                        <info class="inline mr-2" />Sobre
                    </a>
                </li>
                <li @click="toggleMobileMenu">
                    <a class="nav-link" :class="{ 'text-white font': $route.path === '/contact' }"
                        @click="scrollTo('contact')">
                        <mail class="inline mr-2" />Contato
                    </a>
                </li>
            </ul>
        </transition>


    </header>
</template>
<script>
import { defineComponent } from 'vue';
import VueScrollTo from 'vue-scrollto';
import { Home, Compass, Info, Mail } from 'lucide-vue-next';


export default defineComponent({
    name: 'AppNavbar',
    components: {
        Home,
        Compass,
        Info,
        Mail,
    },
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        toggleMobileMenu() {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        },
        scrollTo(targetId) {
            const target = document.querySelector(`#${targetId}`);
            if (target) {
                VueScrollTo.scrollTo(target);
            }
        },
    },
});
</script>


<style scoped>
.navbar {
    background-color: #212f3d;
    height: 64px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15);
    justify-content: space-between;
}

.nav-links {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    position: relative;
    padding: 0.25rem 0.5rem;
    overflow: hidden;
    cursor: pointer;
}

.nav-link::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    height: calc(100% + 20px);
    background-color: rgba(255, 255, 255, 0.05);
    transform: scale(0);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    z-index: -1;
    border-radius: 5px;
}

.nav-link:hover::after {
    transform: scale(1);
    box-shadow: 0 6px 10px -1px rgba(0, 0, 0, 0.3), 0 4px 6px -1px rgba(0, 0, 0, 0.15);
}

.nav-link:hover {
    color: #ffffff;
}


.nav-links-mobile {
    list-style-type: none;
    padding: 1rem;
}

.nav-links-mobile li {
    padding: 0.5rem 0;
}

.nav-links-mobile li a {
    text-decoration: none;
    color: #fff;
}

.slide-fade-enter-active {
    transition: all .3s ease;
}

.slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
}

button {
    background: none;
    border: none;
    cursor: pointer;
    color: #fff;
    padding: 0;
}

@media (min-width: 1024px) {
    .nav-links-mobile {
        display: none;
    }
}
</style>