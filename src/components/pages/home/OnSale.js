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
                console.log(productsArray)  

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
        <section className="mb-5 onSale-section">
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
            <Container className="products-responsive-grid">
                <div>
                    <ul className="d-flex gap-3" style={{ listStyleType: 'none' }}>
                        {onSale && onSale.map(p => (
                            <li key={p.id}>
                                <ProductCard product={p} />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </section>
    )
}

export default OnSale