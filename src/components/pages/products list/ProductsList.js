import { Container, Row, Col } from "react-bootstrap";
import './productList.css'
import ProductCard from '../../product card/ProductCard'
import { BsChevronDoubleRight } from "react-icons/bs";
import { useEffect, useState } from "react";
import Paginationn from "./Pagination";
const ProductsList = ({ products }) => {

  const [productsList, setProductsList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    const handleProductsList = async () => {

      setTimeout(() => {
        const productsArray = Object.keys(products).map(key => {
          return products[key];
        })
        setProductsList(productsArray);

      }, 100)
    }
    handleProductsList();
  }, [products])

  // Get Current Products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productsList && productsList.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <Container className='mb-5 py-5'>
      <div className="d-flex justify-content-between ">
        <div className="heading" >
          <h2 className="heading-txt">Categories</h2>
          <BsChevronDoubleRight />
        </div>
        
      </div>

      <Container>
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>

      <Container className='d-flex flex-wrap justify-content-between align-items-center'>

        <Row>
          {currentProducts && currentProducts.map(p => (
            <Col key={p.id} xs={12} sm md={6} lg={3}>
              <ProductCard key={p.id} product={p} />
            </Col>
          ))}
        </Row>

      </Container>
      <div className="d-flex justify-content-center">
        <Paginationn
          productsPerPage={productsPerPage}
          totalProducts={productsList && productsList.length}
          paginate={paginate}
        />
      </div>
    </Container>
  )
}

export default ProductsList