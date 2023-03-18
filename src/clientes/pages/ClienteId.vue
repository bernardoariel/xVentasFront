<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import useCliente from '../composables/useCliente';


const route = useRoute();
const router = useRouter()
const id = route.params.id;
const numId = (+id);


const { cliente, hasError, errorMessage, isLoading } = useCliente(numId);
watchEffect(()=>{
    if(!isLoading.value && hasError.value){
        router.replace('/clientes')
    }
})

</script> 

<template>
   <h1 v-if="isLoading">Loading...</h1>
    <h1 v-else-if="hasError">{{ errorMessage }}.</h1>
    <div v-else-if="cliente">
        <ul>
            <li>Direccion: {{ cliente.direccion }}</li>
            <li>Telefono: {{ cliente.telefono }}</li>
            <li>Email: {{ cliente.email }}</li>
        </ul>
    </div>
  
</template>


<style scoped>

</style>