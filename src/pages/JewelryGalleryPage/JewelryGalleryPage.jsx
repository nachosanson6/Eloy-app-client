import { useEffect, useState } from "react"
import jewelryService from "../../services/jewelry.services"
import ProductList from "../../components/ProductList/ProductList"
import Loading from "../../components/Loading/Loading"
import { Button, Container } from "react-bootstrap"
import SelectecProductsCarousel from "../../components/SelectecProductsCarousel/SelectecProductsCarousel"
import VertialLine from "../../components/VerticalLine/VerticalLine"
import './JewelryGalleryPage.css'

const JewelryGalleryPage = () => {

    const [jewerlry, setJewerlry] = useState(null)
    const [currentProducts, setCurrentProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        loadJewerlry()
    }, [currentPage, pageSize])

    const loadJewerlry = () => {
        if (initialLoad) {
            jewelryService
                .getAllJewelry()
                .then(({ data }) => {
                    setJewerlry(data)
                    const startIndex = (currentPage - 1) * pageSize;
                    const endIndex = startIndex + pageSize;
                    const initialProducts = shuffledProducts.slice(startIndex, endIndex);
                    setCurrentProducts(initialProducts);
                })
                .catch(err => console.log(err))
            setInitialLoad(false);
        } else {
            // Para las cargas posteriores
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const newProducts = jewerlry.slice(startIndex, endIndex);
            setCurrentProducts(newProducts);
        }

    }

    const handlePageChange = (direction) => {
        if (direction === "prev" && currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        } else if (direction === "next" && currentProducts.length === pageSize) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePageSizeChange = (event) => {
        setPageSize(parseInt(event.target.value, 10));
        setCurrentPage(1);
    };

    if (!jewerlry) {
        return (
            <Loading />
        )
    }
    return (
        <div className="jewelryGalleryPage">
            <Container>
                <SelectecProductsCarousel />
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
                <ProductList element={jewerlry} />
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
    )
}
export default JewelryGalleryPage