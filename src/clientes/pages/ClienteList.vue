<script setup lang="ts">
import ventasApi from '@/api/ventasApi';
import { useQuery } from '@tanstack/vue-query';



const props = defineProps<{title?:string}>()

const getClientes = async():Promise<any[]> =>{

return new Promise((resolve)=>{
    setTimeout(async () => {
        
        const clientes= await (await ventasApi.get<any>('/clientes')).data;
        console.log('clientes::: ', clientes);
        
        //resolve(clientes)
        
    }, 1);
})

}
const { isLoading, isError, data:characters, error} = useQuery(
    ['clientes'],
    getClientes,
    {
        cacheTime: 1000 * 60,
        refetchOnReconnect:'always' 
    }
) 


</script>
<template>
        <h1>{{ props.title  }}</h1>
</template>



<style scoped>

</style>