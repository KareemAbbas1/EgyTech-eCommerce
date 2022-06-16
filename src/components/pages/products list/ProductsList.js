import React, {useEffect, useState, useContext} from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './productList.css'
import ProductCard from '../../product card/ProductCard'
import StarRating from '../../starRating/StarRating '
import { products } from "../../../utils/_Data";
import { Link } from 'react-router-dom';
import { BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useParams } from 'react-router-dom';
const ProductsList = ({ product }) => {


  const [productsList, setProductsList] = useState(null)
  useEffect(() => {

  const handleProducts = async () => {

    setTimeout(() => {

        const productsArray = Object.keys(products).map(key => {
            return products[key];
        });
        setProductsList(productsArray)  


    }, 100)
}
handleProducts();
}, [])



  return (
    <>
    <Container className='m-15 '>
      <div className="d-flex justify-content-between header-cont">
        <div className="heading" >
          <h2 className="heading-txt">Categories</h2>
          <BsChevronDoubleRight />
        </div>
        <div className="d-flex justify-content-between align-items-center page-num ">
          <BsChevronLeft />
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <BsChevronRight />
        </div>
      </div>

      <Container>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>

    <Container className='d-flex flex-wrap justify-content-between align-items-center'>
    <Row>
        {productsList &&  productsList.map( (prod) => (
           <Col key={prod.id} xs={12} sm md={6} lg={3}>
             <Link to={'/products/'+prod.id} >
            <ProductCard key={prod.id} product={prod} rating={<StarRating />} />
            </Link>
          </Col>
        ))}
    </Row>
    </Container>
    <div className="d-flex page-num sec">
        <BsChevronLeft />
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <BsChevronRight />
      </div>
    </Container>
  </>
  )
}

export default ProductsList