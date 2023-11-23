<template>
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
                <form action="" method="POST" id="enrollment-form1">
                    <div class="card-body container">
                        <div class="mb-3">
                            <label for="name" class="form-label fw-bold">Nome:</label>
                            <input type="text" class="form-control shadow-sm" id="name" aria-describedby="nameHelp" placeholder="Insira seu nome completo">
                          </div>
                          <div class="mb-3">
                            <label for="email" class="form-label fw-bold">E-mail:</label>
                            <input type="text" class="form-control shadow-sm" id="email" placeholder="Insira seu melhor e-mail">
                          </div>
                          <div class="mb-3">
                            <label for="phone" class="form-label fw-bold">Telefone:</label>
                            <input type="number" class="form-control shadow-sm" id="phone" placeholder="(__)_____-____">
                          </div>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                        <router-link to="/matricula-passo-2">
                            <button type="" class="btn btn-primary fw-bold px-4" style="background-color: var(--azul-claro);">Próximo</button>
                        </router-link>
                    </div>
                   
                  </form>
            </div>
            
        </section>
        </section>
</template>

<script>
    export default {
        name: 'FormstepOndeComponent'
    }
</script>