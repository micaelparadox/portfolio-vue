<template>
    <div class="work-slider">
        <h3 class="work-title text-3xl font-bold mb-8 text-center">Trabalhos como Freelancer 🚀</h3>
        <swiper :slides-per-view="3" :space-between="30" :pagination="{ clickable: true }" :navigation="true"
            :autoplay="{ delay: 3000 }" ref="mySwiper">
            <swiper-slide v-for="(work, index) in works" :key="index">
                <img :src="work.image" :alt="work.title" class="slide-image" />
                <h4 class="text-lg font-semibold mt-4">{{ work.title }}</h4>
                <p class="text-gray-400 text-sm mt-2">{{ work.description }}</p>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            works: [
                {
                    title: 'Desenvolvimento de Sites e Ecommerce',
                    image: require('@/assets/jobs/ecommerce.png'),
                    description: 'Desenvolvimento de sites e lojas virtuais customizadas, integradas com sistemas de pagamento, gestão de estoque, logística e outras funcionalidades personalizadas de acordo com as necessidades do cliente.'
                },
                {
                    title: 'Paineis de Administração',
                    image: require('@/assets/jobs/AdminLogin.png'),
                    description: 'Desenvolvimento de painéis administrativos personalizados para gestão de conteúdo, usuários, permissões, relatórios, entre outros recursos sob medida.'
                },
                {
                    title: 'Aplicativos Comerciais',
                    image: require('@/assets/jobs/app.png'),
                    description: 'Desenvolvimento de aplicativos móveis para Android e iOS personalizados para atender às necessidades do cliente, desde aplicativos simples até soluções mais complexas.'
                },
                {
                    title: 'Dashboard de Controle Financeiro',
                    image: require('@/assets/jobs/dashboard.png'),
                    description: 'Desenvolvimento de painéis de controle financeiro personalizados para empresas, com recursos para análise de fluxo de caixa, contas a pagar/receber, geração de relatórios e outras funcionalidades conforme as necessidades do cliente.'
                },
                {
                    title: 'Automação de Marketing',
                    image: require('@/assets/jobs/marketing_automation.png'),
                    description: 'Desenvolvimento de soluções de automação de marketing personalizadas, como envio de e-mails, segmentação de clientes, análise de resultados e outras funcionalidades sob medida.'
                },
                {
                    title: 'SEO',
                    image: require('@/assets/jobs/seo.png'),
                    description: 'Desenvolvimento de estratégias de SEO para aumentar a visibilidade e o tráfego de sites e lojas virtuais nos mecanismos de busca.'
                },
                {
                    title: 'Criação de Chat Bots e Robôs',
                    image: require('@/assets/jobs/chatbot.png'),
                    description: 'Desenvolvimento de chat bots e robôs personalizados para automatizar processos de atendimento ao cliente, suporte técnico, vendas e outras atividades empresariais.'
                },
                {
                    title: 'Soluções em Nuvem como DevOps',
                    image: require('@/assets/jobs/devops.png'),
                    description: 'Desenvolvimento de soluções em nuvem personalizadas para empresas, incluindo implantação, gerenciamento e monitoramento de aplicativos e serviços em nuvem, integração contínua e entrega contínua (CI/CD), infraestrutura como código (IaC) e outras práticas de DevOps.'
                },
            ]
        };
    },


};

</script>

<style scoped>
.work-slider {
    padding: 1rem;
}

.work-title {
    color: #2C2C2C;
}

.swiper {
    width: 100%;
    margin: 0 auto;
}

.swiper-slide {
    display: grid;
    grid-template-rows: 1fr auto auto;
    gap: 1rem;
    align-items: center;
    justify-items: center;
    text-align: center;
    padding: 1.5rem;
    /* Aumente o padding */
    border-radius: 10px;
}

.slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
}

.slide-image:hover {
    transform: scale(1.1);
}

/* Estilos para os novos trabalhos */
.work-slider h4 {
    font-size: 1rem;
    /* Reduza o tamanho da fonte */
    margin-top: 1rem;
    font-weight: 600;
    /* Aumente o peso da fonte */
    line-height: 1.2;
    /* Ajuste o espaçamento entre linhas */
}

.work-slider p {
    font-size: 0.8rem;
    margin-top: 0.4rem;
    line-height: 1.4;
    /* Ajuste o espaçamento entre linhas */
}

.work-slider .swiper-slide:nth-child(odd) {
    background-color: #f2f2f2;
}

.work-slider .swiper-slide:nth-child(even) {
    background-color: #ffffff;
}

/* Atualize o estilo para responsividade */
@media screen and (max-width: 1200px) {
    swiper {
        --swiper-navigation-size: 16px;
    }
}

@media screen and (max-width: 1024px) {
    swiper {
        --swiper-navigation-size: 14px;
    }
}

@media screen and (max-width: 768px) {
    .work-slider {
        padding: 0;
    }

    swiper {
        --swiper-navigation-size: 12px;
    }

    .swiper-slide {
        padding: 0.5rem;
    }

    .work-slider h4 {
        font-size: 0.9rem;
        margin-top: 0.5rem;
    }

    .work-slider p {
        font-size: 0.7rem;
        margin-top: 0.3rem;
        line-height: 1.4;
    }
}</style>

