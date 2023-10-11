import axios from 'axios'

class JewelryService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/jewelry`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createJewelry(jewelryDataForm) {
        return this.api.post('/newJewelry', jewelryDataForm)
    }

    getAllJewelry() {
        return this.api.get('/getAllJewelry')
    }

    getOneJewelry(jewelry_id) {
        return this.api.get(`/getOneJewelry/${jewelry_id}`)
    }
}
const jewelryService = new JewelryService()
export default jewelryService