import axios from 'axios'

const api = axios.create({
    baseURL:'https://cronogramarbackend-production.up.railway.app'
})

export default api