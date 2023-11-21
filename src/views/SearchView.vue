<template>
    <HeaderComponent />

    <main class="d-flex flex-column gap-4">
        <BannerPesquisaComponent />
        <section class="container">
            <h3 class="fw-bold m-0">Resultados da Busca:</h3>
        </section>

        <section class="container d-flex flex-wrap justify-content-center">
            <CardSearchComponent />
        </section>

        <section class="container">
            <h3 class="fw-bold m-0">Outros Cursos</h3>
        </section>

        <section class="carousel container d-flex gap-2" style="overflow-x: auto; overflow-y: hidden;">
            <CardCursoComponent />
        </section>


    </main>

    <FooterComponent />

</template>

<script>
    import CardCursoComponent from '../components/CardCursoComponent.vue'
    import BannerPesquisaComponent from '../components/BannerPesquisaComponent.vue'
    import CardSearchComponent from '@/components/CardSearchComponent.vue'

    export default {
        name: 'SearchView',
        components: {
        CardCursoComponent,
        BannerPesquisaComponent,
        CardSearchComponent
        }
    
    }

</script>