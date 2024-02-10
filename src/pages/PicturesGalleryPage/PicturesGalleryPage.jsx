import { useEffect, useState } from "react"
import pictureService from "../../services/picture.services"
import ProductList from "../../components/ProductList/ProductList"
import Loading from "../../components/Loading/Loading"
import { Button, Container } from "react-bootstrap"
import SelectecProductsCarousel from "../../components/SelectecProductsCarousel/SelectecProductsCarousel"
import VertialLine from "../../components/VerticalLine/VerticalLine"
import './PicturesGalleryPage.css'
import Finder from "../../components/Finder/Finder"
import allProductsService from "../../services/allProducts.services"

const PicturesGalleryPage = () => {

    const [pictures, setPictures] = useState(null)
    const [photos, setPhotos] = useState(null)
    const [currentPictures, setCurrentPictures] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [initialLoad, setInitialLoad] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        loadPhotos()
        loadPictures()
        handleScroll();
    }, [currentPage, pageSize, searchTerm])

    const loadPictures = () => {
        if (initialLoad) {
            pictureService
                .getAllPictures()
                .then(({ data }) => {
                    const shuffledPictures = [...data].sort(() => Math.random() - 0.5);
                    setPictures(shuffledPictures);

                    const filteredPictures = searchTerm
                        ? shuffledPictures.filter(picture =>
                            picture.name.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        : shuffledPictures;

                    // Aplicar la paginación para la carga inicial
                    const startIndex = (currentPage - 1) * pageSize;
                    const endIndex = startIndex + pageSize;
                    const initialPictures = filteredPictures.slice(startIndex, endIndex);
                    setCurrentPictures(initialPictures);

                    setInitialLoad(false);
                })
                .catch(err => console.log(err));
        } else {
            // Para las cargas posteriores
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const filteredPictures = searchTerm
                ? pictures.filter(picture =>
                    picture.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                : pictures;

            const newPictures = filteredPictures.slice(startIndex, endIndex);
            setCurrentPictures(newPictures);
        }
    };

    const loadPhotos = async () => {
        try {
            const { data } = await allProductsService.getAllPhotos();
            const shuffledPhotos = data.sort(() => Math.random() - 0.5);
            setPhotos(shuffledPhotos);
        } catch (error) {
            console.error("Error loading photos:", error);
        }
    };

    const handleScroll = () => {
        setTimeout(() => {
            const topFrameElement = document.getElementById('topFrame');
            if (topFrameElement) {
                topFrameElement.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    };

    const handlePageChange = (direction) => {
        if (direction === "prev" && currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
            handleScroll();
        } else if (direction === "next" && currentProducts.length === pageSize) {
            setCurrentPage((prevPage) => prevPage + 1);
            handleScroll();
        }
    };

    const handlePageSizeChange = (event) => {
        setPageSize(parseInt(event.target.value, 10));
        setCurrentPage(1);
    };

    if (!pictures) {
        return (
            <Loading />
        )
    }

    return (
        <div className="picturesGalleryPage">
            <Container>
                <Finder onSearchTermChange={setSearchTerm} />
                <SelectecProductsCarousel photos={photos} />
                <VertialLine />
                <div id="topFrame" className="topFrame">
                    <h1>Todos los cuadros</h1>
                    <div className="pageSelection">
                        <select id="pageSize" value={pageSize} onChange={handlePageSizeChange}>
                            {[15, 30, 45].map((size) => (
                                <option key={size} value={size}>
                                    Ver {size} obras
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <ProductList element={currentPictures} />
                <div className="pageButtons">
                    <Button onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
                        &lt;
                    </Button>
                    <span>{currentPage}</span>
                    <Button
                        onClick={() => handlePageChange("next")}
                        disabled={currentPictures.length < pageSize}
                    >
                        &gt;
                    </Button>
                </div>
            </Container>
        </div>
    )
}
export default PicturesGalleryPage