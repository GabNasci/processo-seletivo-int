<template>
    <header>
        <nav class="navbar">
          <div class="container-fluid d-flex">
            <a href="">
              <img src="../../public/LogoON.svg" alt="Logo ON">
            </a>
            <button type="button" class="btn btn-outline-light rounded-pill ">
              Acessar Conta
            </button>
          </div>
        </nav>
      </header>
    
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style>
  header {
    background-color: var(--azul-claro);
    font-family: var(--fonte-principal);
  }
</style>