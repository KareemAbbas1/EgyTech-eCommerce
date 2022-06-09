import { Card, Container, Image } from "react-bootstrap";
import Stars from "../../../assets/stars.png";


const Testimonials = () => {
    return (
        <section className="container d-grid align-items-center testimonials py-5">
                <h2>What Our Clients Say </h2>
                <p className="mt-2">rinting and typesetting industry. Lorem rinting and typesetting industry. Lorem</p>
            <Container className="d-flex justify-content-between testimonials-cards">
                <Card className="testimonials-card d-flex align-items-center mb-5">
                    <Image roundedCircle className="testimonials-card-image" src="https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1030&q=80" />
                    <Card.Body>
                        <Card.Title><img src={Stars} alt='rate' style={{width: '5rem', height: 'auto'}} /></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="testimonials-card d-flex align-items-center mb-5">
                    <Image roundedCircle className="testimonials-card-image" src="https://images.unsplash.com/photo-1541499768294-44cad3c95755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" />
                    <Card.Body>
                        <Card.Title><img src={Stars} alt='rate' style={{width: '5rem', height: 'auto'}} /></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="testimonials-card d-flex align-items-center mb-5">
                    <Image roundedCircle className="testimonials-card-image" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
                    <Card.Body>
                        <Card.Title><img src={Stars} alt='rate' style={{width: '5rem', height: 'auto'}} /></Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </section>
    )
}

export default Testimonials