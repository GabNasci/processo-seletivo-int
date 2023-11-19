<template>
  <header>
    <nav class="navbar">
      <div class="container-fluid d-flex">
        <a href="">
          <img src="../public/LogoON.svg" alt="Logo ON">
        </a>
        
        
        <button type="button" class="btn btn-outline-light rounded-pill ">
          Acessar Conta
        </button>
        
      </div>
    </nav>
  </header>
  <main>
    <section class="busca">
            <div class=" container justify-content-center align-items-center py-5">

                <div class="d-flex justify-content-center align-items-center">
                    <h2 class="fs-5">Já sabe o que está procurando?</h2>
                </div>

                <div class=" d-flex border rounded-pill ">
                    <div class="border-end rounded-start-pill px-3 py-1">
                        <!-- Button trigger modal -->
                        <button type="button" class="btn p-0 text-light" data-bs-toggle="modal" data-bs-target="#exampleModal">
                          <font-awesome-icon icon="fa-solid fa-list" />
                        </button>
                        
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                ...
                                </div>
                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="d-flex justify-content-between w-100">
                        <input type="text" name="search" id="search" class="busca_input border-0 w-100 px-2" placeholder="administração...">
                        <button type="submit" class="btn p-0 text-light">
                          <font-awesome-icon icon="fa-solid fa-magnifying-glass" rotation=90 class="p-2" />
                        </button>
                        
                    </div>
                    
                </div>
            </div>
        </section>
  </main>
  
  


  
</template>

<script>


</script>

<style>
  /*------- Import de Fontes -------*/
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');


  /*------- Variáveis de Cores -------*/
  :root {
    --azul-claro: #1586CB;
    --azul-escuro: #105D8E;
    --preto: #000000;
    --branco:#FFFFFF;
    --cinza-claro:#D9D9D9;
    --cinza-escuro: #6C757D;
    --verde: #1BC35E;
    --amarelo: #FFE600;
    --fonte-principal: 'Poppins'
  }

  header {
    background-color: var(--azul-claro);
    font-family: var(--fonte-principal);
  }

  .busca {
    color: var(--branco);
    background: linear-gradient(82deg, #164C6E 7.05%, #105D8E 52.51%, #184F73 96.27%);
 }

 .busca_input {
    background: transparent;
    outline: none;
    color: var(--branco);
    
 }

  



</style>
