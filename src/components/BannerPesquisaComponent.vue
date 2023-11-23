<template>
    <section class="busca" style="background: linear-gradient(82deg, #164C6E 7.05%, #105D8E 52.51%, #184F73 96.27%);">
        <div class=" container justify-content-center align-items-center py-5">

            <div class="d-flex justify-content-center align-items-center">
                <h2 class="fs-5" style="color: var(--branco);">Já sabe o que está procurando?</h2>
            </div>

            <div class=" d-flex border rounded-pill ">
                <div class="border-end rounded-start-pill px-3 py-1">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn p-0 text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <font-awesome-icon icon="fa-solid fa-list" />
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header gap-1">
                                    <h1 class="modal-title fs-5 fw-bold text-nowrap" id="exampleModalLabel"
                                        style="max-width: fit-content;">Busca com filtro:</h1>
                                    <input type="text" name="search" id="search" class="border rounded-2 w-100 px-2"
                                        placeholder="administração..." style="background: transparent; outline: none;">
                                </div>
                                <div class="modal-body">
                                    <seaction class="d-flex flex-column flex-md-row gap-2">
                                        <section class="d-md-flex flex-column">
                                            <div>
                                                <h3 class="fs-6 fw-bold">Tipo:</h3>
                                                <ul class="list-group">
                                                    <li class="list-group-item border-0">
                                                        <input class="form-check-input me-1" type="checkbox" value=""
                                                            id="firstCheckbox" checked>
                                                        <label class="form-check-label"
                                                            for="firstCheckbox">Graduação</label>
                                                    </li>
                                                    <li class="list-group-item border-0">
                                                        <input class="form-check-input me-1" type="checkbox" value=""
                                                            id="secondCheckbox">
                                                        <label class="form-check-label"
                                                            for="secondCheckbox">Pós-Graduação</label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 class="fs-6 fw-bold">Preço:</h3>
                                                <div class="d-flex flex-column gap-1 align-items-end"
                                                    style="width: min-content;">
                                                    <div class="d-flex gap-1 align-items-center">
                                                        <p class="m-0">De:</p>
                                                        <input type="text" name="" id="" class="border rounded-2"
                                                            style="width: 100px;">
                                                    </div>
                                                    <div class="d-flex gap-1 ">
                                                        <p class="m-0">a:</p>
                                                        <input type="text" name="" id="" class="border rounded-2"
                                                            style="width: 100px;">
                                                    </div>
                                                </div>



                                            </div>

                                        </section>
                                        <section class="d-md-flex flex-column">
                                            <div>
                                                <h3 class="fs-6 fw-bold">Modalidade:</h3>
                                                <ul class="list-group">
                                                    <li class="list-group-item border-0">
                                                        <input class="form-check-input me-1" type="checkbox" value=""
                                                            id="firstCheckbox" checked>
                                                        <label class="form-check-label"
                                                            for="firstCheckbox">Presencial</label>
                                                    </li>
                                                    <li class="list-group-item border-0">
                                                        <input class="form-check-input me-1" type="checkbox" value=""
                                                            id="secondCheckbox">
                                                        <label class="form-check-label" for="secondCheckbox">EAD</label>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 class="fs-6 fw-bold">Duração:</h3>
                                                <div class="d-flex gap-1 align-items-center">
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>3</option>
                                                        <option value="1">4</option>
                                                        <option value="2">5</option>
                                                    </select>
                                                    <p class="m-0">anos</p>
                                                </div>

                                            </div>
                                        </section>

                                    </seaction>
                                    <seaction></seaction>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary fw-bold px-1" data-bs-dismiss="modal"
                                        style="background-color: var(--cinza-escuro);">Cancelar</button>
                                        <button type="button" class="btn btn-primary fw-bold px-4"
                                            style="background-color: var(--azul-claro);">Buscar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="d-flex justify-content-between w-100 align-items-center">
                    <input type="text" name="search" id="search" class="busca_input border-0 w-100 px-2"
                        placeholder="administração..."
                        style="background: transparent; outline: none; color: var(--branco);">
                    <router-link to="/busca">
                        <button type="submit" class="btn p-0 text-light">
                            <font-awesome-icon icon="fa-solid fa-magnifying-glass" rotation=90 class="p-2 m-0" />
                    </button>
                </router-link>


            </div>

        </div>
    </div>
</section></template>

<script>
export default {
    name: 'BannerPesquisaComponent'
}
</script>