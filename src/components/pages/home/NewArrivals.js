import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import NewArrivalCard from "./NewArrivalCard";



const NewArrivals = ({ products }) => {

    const [newArrivals, setNewArrivals] = useState();
    const [newestProduct, setNewestProduct] = useState();

    useEffect(() => {

        const handleNewArrivals = async () => {

            setTimeout(() => {
                const productsArray = Object.keys(products).map(key => {
                    return products[key];
                });

                const newProductsArray = productsArray.filter(p => {
                    return p.state === "new arrival"
                });

                const firstProduct = newProductsArray.shift();
                setNewestProduct(firstProduct);

                const newProducts = newProductsArray.slice(1, 5);
                setNewArrivals(newProducts);

            }, 100);
        }
        handleNewArrivals();
    }, []);
    // console.log(newArrivals);
    // console.log(newestProduct);

    return (
        <section>
            <Container className="mt-4">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="h-line"></div><h3 className="new-arrivals">New Arrivals</h3><div className="h-line"></div>
                </div>
            </Container>

            {/* Products Grid */}
            <Container className="new-arrivals-products mb-5 mt-5">
                <Row className="d-flex justify-content-between mx-1 h-100" >

                    <Col className="grid-col" lg={6}
                        style={{
                            marginTop: '0.8%'
                        }}>
                        <NewArrivalCard product={newestProduct} />
                    </Col>

                    <Col className="d-grid grid-col" lg={6} >
                        <ul className="new-arrival-grid">
                            {newArrivals && newArrivals.map(p => (
                                <li key={p.id}>
                                    <NewArrivalCard product={p}/>
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NewArrivals;

{/* <Row className="d-flex justify-content-between mx-1" style={{ height: '100%'}}>

<Col lg={6} style={{ border: '1px solid', width: '49.3%' }}>

</Col>

<Col className="d-grid gap-3" lg={6} style={{width: '49.3%'}} >
    <Row className="gap-3">

        <Col style={{ border: '1px solid' }}>
            
        </Col>
        <Col style={{ border: '1px solid' }}>
            
        </Col>
    </Row>

    <Row className="gap-3">
        <Col style={{ border: '1px solid' }}>
            
        </Col>
        <Col style={{ border: '1px solid' }}>
            
        </Col>
    </Row>

</Col>
</Row> */}