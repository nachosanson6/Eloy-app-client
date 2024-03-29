import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Loading from "../../components/Loading/Loading";
import { Container, ButtonGroup, Button, Dropdown } from "react-bootstrap";
import allProductsService from "../../services/allProducts.services";
import SelectecProductsCarousel from "../../components/SelectecProductsCarousel/SelectecProductsCarousel";
import './ProductGalleryPage.css'
import VertialLine from "../../components/VerticalLine/VerticalLine";
import Finder from "../../components/Finder/Finder";

const ProductsGalleryPage = () => {

    const [currentProducts, setCurrentProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [initialLoad, setInitialLoad] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        loadProducts();
        handleScroll(); // Aquí agregamos el desplazamiento
    }, [currentPage, pageSize, searchTerm]);

    const loadProducts = () => {
        if (initialLoad) {
            // Solo realiza la carga inicial la primera vez
            allProductsService
                .getAllProducts()
                .then(({ data }) => {
                    const shuffledProducts = [...data].sort(() => Math.random() - 0.5);
                    setAllProducts(shuffledProducts);
                    const filteredProducts = searchTerm
                        ? shuffledProducts.filter(product =>
                            product.name.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        : shuffledProducts;

                    // Aplicar la paginación para la carga inicial
                    const startIndex = (currentPage - 1) * pageSize;
                    const endIndex = startIndex + pageSize;
                    const initialProducts = filteredProducts.slice(startIndex, endIndex);
                    setCurrentProducts(initialProducts);
                    setInitialLoad(false);
                })
                .catch((err) => console.log(err));
        } else {
            // Para las cargas posteriores
            const startIndex = (currentPage - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            const filteredProducts = searchTerm
                ? allProducts.filter(product =>
                    product.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                : allProducts;
            const newProducts = filteredProducts.slice(startIndex, endIndex);
            setCurrentProducts(newProducts);
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



    if (initialLoad) {
        return <Loading />;
    }

    return (
        <div className="productGalleryPage">
            <Container>
                <Finder onSearchTermChange={setSearchTerm} />

                <div id="topFrame" className="topFrame">
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
                <VertialLine />
                <SelectecProductsCarousel photos={allProducts} />
            </Container>
        </div>
    );
};

export default ProductsGalleryPage;
