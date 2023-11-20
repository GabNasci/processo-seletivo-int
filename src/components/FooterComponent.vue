<template>
    <footer class="py-4 mt-5" style="background-color: var(--azul-claro); font-family: var(--fonte-principal); color: var(--branco);">
        <section class="container">
            <section class="d-md-flex justify-content-between">
                <div>
                    <h3 class="fs-5 fw-bold">Contate-nos:</h3>
                    <ul class="d-flex flex-column gap-2" style="list-style: disc;">
                        <li>(44)6 6666-6666</li>
                        <li>oncursos@graduacao.com</li>
                        <li>Campo Mourão-PR</li>
                    </ul>
                </div>
                <div>
                    <h3 class="fs-5 fw-bold">Nossas Redes</h3>
                    <p>Parcerias:</p>
                    <div class="d-flex gap-1">
                        <i class="fa-brands fa-cc-visa" style="font-size: 48px;"></i>
                        <i class="fa-brands fa-cc-mastercard" style="font-size: 48px;"></i>
                    </div>
                </div>
            </section>
            <section class="d-flex justify-content-center py-4">
                <p class="m-0 text-center">
                    Desenvolvido por
                    <br>
                    Gabriel Nascimento
                </p>
            </section>
            
        </section>
        

      </footer>
</template>

<script>
    export default {
        name: 'FooterComponent'
    }
</script>