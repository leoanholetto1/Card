<template>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-6">
          <div class="form-group mb-3">
            <label for="id">Id:</label>
            <input type="text" v-model="id" class="form-control" id="id">
          </div>
          <div class="form-group mb-3">
            <label for="titulo">Título:</label>
            <input type="text" v-model="titulo" class="form-control" id="titulo">
          </div>
          <div class="form-group mb-3">
            <label for="link">Link:</label>
            <input type="text" v-model="url" class="form-control" id="link">
          </div>
          <div class="form-group mb-3">
            <label for="texto">Texto:</label>
            <input type="text" v-model="texto" class="form-control" id="texto">
          </div>
          <div class="form-group mb-5">
            <label for="cor">Cor:</label>
            <input type="text" v-model="cor" class="form-control" id="cor">
          </div>
          <button type="button" @click="alterar" class="btn btn-primary w-100">Alterar</button>
        </div>
      </div>
    </div>
</template>
  
<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                id:"",
                titulo: "",
                url: "",
                texto: "",
                cor: ""
            }
        },
        methods:{
            alterar() {
                const dados = {
                    id: this.id,
                    titulo: this.titulo,
                    texto: this.texto,
                    url: this.url,
                    cor: this.cor
                };

                axios
                .post('http://localhost:8081/alterCard', dados)
                .then(response => {
                    console.log('Dados inseridos com sucesso:', response.data);
                })
                .catch(error => {
                    console.error('Erro ao inserir dados:', error);
                });

                this.id = "";
                this.titulo= "";
                this.url =  "";
                this.texto =  "";
                this.cor =  "";
            }
        }
    }
</script>
  
<style>
    body {
        background-color: #f8f9fa;
    }

    h1 {
        color: #343a40;
    }

    .table {
        background-color: #ffffff;
    } 
</style>