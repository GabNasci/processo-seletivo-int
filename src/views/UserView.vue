<template>
    <main class="d-flex flex-column gap-2" style="font-family: var(--fonte-principal);">
        <section class="d-flex gap-4 container pt-4 col-12 align-items-center">
            <div class="d-flex justify-content-center align-items-center rounded-circle col-4" style="background-color: var(--cinza-claro); width: 64px; height: 64px;">
                <h1 class="text-dark m-0 fs-1 w">G</h1>
            </div>
            <h2 class="fs-5 m-0 p-0 text-break col-8 fw-bold">Gabriel Nascimento de Carvalho</h2>
        </section>
        <section class="container">
            <hr class="border border-terciary border-3 opacity-75">
            <div class="container d-flex flex-column gap-4">
                <p class="card-text m-0 d-flex gap-1 text-break"><strong class="text-nowrap">E-mail: </strong> gabriel.nascimento@grupointegrado.br</p>
                <p class="card-text m-0 d-flex gap-1"><strong>Telefone: </strong>(44)66666-6666</p>
            </div>
            <hr class="border border-terciary border-3 opacity-75">
        </section>
        
        <section class="container">
            <h3 class="fw-bold m-0">Matrículas:</h3>
        </section>

        <section class="container d-flex flex-wrap justify-content-center" style="font-family: var(--fonte-principal);">

            <CardEnrollmentComponent />

        </section>






        <section class="container">
            <h3 class="fw-bold m-0">Outros Cursos</h3>
        </section>

        <section class="carousel container d-flex gap-2" style="overflow-x: auto; overflow-y: hidden;">
           <CardCursoComponentView/>

        </section>
      </main>
</template>

<script>
import CardCursoComponentView from '@/components/CardCursoComponent.vue'
import CardEnrollmentComponent from '@/components/CardEnrollmentComponent.vue';
    

    export default {
        name: 'UserView',
        components: {
            CardCursoComponentView,
            CardEnrollmentComponent
        },
        mounted() {
            window.scrollTo(0, 0);
        },
    }
</script>