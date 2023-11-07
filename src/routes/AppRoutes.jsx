import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PicturesGalleryPage from '../pages/PicturesGalleryPage/PicturesGalleryPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/picturesGallery'} element={<PicturesGalleryPage />} />

        </Routes>

    )
}
export default AppRoutes