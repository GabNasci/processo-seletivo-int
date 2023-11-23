<template>
    <section class="d-flex flex-column gap-4">
        <section class="container pt-4">
            <div style="position: relative;">
                <div class="container d-flex pt-2" style="position: absolute; z-index: -1;">
                    <hr class="border border-success border-5 opacity-100 w-50">
                    <hr class="border border-success border-5 opacity-100 w-50">
                </div>
                <div class="d-flex justify-content-between align-items-center" >
                    <font-awesome-icon icon="fa-solid fa-user" class="fs-3 text-light p-3 rounded-circle shadow-lg" style="background-color: var(--verde);"/>
                    <font-awesome-icon icon="fa-solid fa-file-lines" class="fs-3 text-light p-3  rounded-circle shadow-lg " style="background-color: var(--verde); "/>
                    <font-awesome-icon icon="fa-solid fa-upload" class="fs-3 text-light p-3 rounded-circle shadow-lg" style="background-color: var(--verde);"/>
                </div>
                
            </div>
        </section>

        <section class="container">
            <div class="card shadow-sm">
                <div class="card-header">
                    <h1 class="fw-bold fs-2">Envio do Documento:</h1>
                </div>
                <form >
                    <div class="card-body d-flex flex-column gap-2">
                      <p class="mb-3 me-5" style="color: var(--cinza-escuro);"><strong>Instruções: </strong> Aqui você deve anexar um arquivo PDF do seu documento de identificação(RG/CNH).</p>
                      <div class="mb-3">
                        <input class="form-control" type="file" id="document" accept=".pdf">
                      </div>
                    </div>
                    <div class="card-footer d-flex justify-content-end gap-2">
                        <router-link to="/matricula-passo-2">
                            <button type="button" class="btn btn-secondary fw-bold px-2" style="background-color: var(--cinza-escuro);">Voltar</button>
                        </router-link>
                        <router-link to="/conta">
                            <button type="submit" class="btn btn-primary fw-bold px-4" style="background-color: var(--azul-claro);">Finalizar</button>
                        </router-link>
                        
                    </div>
                   
                  </form>
            </div>
            
        </section>
    </section>
</template>

<script>
    export default {
        name: 'FormStepThreeComponent'
            
        
    }
</script>