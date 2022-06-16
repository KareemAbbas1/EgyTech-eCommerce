import { Card, Button } from "react-bootstrap";
import "./productCard.css";
import { Link } from "react-router-dom";
import Rating from "../Rating";



const ProductCard = ({ product }) => {

    const id = product && product.id;
    const rate = product && product.rate;
    const image = product && product.images[0];
    const productName = product && product.name;
    const productDescription = product && product.description;
    const price = product && product.price;
    const oldPrice = product && product.oldPrice;

    return (
        <div className="d-flex gap-3 mt-5 mb-5">
            <Card className="card-container">
                <div className="product-card">
                    <div style={{ position: 'relative', top: '0.5rem', left: '0.5rem' }}>
                        <Rating rate={rate} />
                    </div>
                    <Link to={`/products/${id}`}>
                        <Card.Img className="image" variant="top" src={image}
                            style={{
                                minHeight: "14rem",
                                maxHeight: "14rem",
                                borderBottom: '1px solid #C9C6C6'
                            }} />
                        <div className="middle">
                            <div className="text">More Details</div>
                        </div>
                    </Link>
                </div>
                <Card.Body className="pt-2 px-2">
                    <Card.Text className="" style={{ fontSize: '0.9rem' }}>
                        {productDescription}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-end"
                    style={{
                        position: 'absolute',
                        width: '94%',
                        bottom: '3.8rem'
                    }}
                    >
                        <Card.Title className="h6">{productName}</Card.Title>
                        <div className="d-flex align-items-center">

                            {/* Old price field(only for on-sale products) */}
                            <span style={{ fontSize: '13px', textDecoration: 'line-through' }}>{oldPrice && `$${oldPrice}`}</span>

                            <Card.Title>${price}</Card.Title>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Button
                            style={{
                                width: '95%',
                                position: 'absolute',
                                bottom: '0.8rem'
                            }}
                            className="text-white pt-2"
                            variant="primary"
                        >
                            <h5>Add to Cart</h5>
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard