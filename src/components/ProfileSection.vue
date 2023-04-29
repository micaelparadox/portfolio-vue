<template>
    <div id="inicio" class="app-container bg-gray-900 text-white pb-20 border-b border-gray-700 profile-container">
        <img src="@/assets/credibilidade.jpeg" alt="Foto de perfil"
            class="w-48 h-48 rounded-full object-cover my-10 mx-auto" />
        <div class="text-center">
            <div class="mb-8">
                <h2 class="text-3xl font-bold mb-4">{{ pageTitle }}</h2>
            </div>
            <div class="mb-8">
                <p class="text-lg mb-8">
                    <span class="font-bold">Software Engineer</span>
                    ⚡️ Java | JavaScript | TypeScript | Angular | Node.js | NestJS | Python | Django | Spring Boot | PHP |
                    Laravel | Docker | Kubernetes | Expertise em Backend & Soluções Robustas 🎯
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        pageTitle() {
            return 'Micael Santana'
        }
    },
    mounted() {
        document.title = this.pageTitle
    }
}
</script>

<style scoped>
/* Aumentando a margem superior na classe .profile-container */
.profile-container {
    background-color: #1F2937; /* Não modificar */
    padding-top: 80px;
}


.rounded-full {
    border-radius: 9999px;
}

.text-center {
    text-align: center;
}

.text-white {
    color: #fff;
}

/* Estilos padrão */
.text-lg {
    font-size: 1.125rem;
}

.text-3xl {
    font-size: 2.25rem;
}

.my-10 {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
}

/* Estilos para tablets (largura máxima de 767px) */
@media (max-width: 767px) {
    .text-lg {
        font-size: 1rem;
    }

    .text-3xl {
        font-size: 2rem;
    }

    .my-10 {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
}

/* Estilos para desktops (largura mínima de 768px) */
@media (min-width: 768px) {
    .text-lg {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    .text-3xl {
        font-size: 2.5rem;
    }

    .my-10 {
        margin-top: 3rem;
        margin-bottom: 3rem;
    }
}

.mb-8 {
    margin-bottom: 2rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.mx-auto {
    margin-left: auto;
    margin-right: auto;
}

.max-w-7xl {
    max-width: 1280px;
}
</style>
