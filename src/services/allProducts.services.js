import axios from 'axios'

class AllProductsService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/allProducts`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }
    getAllPhotos() {
        return this.api.get('/getAllPhotos')
    }
}
const allProductsService = new AllProductsService()
export default allProductsService