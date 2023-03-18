<script setup lang="ts">
import { toRef } from 'vue';
import { useRouter } from 'vue-router';
import type Cliente from '../interfaces/CLiente.Interface';
const router = useRouter()
interface Props{
    clientes: Cliente[]
}

const props = defineProps<Props>()

const goTo = (id:number)=>{
    
   router.push(`by/${id}`)
}
</script>
<template>
    <ul>
        <li v-for="cliente of props.clientes"
            :key="cliente.id"
            :cliente="clientes">{{ cliente.nombre }} <button @click="goTo(cliente.id)">ver</button></li>
    </ul>
</template>


<style scoped>

</style>