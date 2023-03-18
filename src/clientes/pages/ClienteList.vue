<script setup lang="ts">
import DataTable from '../components/DataTable.vue';
import useClientes from '../composables/useClientes';

const props = defineProps<{title?:string}>()

const {
    clientes,
    isLoading,
    hasError,
    errorMessage,
    count 
} = useClientes();

console.log('clientes::: ', clientes);

</script>
<template>
        <h1 v-if="isLoading">Loading</h1>
        <div v-else-if="hasError">
            <h1>Error al cargar</h1>
            <p>{{ errorMessage }}</p>
        </div>
        <template v-else>
            <h1>{{ props.title }} - {{  count  }}</h1>
            
            <DataTable :clientes="clientes" /> 
        </template>
</template>



<style scoped>

</style>