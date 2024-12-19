<template>
    <div class="container-fluid p-5">
      <div class="row g-3 justify-content-center">
        <Card 
          v-for="card in cards"  
          :key="card._id"
          :titulo="card.titulo" 
          :texto="card.texto" 
          :url="card.url" 
          :cor="card.cor"
          :id="card._id" 
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        />
      </div>
    </div>
</template>

<script>
import Card from './Card.vue'
import axios from 'axios'
export default {
    name: 'App',
    components: {
    Card
    },
    data() {
    return {
        cards: []
    }
    },
    mounted() {
    axios.get('http://localhost:8081/retornaCard')
        .then(response => {
        this.cards = response.data  
        })
        .catch(error => {
        console.error('Erro ao buscar os cards:', error)
        })
    }
}
</script>

<style scoped>
    .container-fluid {
    padding: 20px;
    }

    .row {
    gap: 20px;
    }

    @media (max-width: 576px) {
        .row {
            justify-content: center;
        }
    }
</style>
