<template>
    <main class="d-flex flex-column gap-4">
        <section class="d-flex flex-column gap-4">
            <section class="container pt-4">
            <div style="position: relative;">
                <div class="container d-flex pt-2" style="position: absolute; z-index: -1;">
                    <hr class="border border-secondary border-5 opacity-100 w-50">
                    <hr class="border border-secondary border-5 opacity-100 w-50">
                </div>
                <div class="d-flex justify-content-between align-items-center" >
                    <font-awesome-icon icon="fa-solid fa-user" class="fs-3 text-light p-3 rounded-circle shadow-lg" style="background-color: var(--verde);"/>
                    <font-awesome-icon icon="fa-solid fa-file-lines" class="fs-3 text-light p-3  rounded-circle shadow-lg " style="background-color: var(--cinza-escuro); "/>
                    <font-awesome-icon icon="fa-solid fa-upload" class="fs-3 text-light p-3 rounded-circle shadow-lg" style="background-color: var(--cinza-escuro);"/>
                </div>
                
            </div>
        </section>

        <section class="container">
            <div class="card shadow-sm">
                <div class="card-header">
                    <h1 class="fw-bold fs-2">Informações de contato:</h1>
                </div>
                <form >
                    <div class="card-body container">
                        <div class="mb-3">
                            <label for="exampleInputName1" class="form-label fw-bold">Nome:</label>
                            <input type="text" class="form-control shadow-sm" id="exampleInputNamee1" aria-describedby="nameHelp" placeholder="Insira seu nome completo">
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label fw-bold">E-mail:</label>
                            <input type="text" class="form-control shadow-sm" id="exampleInputEmail1" placeholder="Insira seu melhor e-mail">
                          </div>
                          <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label fw-bold">Telefone:</label>
                            <input type="number" class="form-control shadow-sm" id="exampleInputEmail1" placeholder="(__)_____-____">
                          </div>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                        <button type="submit" class="btn btn-primary fw-bold px-4" style="background-color: var(--azul-claro);">Próximo</button>
                    </div>
                   
                  </form>
            </div>
            
        </section>
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
        name: 'EnrollmentView',
        components: {
            CardCursoComponent
        }

    }
</script>