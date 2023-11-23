<template>
    <div class="col-6">
        <div class="card rounded-4 shadow-sm m-1">
            <img src="/img/administracao.svg" class="card-img-top rounded-top-4 w-100 img-fluid object-fit-cover" alt="..."
                style="height: 144px;">
            <div class="card-body d-flex row gap-2">
                <div class="d-flex gap-1 p-0 p-md-2 align-items-center">
                    <font-awesome-icon icon="fa-solid fa-briefcase" class="fs-3" style="color: var(--azul-escuro);" />
                    <router-link to="/curso" class="text-decoration-none text-dark">
                        <h5 class="card-title fw-bold m-0 fs-6">Administração</h5>
                    </router-link>
                </div>

                <p class="card-text m-0 d-none d-md-block" style="color: var(--cinza-escuro);"><strong>Descrição: </strong>
                    O curso de Administração visa preparar profissionais para atuarem na gestão de organizações,
                    desenvolvendo habilida... </p>

                <div class="d-none d-md-flex justify-content-between align-items-center">
                    <p class="card-text m-0 d-none d-lg-block" style="color: var(--cinza-escuro);">
                        <strong>Modalidade:</strong> Presencial
                    </p>
                    <router-link to="/curso">
                        <a href="#" class="btn btn-primary fw-bold"
                            style="background-color: var(--azul-claro);">Matricule-se</a>
                    </router-link>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardCursoHomeComponent'
}
</script>
