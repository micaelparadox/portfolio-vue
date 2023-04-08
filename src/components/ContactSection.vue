<template>
    <section id="contact" class="bg-white dark:bg-gray-800">
        <div class="app-container container px-6 py-16 mx-auto">
            <div class="text-center">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
                    Contato 📩
                </h2>
                <p class="mt-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                    Entre em contato comigo para colaborações, oportunidades ou qualquer outra coisa que você queira falar.
                </p>
                <a href="https://api.whatsapp.com/send?phone=5547996428339"
                    class="inline-block px-6 py-4 mt-8 font-medium text-white transition duration-500 ease-in-out transform bg-green-500 rounded-md hover:bg-green-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">
                    Enviar mensagem no WhatsApp
                </a>
            </div>
        </div>
    </section>
</template>
  
<style scoped>
/* Aqui usamos classes do Tailwind CSS para estilizar o componente */
.bg-white {
    background-color: #fff;
}

.dark\\:bg-gray-800 {
    background-color: #1f2937;
}

.container {
    max-width: 1280px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}

.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}

.py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
}

.text-center {
    text-align: center;
}

.text-gray-800 {
    --text-opacity: 1;
    color: #2d3748;
    color: rgba(45, 55, 72, var(--text-opacity));
}

.text-gray-600 {
    --text-opacity: 1;
    color: #4a5568;
    color: rgba(74, 85, 104, var(--text-opacity));
}

.font-bold {
    font-weight: 700;
}

.mt-4 {
    margin-top: 1rem;
}

.mt-8 {
    margin-top: 2rem;
}

.inline-block {
    display: inline-block;
}

.font-medium {
    font-weight: 500;
}

.transition {
    transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}

.duration-500 {
    transition-duration: 500ms;
}

.ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.transform {
    --transform-translate-x: 0;
    --transform-translate-y: 0;
    --transform-rotate: 0;
    --transform-skew-x: 0;
    --transform-skew-y: 0;
    --transform-scale-x: 1;
    --transform-scale-y: 1;
    transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));
    transition: transform 0.3s ease-in-out;
}

/* Utilize o mixin em .transform */
.transform {
    @include transform(0, 0, 0, 0, 0, 1, 1);
}

/* Define como o menu deve se comportar quando aberto */
.menu-open {
    @include transform(0, 0, 0, 0, 0, 1, 1);
}

/* Define as propriedades do botão de menu */
.menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    background-color: #1f2937;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.menu-btn:hover {
    background-color: #9ca3af;
}

.menu-btn:focus {
    outline: none;
}

/* Define as propriedades da barra de menu */
.menu-bar {
    width: 100%;
    height: 2px;
    background-color: #1f2937;
    transition: transform 0.3s ease-in-out;
}

/* Define as propriedades da primeira barra quando o menu está aberto */
.menu-bar.menu-bar-1.menu-open {
    @include transform(0, 6px, 45deg, 0, 0, 1, 1);
}

/* Define as propriedades da segunda barra quando o menu está aberto */
.menu-bar.menu-bar-2.menu-open {
    opacity: 0;
}

/* Define as propriedades da terceira barra quando o menu está aberto */
.menu-bar.menu-bar-3.menu-open {
    @include transform(0, -6px, -45deg, 0, 0, 1, 1);
}
</style>