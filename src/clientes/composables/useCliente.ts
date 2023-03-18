import  ventasApi  from '@/api/ventasApi';
import { computed, ref } from "vue"
import { useQuery } from '@tanstack/vue-query';
import type Cliente from '../interfaces/CLiente.Interface';

const clienteSet = ref<{[id: string] : Cliente}>({})
const hasError = ref<boolean>(false);
const errorMessage = ref<string|null>(null)

const getCliente = async( id:number ):Promise<Cliente> => {

    if( clienteSet.value[id] )
        return clienteSet.value[id]

    try{
     
        const  cliente = await (await ventasApi.get<Cliente>(`/clientes/${id}`)).data
        
        return cliente
    }catch(error:any){
        throw new Error("No estaba esperan un error");
        
    }

    
    
}

const loadedCliente = (cliente:Cliente)=>{
    hasError.value = false;
    errorMessage.value = null;
    clienteSet.value[cliente.id] = cliente;
}

const loadedWithError = (error: string)=>{
    hasError.value = false;
    errorMessage.value = null;
}
const useCliente = ( id: number ) => {
    
    const { isLoading } = useQuery(
        [ 'cliente', id ],
        () => getCliente(id),
        {
            onSuccess:loadedCliente,
            onError: loadedWithError,
        }
    )   

    return {
        // Properties
        errorMessage,
        hasError,
        isLoading,
        list: clienteSet,

        // Getters
        cliente: computed<Cliente | null>( () => clienteSet.value[id] ),

        // Methods
        
    }
}
export default useCliente