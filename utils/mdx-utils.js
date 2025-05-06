import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/Post'); 
    if(data){
        return data;
    }

    return []
}

export const getPostBySlug = async (id) => {

    //TODO: BUSCAR UM POST EM ESPECIFICO.
    const {data} = await api.get(`/Post?id=eq.${id}`)
    console.log('Dados: ', data)

    return data[0] || [];
}