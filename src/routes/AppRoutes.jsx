import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import PicturesGalleryPage from '../pages/PicturesGalleryPage/PicturesGalleryPage'
import SculpturesGalleryPage from '../pages/SculpturesGalleryPage/SculpturesGalleryPage'
import JewelryGalleryPage from '../pages/JewelryGalleryPage/JewelryGalleryPage'
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/picturesGallery'} element={<PicturesGalleryPage />} />
            <Route path={'/sculpturesGallery'} element={<SculpturesGalleryPage />} />
            <Route path={'/jewelryGallery'} element={<JewelryGalleryPage />} />
            <Route path={'/productDetails/:product_id'} element={<ProductDetailsPage />} />

        </Routes>

    )
}
export default AppRoutes