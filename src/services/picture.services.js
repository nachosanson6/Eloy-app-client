import axios from 'axios'

class PictureService {
    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/api/pictures`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    createPicture(pictureDataForm) {
        return this.api.post('/newPicture', pictureDataForm)
    }

    getPicturesPhotos() {
        return this.api.get('/getPicturesPhotos')
    }

    getAllPictures() {
        return this.api.get('/getAllPictures')
    }

    getOnePicture(picture_id) {
        return this.api.get(`/getOnePicture/${picture_id}`)
    }

    editPicture(pictureDataForm) {
        return this.api.post(`/editPicture/`, pictureDataForm)
    }

    deletePicture(picture_id) {
        return this.api.post(`/deletePicture/${picture_id}`)
    }
}
const pictureService = new PictureService()
export default pictureService