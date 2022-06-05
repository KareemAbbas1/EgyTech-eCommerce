import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import './productList.css'
import ProductCard from '../../product card/ProductCard'
import StarRating from '../../starRating/StarRating '
import { BsChevronDoubleRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
const ProductsList = () => {

  const myArray = [...Array(15)];
  
  return (
    <Container className='m-15'>
      <div className="d-flex justify-content-between ">
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
        {
        myArray.map( (prod, index) => (
          <Col key={index} xs={12} sm md={6} lg={3}>
            <ProductCard key={index} rating={<StarRating />}  />
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
  )
}

export default ProductsList