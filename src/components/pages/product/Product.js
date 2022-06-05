import React from 'react';
import './product.css'
import ShippingBadge from "../../../assets/shipping.png";
import GuaranteedBadge from "../../../assets/guaranteed.png";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {Tabs, Tab,  Row,  Col, Container} from "react-bootstrap";
 //import ProductCard from '../../product card/ProductCard';
 import StarRating from '../../starRating/StarRating ';
 import { BsPlus } from "react-icons/bs";

 const Produt =()=>{
         return (
             <Container>
                 <section className='details-container' >
                 <div className='product-imgs'>

                 </div>
                     <div className='product-details'>
                       <h2>Product Name</h2>
                       <div style={{position: "relative", display: "flex" }}>

                       <StarRating /> 
                       </div> <br/>
                        <p style={{color: "rgb(68, 66, 66)"}}> 4 reviews</p>
                       
                       <p>Vendor: <span>Legion</span></p>
                       <p>Availability: <span>10 in stock</span></p>
                       <p>Product Type: <span>Laptop</span></p>
                       <br />
                       <p>Nam tempus turpis at metus scelerisque placerat nulla plas deumantos solicitud felis. 
                           Pellentesque diam dolor, ele etos  mattis drostique des commodo pharetras...</p>
                           <p className='price'>$18.99</p>
                           <p> Color: <span>Black</span></p>
                           <div className='color' ></div>
                           <div> 1 <BsPlus />  </div>
                           <button>Add To Cart</button>
                           <button>Buy Now </button>

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

        <span className="vertical-line"></span>
      </section>




                     </div>

                
                 </section>



                 <secion>
                 <Row>
                     <Col>
                         <Tabs defaultActiveKey="Details" 
                               id="uncontrolled-tab-example" className="mb-3">
                               
                             <Tab eventKey="Details" title="Product Details">
                                 <h3>11111111</h3>
                                 <p>Nam tempus turpis at metus scelerisque placerat nulla plas deumantos solicitud felis. Pellentesque diam dolor, ele etos  mattis drostique des commodo pharetras placerat nulla plas deumantos solicitud felis. Pellentesque diam dolor, ele etos  mattis drostique des commodo  etos  mattis drostique des commodo
                                     etos  mattis drostique des commodo</p>
                             </Tab>
                             <Tab eventKey="Reviews" title="Customer Reviews">
                                <h3>2222222</h3>
                                <p>Nam tempus turpis at metus scelerisque placerat nulla plas deumantos solicitud felis. Pellentesque diam dolor, ele etos  mattis drostique des commodo pharetras placerat nulla plas deumantos solicitud felis. Pellentesque diam dolor, ele etos  mattis drostique des commodo  etos  mattis drostique des commodo
                                       etos  mattis drostique des commodo</p>
                             </Tab>
                             <Tab eventKey="Shipping" title="Shipping & Returns" >
                                <h3>333333333333</h3>   
                                <p>Nam tempus turpis at metus scelerisque placerat nulla plas deumantos solicitud felis. Pellentesque diam dolor, ele etos  mattis drostique des commodo pharetras placerat nulla plas deumantos solicitud felis. Pellentesque diam dolor, ele etos  mattis drostique des commodo  etos  mattis drostique des commodo
                                     etos  mattis drostique des commodo</p>                       
                            </Tab>
                         </Tabs>
                     </Col>
                 </Row>
                 </secion>
             </Container>
         );
     }
 
 
 export default Produt;