import "./home.css";
import { Container, Button } from "react-bootstrap";
import ShippingBadge from "../../../assets/shipping.png";
import GuaranteedBadge from "../../../assets/guaranteed.png";
import WarrantyBadge from "../../../assets/warranty.png";
import NewArrivals from "./NewArrivals.js"
import { products } from "../../../utils/_Data";
import OnSale from "./OnSale";
import Brands from "./Brands";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      {/* Banner */}
      <section className='banner d-flex align-items-center'>
        <Container>
          <h1>Leveraging tech to drive <br></br>a better IT experience.</h1>
          <Button className="shop-now">Shop Now</Button>
        </Container>
      </section>

      {/* Badges Section */}
      <section className="container d-flex align-items-center justify-content-between mt-2 badges-section">
        <span className="badge-card">
          <img src={ShippingBadge} alt='shipping badge' className="badges" />
          <span className="ms-3">Fast Shipping & Returns </span>
        </span>

        <span className="vertical-line"></span>

        <span className="badge-card">
          <img src={GuaranteedBadge} alt='shipping badge' className="badges" />
          <span className="ms-3">Lowest Price Guarantee</span>

        </span>

        <span className="vertical-line"></span>

        <span className="badge-card">
          <img src={WarrantyBadge} alt='shipping badge' className="badges" />
          <span className="ms-3">Longest Warranties Offer</span>

        </span>
      </section>

      {/* New Arrivals Section */}
      <NewArrivals products={products} />

      {/* Sub Hero */}
      <section className="sub-hero d-flex align-items-center">
        <Container className="d-grid justify-content-lg-end justify-content-md-center">
          <p>The largest community <br />of tech enthusiasts</p>
          <Button className="register sub-her-btn">Register</Button>
        </Container>
      </section>

      {/* On Sale */}
      <OnSale products={products}/>

      {/* Brands */}
      <Brands />

      {/* Testimonials */}
      <Testimonials />
    </div>
  )
}

export default Home