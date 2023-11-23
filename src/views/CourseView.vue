<template>
    <main class="d-flex flex-column gap-4">
        <section>
            <img src="../../public/img/administracao.svg" alt="" class="img-fluid w-100 object-fit-cover" style="height: 30vh;">
        </section>

        <section class="container">
            <div class="d-flex flex-column gap-2 justify-content-center">
                <div class="d-flex flex-row-reverse justify-content-between gap-2 p-0 align-items-center">
                    <i class="fa-solid fa-briefcase fs-1" style="color: var(--azul-escuro);"></i>
                    <h5 class="card-title fw-bold m-0 fs-3">Administração</h5>
                </div>
                <p class="m-0 me-5" style="color: var(--cinza-escuro);"><strong>Descrição: </strong> O curso de Administração visa preparar profissionais para atuarem na gestão de organizações, desenvolvendo habilidades em áreas como finanças, marketing, recursos humanos e estratégia empresarial.</p>
                <p class="m-0 d-flex gap-1" style="color: var(--cinza-escuro);"><strong class="">Nível: </strong>Graduação</p>
                <p class="m-0 d-flex gap-1" style="color: var(--cinza-escuro);"><strong class="">Modalidade: </strong>Presencial</p>
                <div class="d-flex justify-content-between al">
                    <p class="m-0 d-flex gap-1" style="color: var(--cinza-escuro);"><strong class="">Duração: </strong>5 anos</p>
                    <h3 class=" d-flex fs-5 text-end align-items-center m-0"><strong>R$40.000,00 ou</strong></h3>
                </div>
                <h3 class=" d-flex gap-1 fs-5 text-end justify-content-end align-items-center m-0">10x de <strong class="fs-1">R$4.000,00</strong></h3>
                <div class="d-flex justify-content-center py-2">
                    <router-link to="/matricula-passo-1">
                        <a href="#" class="btn btn-primary fw-bold fs-2" style="background-color: var(--azul-claro);">Matricule-se</a>
                    </router-link>
                </div>
            </div>
        </section>
        

        <section class="container">
            <h3 class="fw-bold m-0">Outros Cursos</h3>
        </section>

        <section class="carousel container d-flex gap-2" style="overflow-x: auto; overflow-y: hidden;">
            <CardCursoComponent />

        </section>
      </main>
</template>

<script>
    import CardCursoComponent from '../components/CardCursoComponent.vue'

    export default {
        name: 'CourseView',
        components: {
            CardCursoComponent
        },
        mounted() {
            window.scrollTo(0, 0);
        },
    }
</script>