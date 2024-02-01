import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Loading from "../../components/Loading/Loading";
import { Container, ButtonGroup, Button, Dropdown } from "react-bootstrap";
import allProductsService from "../../services/allProducts.services";
import SelectecProductsCarousel from "../../components/SelectecProductsCarousel/SelectecProductsCarousel";
import './ProductGalleryPage.css'
import VertialLine from "../../components/VerticalLine/VerticalLine";
const ProductsGalleryPage = () => {
    const [currentProducts, setCurrentProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        loadProducts();
    }, [currentPage, pageSize]);

    const loadProducts = () => {
        if (initialLoad) {
            // Solo realiza la carga inicial la primera vez
            allProductsService
                .getAllProducts()
                .then(({ data }) => {
                    const shuffledProducts = [...data].sort(() => Math.random() - 0.5);
                    setAllProducts(shuffledProducts);
                    const startIndex = (currentPage - 1) * pageSize;
                    const endIndex = startIndex + pageSize;
                    const initialProducts = shuffledProducts.slice(startIndex, endIndex);
                    setCurrentProducts(initialProducts);
                })
                .catch((err) => console.log(err));
            setInitialLoad(false);
        } else {
            // Para las cargas posteriores
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const newProducts = allProducts.slice(startIndex, endIndex);
            setCurrentProducts(newProducts);
        }
    };

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

    if (initialLoad) {
        return <Loading />;
    }

    return (
        <div className="ProductGalleryPage">
            <Container>
                <SelectecProductsCarousel />
                <VertialLine />
                <div className="topFrame">
                    <h1>Todos los productos</h1>
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

export default ProductsGalleryPage;
