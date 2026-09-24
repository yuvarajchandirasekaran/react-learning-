function ProductCard({ product }) {
    return (
        <article className="product-card">
            <div className="product-image">
                {product.badge && (
                    <span className="product-badge">
                        {product.badge}
                    </span>
                )}

                <span>{product.name}</span>
            </div>

            <div className="product-info">
                <p className="product-category">
                    {product.category}
                </p>

                <h3>{product.name}</h3>

                <div className="product-bottom">
                    <span className="product-price">
                        ₹{product.price}
                    </span>

                    <button>
                        Add
                    </button>
                </div>
            </div>
        </article>
    );
}

export default ProductCard;