function Header({ cartItemCount, cartTotal, onCartClick }) {
    return (
        <header className="site-header">
            <div className="announcement">
                Free shipping on orders over ₹999
            </div>

            <div className="header-main">
                <a href="/" className="logo">
                    MYSTORE
                </a>

                <nav className="main-nav">
                    <a href="/">Home</a>
                    <a href="/shop">Shop</a>
                    <a href="/collections">Collections</a>
                    <a href="/about">About</a>
                </nav>

                <div className="header-actions">
                    <button aria-label="Search">
                        Search
                    </button>

                    <button aria-label="Account">
                        Account
                    </button>

             <button
                className="cart-button"
                onClick={onCartClick}
            >
                🛒
                <span className="cart-count">
                    ({cartItemCount})
                </span>
            </button>
                </div>
            </div>

        </header>
    );
}

export default Header;