import { Container } from "react-bootstrap";
import ProductCard from "../../product card/ProductCard";


const OnSale = () => {
    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
                <div className="h-line-onSale"></div><h3 className="on-sale">On Sale</h3><div className="h-line-onSale"></div>
            </div>

            <div className="d-flex gap-2 m-0">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="d-flex gap-2 m-0">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </Container>
    )
}

export default OnSale