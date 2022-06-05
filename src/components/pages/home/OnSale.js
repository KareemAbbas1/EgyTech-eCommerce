import { Container } from "react-bootstrap";
import ProductCard from "../../product card/ProductCard";
import { useState, useEffect } from "react";


const OnSale = ({ products }) => {

    const [onSale, setOnSale] = useState();

    useEffect(() => {

        const handleOnSale = async () => {

            setTimeout(() => {

                const productsArray = Object.keys(products).map(key => {
                    return products[key];
                });
        
                const onSaleProductsArray = productsArray.filter(p => {
                    return p.state === "on sale"
                });
        
                const onSaleProducts = onSaleProductsArray.slice(0, 8);
                setOnSale(onSaleProducts);

            }, 100)
        }
        handleOnSale();
    }, [])

    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center">
                <div className="h-line-onSale"></div><h3 className="on-sale">On Sale</h3><div className="h-line-onSale"></div>
            </div>

            <div>
                <ul className="products-grid">
                    {onSale && onSale.map(p => (
                        <li key={p.id}>
                            <ProductCard product={p} />
                        </li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

export default OnSale