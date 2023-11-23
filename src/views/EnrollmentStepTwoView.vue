<template>
    <main class="d-flex flex-column gap-4">
        <FormStepTwoComponent />

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
    import FormStepTwoComponent from '@/components/FormStepTwoComponent.vue';

    export default {
        name: 'EnrollmentStepTwoView',
        components: {
            CardCursoComponent,
            FormStepTwoComponent
        },
        mounted() {
            window.scrollTo(0, 0);
        },
    }
        

    
</script>