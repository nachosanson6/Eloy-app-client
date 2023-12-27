import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PicturesGalleryPage from '../pages/PicturesGalleryPage/PicturesGalleryPage'
import SculpturesGalleryPage from '../pages/SculpturesGalleryPage/SculpturesGalleryPage'
SculpturesGalleryPage

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/picturesGallery'} element={<PicturesGalleryPage />} />
            <Route path={'/sculpturesGallery'} element={<SculpturesGalleryPage />} />
        </Routes>

    )
}
export default AppRoutes