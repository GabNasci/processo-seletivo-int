<template>
      <main class="d-flex flex-column gap-4">
        <BannerPesquisaComponent>
        </BannerPesquisaComponent>

        <section class="container">
            <h3 class="fw-bold m-0">Todos os Cursos</h3>
        </section>

        <section class="container d-flex flex-wrap">

            <CardCursoHomeComponent>
            </CardCursoHomeComponent>

        </section>


        <section class="container">
            <h3 class="fw-bold m-0">Cursos Presenciais</h3>
        </section>

        <section class="carousel container d-flex gap-2" style="overflow-x: auto; overflow-y: hidden;">
            <CardCursoComponent>
            </CardCursoComponent>
            

        </section>
        

        <section class="container">
            <h3 class="fw-bold m-0">Ensino a Distância</h3>
        </section>

        <section class="carousel container d-flex gap-2" style="overflow-x: auto; overflow-y: hidden;">
          <CardCursoComponent>
          </CardCursoComponent>
            

        </section>
      </main>
</template>

<script>
  import CardCursoHomeComponent from '../components/CardCursoHomeComponent.vue'
  import CardCursoComponent from '../components/CardCursoComponent.vue'
  import BannerPesquisaComponent from '../components/BannerPesquisaComponent.vue'

  export default {
    name: 'HomeView',
    components: {
      CardCursoComponent,
      CardCursoHomeComponent,
      BannerPesquisaComponent
    }
    
  }

</script>