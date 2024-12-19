<template>
  <div class="card my-3 mx-auto" style="width: 100%; max-width: 18rem; border: none; border-radius: 10px;">
    <div :class="['card-body', corClass]" style="padding: 20px; text-align: center;">
      <h5 class="card-title text-light fw-bold"> 
        {{ titulo }}
      </h5>
      <p class="text-light fw-bold">Id: {{ id }}</p>
      <p class="card-text text-light"> 
        {{ texto }} 
      </p>
      <div class="d-flex justify-content-center gap-2">
        <a v-bind:href="formatUrl" :class="['btn', btnClass]" style="border-radius: 5px;" target="_blank">Saiba mais</a>
        <a :class="['btn', btnClass]" style="border-radius: 5px;" @click="deletar">Deletar</a>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Card',
    props: {
      titulo: String,
      texto: String,
      url: String,
      cor: String,
      id: String
    },
    methods:{
      deletar(){
        const dados = {
            id : this.id
        };
        axios
        .post('http://localhost:8081/deleteCard', dados)
        .then(response => {
            console.log('Dados deletadops com sucesso:');
            window.location.reload();
        })
        .catch(error => {
            console.error('Erro ao inserir dados:', error);
        });
      }
    },
    computed: {
      corClass() {
        if (this.cor === 'laranja') {
          return 'bg-laranja';
        }
        return 'bg-azul';
      },
      btnClass() {
        if (this.cor === 'laranja') {
          return 'btn-laranja';
        }
        return 'btn-azul';
      },
      formatUrl() {
        if (this.url && !/^https?:\/\//i.test(this.url)) {
          return `https://${this.url}`;
        }
        return this.url;
      }
    }
  }
</script>

<style scoped>
  .card {
    max-width: 18rem;
    width: 100%;

    margin: auto;

    border: none;
    border-radius: 10px;

    overflow: hidden;
  }

  .card-title {
    font-size: 1.125rem;
    font-weight: bold;
    font-family: Arial, sans-serif;
  }

  .card-body {
    padding: 20px;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: Arial, sans-serif;
  }

  .btn {
    padding: 0.5rem 1rem;

    font-size: 0.875rem;
    font-weight: bold;

    color: white !important;

    border-radius: 5px;
    opacity: 0.9;
    transition: background-color 0.3s ease;
  }

  .bg-laranja {
    background-color: #ff8228;
  }

  .bg-azul {
    background-color: #15dcfb;
  }

  .btn-laranja {
    background-color: rgb(216, 100, 10) !important;
  }

  .btn-azul {
    background-color: #11bfda !important;
  }

  .btn:hover {
    opacity: 1;
  }
</style>
