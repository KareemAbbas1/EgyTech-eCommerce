
const NewArrivalCard = ({ product }) => {
    const image = product && product.images[0];
    const productName = product && product.name;

    return (
        <div className="new-arrival-card">
            <a href="#">
                <img src={image} alt='product image' className="image" />
                <div className="middle">
                    <div className="text">{productName}</div>
                </div>
            </a>
        </div>
    )
}

export default NewArrivalCard