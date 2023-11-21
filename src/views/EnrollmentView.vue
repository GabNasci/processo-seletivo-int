<template>
    <main class="d-flex flex-column gap-4">
        <FormStepOneComponent />
        <FormStepTwoComponent />
        <FormStepThreeComponent />

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
    import FormStepOneComponent from '@/components/FormStepOneComponent.vue';
    import FormStepTwoComponent from '@/components/FormStepTwoComponent.vue';
    import FormStepThreeComponent from '@/components/FormStepThreeComponent.vue';

    export default {
        name: 'EnrollmentView',
        components: {
            CardCursoComponent,
            FormStepOneComponent,
            FormStepTwoComponent,
            FormStepThreeComponent
        }
    }
        

    
</script>