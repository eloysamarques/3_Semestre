import axio from "axios"

// http://localhost:3000

// define o endereco para apis externas
const apiPort = "3000"

// define o endereco/endpoint da api local
const localApi = `http://localhost:${apiPort}`

// define o endereco para apis externas
const externaApi = null

// cria o obj do axios com a URL base apontado para a api local
const api = axio.create({
    baseURL: localApi
})

export default api