import React,{useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container} from "react-bootstrap";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './product.css'
import ProductCard from '../../product card/ProductCard';
import ProductTab from './ProductTab';
import ProductDetails from './ProductDetails';
import StarRating from './../../starRating/StarRating ';
import { products } from "../../../utils/_Data";

 const Produt =()=>{
  let settings = {
    infinite: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll:4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 3,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        },
     
      },
      {breakpoint: 400, 
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        },
      }
    ]
  }
  const [similarproductsList, setSimilarProductsList] = useState(null)
 const [product, setProduct] = useState(null);

 
  useEffect(() => {
  const handleProducts = async () => {
    setTimeout(() => {

        const productsArray = Object.keys(products).map(key => {
            return products[key];
        });
        setProduct(productsArray[0])
        const similarProductsArray = productsArray.filter(p => {
          return p.type === "laptop"
      });
      setSimilarProductsList(similarProductsArray)  

    }, 100)


}
handleProducts();
}, [])

  return (<>
      <Container>
        {/*product details */}       
        <section>
          <ProductDetails product={product} />
        </section>
        {/*tabs section */}
        <section className='tabs'>    
          <ProductTab product={product}/>       
        </section>

        {/* slider for similar products */}
        <section>
          <h2>Simillar Products</h2>
          <Slider {...settings} >
          {similarproductsList &&
          similarproductsList.map( (prod, index) => (
          <Col key={index} >
            <ProductCard key={index} product={prod} rating={<StarRating />} />
          </Col>
          ))}
          </Slider>
        </section>
      </Container>
    </>
  );
     }
 
 
 export default Produt;