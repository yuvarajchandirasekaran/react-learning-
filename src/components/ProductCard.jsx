import { useState } from "react";

function ProductCard({ product, onAddToCart }) {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((currentQuantity) => currentQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((currentQuantity) =>
            currentQuantity > 1 ? currentQuantity - 1 : 1
        );
    };

    const handleAddToCart = () => {
        onAddToCart(product, quantity);
        setQuantity(1);
    };

    return (
        <div className="product-card">
            {/* Your existing product image/details */}

            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <div className="quantity-control">
                <button onClick={handleDecrease}>−</button>

                <span>{quantity}</span>

                <button onClick={handleIncrease}>+</button>
            </div>

            <button
                className="add-cart-btn"
                onClick={handleAddToCart}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;