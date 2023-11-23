<template>
    <div class="card mb-3">
                <div class="row g-0">
                  <div class="col-4">
                    <img src="../../public/img/administracao.svg" class="img-fluid h-100 w-100 object-fit-cover rounded-start" alt="..." style="max-height:235px;">
                  </div>
                  <div class="col-8">
                    <div class="card-body d-flex flex-column gap-1 px-2 justify-content-center">
                        <div class="d-flex flex-row-reverse justify-content-between gap-2 p-0  align-items-center ">
                            <i class="fa-solid fa-briefcase fs-3" style="color: var(--azul-escuro);"></i>
                            <h5 class="card-title fw-bold m-0 fs-5">Administração</h5>
                        </div>
                        <p class="card-text m-0 d-none d-md-block" style="color: var(--cinza-escuro);"><strong>Descrição: </strong> O curso de Administração visa preparar profissionais para atuarem na gestão de organizações, desenvolvendo habilidades em áreas como finanças, marketing, recursos humanos e estratégia empresarial.</p>
                        <p class="card-text m-0 d-flex gap-1" style="color: var(--cinza-escuro);"><strong class="d-none d-md-block">Nível: </strong>Graduação</p>
                        <p class="card-text m-0 d-flex gap-1" style="color: var(--cinza-escuro);"><strong class="d-none d-md-block">Modalidade: </strong>Presencial</p>
                        <div class="d-flex justify-content-between al">
                            <p class="card-text m-0 d-flex gap-1" style="color: var(--cinza-escuro);"><strong class="d-none d-md-block">Duração: </strong>5 anos</p>
                            <a class="btn btn-primary fw-bold fs-6 border-0" style="background-color: var(--amarelo);">
                                <i class="fa-regular fa-clock m-0 p-0"></i>
                                Pendente
                            </a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
</template>

<script>
    export default {
        name: 'CardEnrollmentComponent'
    }
</script>