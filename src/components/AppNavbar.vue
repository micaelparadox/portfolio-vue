<template>
    <header class="navbar">
        <div class="app-container flex items-center justify-between py-4">
            <nav class="flex items-center">
                <ul v-if="!isMobileMenuOpen" class="nav-links hidden lg:flex items-center space-x-8">
                    <li>
                        <a class="nav-link" :class="{ 'text-white font': $route.path === '/' }"
                            @click="scrollTo('inicio')">Início</a>
                    </li>
                    <li>
                        <a class="nav-link" :class="{ 'text-white font': $route.path === '/experience' }"
                            @click="scrollTo('experience')">Experiências</a>
                    </li>
                    <li>
                        <a class="nav-link" :class="{ 'text-white font': $route.path === '/about' }"
                            @click="scrollTo('about')">Sobre</a>
                    </li>
                    <li>
                        <a class="nav-link" :class="{ 'text-white font': $route.path === '/contact' }"
                            @click="scrollTo('contact')">Contato</a>
                    </li>
                </ul>
                <button class="block lg:hidden" @click="toggleMobileMenu">
                    <font-awesome-icon icon="bars" />
                </button>
            </nav>
            <transition name="slide-fade">
                <ul v-if="isMobileMenuOpen"
                    class="nav-links-mobile absolute top-0 right-0 w-full mt-16 bg-gray-800 text-white">
                    <li @click="toggleMobileMenu">
                        <a class="nav-link" :class="{ 'text-white font': $route.path === '/' }"
                            @click="scrollTo('inicio')">Início</a>
                    </li>
                    <li @click="toggleMobileMenu">
                        <a class="nav-link" :class="{ 'text-white font': $route.path === '/experience' }"
                            @click="scrollTo('experience')">Experiências</a>
                    </li>
                    <li @click="toggleMobileMenu">
                        <a class="nav-link" :class="{ 'text-white font': $route.path === '/about' }"
                            @click="scrollTo('about')">Sobre</a>
                    </li>
                    <li @click="toggleMobileMenu">
                        <a class="nav-link" :class="{ 'text-white font': $route.path === '/contact' }"
                            @click="scrollTo('contact')">Contato</a>
                    </li>
                </ul>
            </transition>
        </div>
    </header>
</template>
  
<script>
import { defineComponent } from 'vue';
import VueScrollTo from 'vue-scrollto';

export default defineComponent({
    name: 'AppNavbar',
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
}

.app-container {
    max-width: 1280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 2rem;
    /* aumentei o padding para 2rem */
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
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.1);
    transform: scale(0);
    transition: transform 0.3s ease-in-out;
    z-index: -1;
    border-radius: 5px;
}

.nav-link:hover::after {
    transform: scale(1);
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
