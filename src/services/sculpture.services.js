import axios from 'axios'

class SculptureService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/sculptures`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createSculpture(sculptureDataForm) {
        console.log(sculptureDataForm)
        return this.api.post('/newSculpture', sculptureDataForm)
    }

    getAllSculpture() {
        return this.api.get('/getAllSculptures')
    }

    getOneSculpture(sculpture_id) {
        return this.api.get(`/getOneSculpture/${sculpture_id}`)
    }
}
const sculptureService = new SculptureService()
export default sculptureService