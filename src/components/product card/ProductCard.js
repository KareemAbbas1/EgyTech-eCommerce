import { Card, Button } from "react-bootstrap";
import "./productCard.css"



const ProductCard = ({ product, rating }) => {

    const image = product && product.images[0];
    const productName = product && product.name;
    const productDescription = product && product.description;
    const price = product && product.price;
    const oldPrice = product && product.oldPrice;

    return (
        <div className="d-flex gap-3 mt-5 mb-5">
            <Card style={{ minWidth: '16.6rem' }}>
                <div className="product-card">
                <a href="#">
                {rating}

                    <Card.Img className="image" variant="top" src={image}
                        style={{
                            minHeight: "17rem",
                            maxHeight: "17rem",
                            borderBottom: '1px solid #C9C6C6'
                        }} />
                        <div className="middle">
                            <div className="text">More Details</div>
                        </div>
                </a>
                </div>
                <Card.Body>
                    <Card.Text style={{ fontSize: '0.9rem' }}>
                        {productDescription}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Title className="h6">{productName}</Card.Title>
                        <div className="d-flex align-items-center">

                            {/* Old price field(only for on-sale products) */}
                            <span style={{ fontSize: '13px', textDecoration: 'line-through' }}>{oldPrice}</span>

                            <Card.Title>{price}</Card.Title>
                        </div>
                    </div>
                    <Button className="w-100 text-white pt-2" variant="primary"><h5>Add to Cart</h5></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard