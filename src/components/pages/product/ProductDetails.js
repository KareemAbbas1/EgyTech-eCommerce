import React, {useState} from 'react'
import ShippingBadge from "../../../assets/shipping.png";
import GuaranteedBadge from "../../../assets/guaranteed.png";
import 'bootstrap/dist/css/bootstrap.min.css';
 import { Col, Container} from "react-bootstrap";
 import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import StarRating from './../../starRating/StarRating ';

const ProductDetails = ({product}) => {
    const [quantity, setQuantity] = useState(1)
    const [imgSrc , setImgSrc] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF57z05I8sYCKfScs8gQeC7cDJLIbh52HvA&usqp=CAU")

    const onPlus = ()=>{
        setQuantity(quantity + 1)
      }
      const onSubtract = ()=>{
       setQuantity(quantity - 1)
     }
     const myArray = [
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhF57z05I8sYCKfScs8gQeC7cDJLIbh52HvA&usqp=CAU",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskT8ImjCig2wAkq5MGRo-H9UasQwjJN92Sa19uM1hU-D8rxf72LJYcrFJEJexgQvmFlY&usqp=CAU",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBUDKW4z3EQ6-IPhJM043_VSXmScAVcF-qgQ&usqp=CAU",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTbooMq6_OR9QLK5qHcbfhvGBYB8clt8Rg_Q&usqp=CAU",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROO3XYSdlgrx8yHGP1GWjQxCfZqRCliSs-5g&usqp=CAU",
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmHRwBt2XGHuXDalYMkhMQhNAuet2bowpwA&usqp=CAU"
     ];


     let settings = {
       infinite: false,
       speed: 1000,
       arrows: true,
       slidesToShow: 4,
       slidesToScroll:4,
     }
    const backgroundcolor = product ? `${product.color}` : null;
   
  return (
    <Container className='details-container' >
       {
          product && <>
        {/*images*/}
    <div className='product-imgs'>
      <img src={product.images[0]} alt="img" className='main-img' />
      <Slider {...settings} className="slider">
      {
              myArray.map( (prod, index) => (
                <Col key={index} xs={12} sm md={6} lg={3} className="slider-img" >
                       <img 
                       src={prod}
                       alt="img" 
                       className='sub-img' 
                       onClick={()=> setImgSrc(prod)} />
                </Col>
              ))}
      </Slider>
    </div>
  {/*details */}
     <div className='product-details'>
          <h2 className='prod-name'>{product.name}</h2>
          <div style={{position: "relative", display: "flex" ,"marginBottom": "10px"}}>

          <StarRating /> 
          <p className='reviews' > {product.reviews.length} reviews</p>

       </div> <br />
       
       <p>Brand:       <span className='Rtext'>{product.brand}</span></p>
       <p>Availability: <span className='Rtext'>{product.quantity} in stock</span></p>
       <p>Product Type: <span className='Rtext'>{product.type}</span></p>
       <br />
       <p className='details-txt'>{product.productDetails}</p>
           <p className='price'>{product.price}</p>
           <p> Color: </p>
           <div className='color' style={{backgroundColor: backgroundcolor}} ></div> <br/>
           <div className='btns-container'>
           <div className='quantity-container'> 
             <p> {quantity} </p>
             <div className='btns'>
               <button style={{borderBottom:  "2px solid #28CC9E"}} onClick={()=> onPlus()}> + </button>
               <button onClick={()=> onSubtract()}> - </button>
             </div>
             </div>
             <button className='add-btn'>Add To Cart</button>
           </div>
           <button className='buy-btn'>Buy Now </button>

       {/* Badges Section */}
  <section className="container d-flex align-items-center justify-content-between mt-2 badges-section">
    <span className="">
      <img src={ShippingBadge} alt='shipping badge' className="badges" />
      <span className="ms-3">Fast Shipping & Returns </span>
    </span>

    <span className="vertical-line"></span>

    <span>
      <img src={GuaranteedBadge} alt='shipping badge' className="badges" />
      <span className="ms-3">Lowest Price Guarantee</span>
    </span>
  </section>
     </div>      
     </>
}      
 </Container>
  )
}

export default ProductDetails