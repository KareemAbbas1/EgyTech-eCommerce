import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";
import ProductCard from "./product card/ProductCard";


const ProductsSlider = ({ products }) => {

    const [slideProducts, setSlideProducts] = useState();

    useEffect(() => {
        products && setSlideProducts(products);
    }, [products]);
    // console.log(slideProducts)



    const properties = {
        autoplay: false,
        duration: 500,
        transitionDuration: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        indicators: true,
        prevArrow: <div className="arrow arrow-left-products"></div>,
        nextArrow: <div className="arrow arrow-right-products"></div>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    autoplay: false,
                    slidesToShow: 4,
                    slidesToScroll: 1
                },
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <Slide {...properties}>
            {slideProducts && slideProducts.map(p => (
                <div key={p.id} >
                    <ProductCard product={p} />
                </div>
            ))};
        </Slide>
    );
}

export default ProductsSlider