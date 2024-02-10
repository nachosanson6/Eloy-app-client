import { useEffect, useState } from "react";
import sculptureService from "../../services/sculpture.services";
import ProductList from "../../components/ProductList/ProductList";
import Loading from "../../components/Loading/Loading";
import { Button, Container } from "react-bootstrap";
import SelectecProductsCarousel from "../../components/SelectecProductsCarousel/SelectecProductsCarousel";
import './SculpturesGalleryPage.css';
import VertialLine from "../../components/VerticalLine/VerticalLine";
import Finder from "../../components/Finder/Finder";
import allProductsService from "../../services/allProducts.services"

const SculpturesGalleryPage = () => {

    const [sculptures, setSculptures] = useState(null);
    const [photos, setPhotos] = useState(null)
    const [currentProducts, setCurrentProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [initialLoad, setInitialLoad] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        loadPhotos()
        loadSculptures();
        handleScroll();
    }, [currentPage, pageSize, searchTerm]);

    const loadSculptures = () => {
        if (initialLoad) {
            sculptureService
                .getAllSculptures()
                .then(({ data }) => {
                    const shuffledSculptures = [...data].sort(() => Math.random() - 0.5);
                    setSculptures(shuffledSculptures);

                    const filteredSculptures = searchTerm
                        ? shuffledSculptures.filter(sculpture =>
                            sculpture.name.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        : shuffledSculptures;

                    // Aplicar la paginación para la carga inicial
                    const startIndex = (currentPage - 1) * pageSize;
                    const endIndex = startIndex + pageSize;
                    const initialSculptures = filteredSculptures.slice(startIndex, endIndex);
                    setCurrentProducts(initialSculptures);

                    setInitialLoad(false);
                })
                .catch(err => console.log(err));
        } else {
            // Para las cargas posteriores
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const filteredSculptures = searchTerm
                ? sculptures.filter(sculpture =>
                    sculpture.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                : sculptures;

            const newSculptures = filteredSculptures.slice(startIndex, endIndex);
            setCurrentProducts(newSculptures);
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

    if (!sculptures) {
        return (
            <Loading />
        );
    }

    return (
        <div className="sculpturesGalleryPage">
            <Container>
                <Finder onSearchTermChange={setSearchTerm} />
                <SelectecProductsCarousel photos={photos} />
                <VertialLine />
                <div id="topFrame" className="topFrame">
                    <h1>Todas las esculturas</h1>
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
                <ProductList element={currentProducts} />
                <div className="pageButtons">
                    <Button onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
                        &lt;
                    </Button>
                    <span>{currentPage}</span>
                    <Button
                        onClick={() => handlePageChange("next")}
                        disabled={currentProducts.length < pageSize}
                    >
                        &gt;
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default SculpturesGalleryPage;