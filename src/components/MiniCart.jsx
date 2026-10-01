function MiniCart({
    isOpen,
    cartItems,
    cartTotal,
    onClose,
    onUpdateQuantity,
    onRemoveItem,
}) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="minicart-overlay">
            <div className="minicart">
                <div className="minicart-header">
                    <h2>Your Cart</h2>

                    <button
                        className="minicart-close"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="minicart-empty">
                        <p>Your cart is empty.</p>
                    </div>
                ) : (
                    <>
                        <div className="minicart-items">
                            {cartItems.map((item) => (
                                <div
                                    className="minicart-item"
                                    key={item.id}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div className="minicart-item-details">
                                        <h3>{item.name}</h3>

                                        <p>
                                            ₹{item.price} × {item.quantity}
                                        </p>

                                        <strong>
                                            ₹
                                            {(
                                                item.price * item.quantity
                                            ).toLocaleString("en-IN")}
                                        </strong>

                                        <div className="minicart-quantity">
                                            <button
                                                onClick={() =>
                                                    onUpdateQuantity(
                                                        item.id,
                                                        item.quantity - 1
                                                    )
                                                }
                                            >
                                                −
                                            </button>

                                            <span>{item.quantity}</span>

                                            <button
                                                onClick={() =>
                                                    onUpdateQuantity(
                                                        item.id,
                                                        item.quantity + 1
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            className="remove-item"
                                            onClick={() =>
                                                onRemoveItem(item.id)
                                            }
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="minicart-footer">
                            <div className="minicart-total">
                                <span>Total</span>

                                <strong>
                                    ₹{cartTotal.toLocaleString("en-IN")}
                                </strong>
                            </div>

                            <button className="checkout-btn">
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default MiniCart;