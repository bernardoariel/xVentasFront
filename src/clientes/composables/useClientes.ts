
import ventasApi from '@/api/ventasApi';
import { useQuery } from '@tanstack/vue-query';
import { computed, ref } from 'vue'
import type Clientes from '../interfaces/CLiente.Interface';


const clientes   = ref<Clientes[]>([]);
const hasError     = ref<boolean>(false);
const errorMessage = ref<string | null>(null);

const getClientes = async():Promise<Clientes[]> =>{

    const  clientes = await (await ventasApi.get<Clientes[]>('/clientes')).data;
    console.log('clientes:a:: ', clientes);
    return clientes
    
}

const loadedClientes = (data: Clientes[]) =>{
    hasError.value = false;
    errorMessage.value = null;
    clientes.value = data;
}
const useClientes = () => {

    const { isLoading } = useQuery(
        ['clientes'],
        getClientes,
        {
            onSuccess:loadedClientes,  
        }
    )

    return {
        /* propeties */
        clientes,
        isLoading,
        hasError,
        errorMessage,
        /* getter */
        count: computed(()=>clientes.value.length),
        /* methods */
    }
}

export default useClientes
/* es una funcion cuyo retorno casi siempre es reactivo */