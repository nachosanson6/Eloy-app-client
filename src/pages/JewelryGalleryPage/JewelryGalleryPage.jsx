import { useEffect, useState } from "react";
import jewelryService from "../../services/jewelry.services";
import ProductList from "../../components/ProductList/ProductList";
import Loading from "../../components/Loading/Loading";
import { Button, Container } from "react-bootstrap";
import SelectecProductsCarousel from "../../components/SelectecProductsCarousel/SelectecProductsCarousel";
import VertialLine from "../../components/VerticalLine/VerticalLine";
import './JewelryGalleryPage.css';
import Finder from "../../components/Finder/Finder";
import allProductsService from "../../services/allProducts.services"

const JewelryGalleryPage = () => {

    const [jewelry, setJewelry] = useState(null);
    const [photos, setPhotos] = useState(null)
    const [currentJewelry, setCurrentJewelry] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [initialLoad, setInitialLoad] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        loadPhotos()
        loadJewelry();
    }, [currentPage, pageSize, searchTerm]);

    const loadJewelry = () => {
        if (initialLoad) {
            jewelryService
                .getAllJewelry()
                .then(({ data }) => {
                    const shuffledJewelry = [...data].sort(() => Math.random() - 0.5);
                    setJewelry(shuffledJewelry);

                    const filteredJewelry = searchTerm
                        ? shuffledJewelry.filter(item =>
                            item.name.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        : shuffledJewelry;

                    // Aplicar la paginación para la carga inicial
                    const startIndex = (currentPage - 1) * pageSize;
                    const endIndex = startIndex + pageSize;
                    const initialJewelry = filteredJewelry.slice(startIndex, endIndex);
                    setCurrentJewelry(initialJewelry);

                    setInitialLoad(false);
                })
                .catch(err => console.log(err));
        } else {
            // Para las cargas posteriores
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const filteredJewelry = searchTerm
                ? jewelry.filter(item =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                : jewelry;

            const newJewelry = filteredJewelry.slice(startIndex, endIndex);
            setCurrentJewelry(newJewelry);
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

    const handlePageChange = (direction) => {
        if (direction === "prev" && currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        } else if (direction === "next" && currentJewelry.length === pageSize) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePageSizeChange = (event) => {
        setPageSize(parseInt(event.target.value, 10));
        setCurrentPage(1);
    };

    if (!jewelry) {
        return (
            <Loading />
        );
    }

    return (
        <div className="jewelryGalleryPage">
            <Container>
                <Finder onSearchTermChange={setSearchTerm} />
                <SelectecProductsCarousel photos={photos} />
                <VertialLine />
                <div className="topFrame">
                    <h1>Toda la bisutería</h1>
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
                <ProductList element={currentJewelry} />
                <div className="pageButtons">
                    <Button onClick={() => handlePageChange("prev")} disabled={currentPage === 1}>
                        &lt;
                    </Button>
                    <span>{currentPage}</span>
                    <Button
                        onClick={() => handlePageChange("next")}
                        disabled={currentJewelry.length < pageSize}
                    >
                        &gt;
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default JewelryGalleryPage;