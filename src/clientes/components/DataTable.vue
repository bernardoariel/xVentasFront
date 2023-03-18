<script setup lang="ts">
import type Cliente from '../interfaces/CLiente.Interface';

interface Props{
    clientes: Cliente[]
}

const props = defineProps<Props>()

</script>
<template>
    <ul>
        <li v-for="cliente of props.clientes"
            :key="cliente.id"
            :cliente="clientes">{{ cliente.nombre }}</li>
    </ul>
</template>


<style scoped>

</style>