import { Card, Button } from "react-bootstrap";



const ProductCard = ( {rating}) => {
    return (
        <div className="d-flex gap-3 mt-5 mb-5">
            <Card style={{ minWidth: '15rem' }}>
                <a href="#" >
                {rating}
                    <Card.Img variant="top" src="https://alarm-stores.com/wp-content/uploads/2020/10/iphone-12-pro-blue-hero.png"
                        style={{
                            minHeight: "17rem",
                            width: '100%',
                            objectFit: 'cover',
                            borderBottom: '1px solid #C9C6C6'
                        }} />
                        
                </a>
                <Card.Body>
                    <Card.Text style={{ fontSize: '0.9rem' }}>
                        Some quick example text to build on the card title and make
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Title>Iphone 13 Pro</Card.Title>
                        <div className="d-flex align-items-center">

                            {/* Old price field(only for on sale products) */}
                            <span style={{ fontSize: '13px', textDecoration: 'line-through' }}>$23.99</span>
                            
                            <Card.Title>$1800</Card.Title>
                        </div>
                    </div>
                    <Button className="w-100 text-white pt-2" variant="primary"><h5>Add to Cart</h5></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard