<template>
    <div id="experience" class="bg-gray-100 dark:bg-gray-800 py-16">
        <h3 class="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">Experiências &#x1F44D;</h3>

        <div class="app-container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="experience in experiences" :key="experience.id"
                class="experience bg-gray-900 border border-gray-700 rounded-lg p-6 relative cursor-pointer transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
                <div class="company-info flex flex-col md:flex-row items-center mb-4">
                    <img :src="experience.logo" :alt="experience.company + ' Logo'"
                        class="company-logo w-12 h-12 object-cover mb-2 md:mb-0 md:mr-4" />
                    <h5 class="text-lg font-bold text-center md:text-left">{{ experience.company }}</h5>
                </div>
                <p class="position-title font-bold text-xl mb-2">{{ experience.position }}</p>
                <p class="duration text-gray-400 text-sm mb-2">{{ experience.duration }}</p>
                <p class="location text-gray-400 text-sm mb-2">{{ experience.location }}</p>
                <p class="description text-sm">{{ experience.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExperienceSection",
    data() {
        return {
            experiences: [

                {
                    id: 1,
                    company: "T-Systems do Brasil",
                    logo: require("@/assets/tysystem.jpg"),
                    position: "Senior Software Engineer",
                    duration: "Out 2022 - Presente · 7 meses",
                    location: "Alemanha · Remoto",
                    description:
                        "Integro uma equipe global que presta serviços à Mercedes-Benz, sediada na Alemanha. No momento, dedico-me à transição de um sistema legado, pertencente ao setor automobilístico, para uma arquitetura baseada em microsserviços. Tal arquitetura emprega tecnologias como Java com Spring, Apache Spark, Python, Apache Airflow e o banco de dados Cassandra.",
                },
                {
                    id: 2,
                    company: "QAT Global | Custom Software Development",
                    logo: require("@/assets/qat.jpg"),
                    position: "Software Developer",
                    duration: "Nov 2017 - Set 2022 · 4 anos 11 meses",
                    location: "Estados Unidos · Remoto",
                    description:
                        "Atuei em um projeto off-shore em colaboração com a matriz QAT, sediada nos Estados Unidos, onde desenvolvi projetos em Java, tendo como cliente principal a empresa Sensus. O trabalho envolveu o desenvolvimento de sistemas de gerenciamento de recursos naturais, como energia elétrica, água e gás, e a implementação de um gateway para possibilitar transações e notificações entre os dispositivos de gestão e a aplicação web.",
                },
                {
                    id: 3,
                    company: "Grupo Dataclick",
                    logo: require("@/assets/dataclick.jpg"),
                    position: "Software Developer",
                    duration: "Out 2015 - Nov 2017 · 2 anos 2 meses",
                    location: "Itajaí, Santa Catarina, Brazil · On-site",
                    description: "Enquanto Desenvolvedor, dediquei-me a oferecer soluções para o mercado esportivo, colaborando para que a empresa alcançasse seus objetivos. Tive a oportunidade de atuar em todos os módulos de software, abrangendo desde aspectos gerenciais até financeiros, e realizei integrações com APIs de terceiros, instituições bancárias e hardware externo. As tecnologias empregadas durante minha atuação incluíram PHP, Laravel, Slim, Python, JavaScript, Angular, React, Vue, WebSocket e Docker. Esta ampla gama de ferramentas possibilitou aprimorar minhas habilidades e contribuir de forma significativa para o sucesso da empresa."
                }
            ],
        };
    },
};
</script>
<style scoped>
/* Experience section */
.experience {
    transition-property: box-shadow, transform;
    transition-duration: 300ms;
    transition-timing-function: ease-out;
    background-color: #F5F5F5;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
}

.experience:hover {
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
}

.company-logo {
    width: 50px;
    height: 50px;
    object-fit: contain;
}

.position-title {
    margin-bottom: 5px;
    font-weight: bold;
    color: #2C2C2C;
}

.duration,
.location {
    margin-bottom: 5px;
    color: #666;
}

@media (min-width: 640px) {
    .experiences {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        justify-items: center;
        margin-top: 40px;
    }
}

@media (min-width: 768px) {
    .experiences {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .experiences {
        grid-template-columns: repeat(3, 1fr);
        max-width: 1024px;
        margin-left: auto;
        margin-right: auto;
    }
}

@media (min-width: 1200px) {
    .experiences {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
