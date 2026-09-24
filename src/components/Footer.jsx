function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-main">
                <div className="footer-brand">
                    <h2>MYSTORE</h2>

                    <p>
                        Simple products designed
                        for everyday living.
                    </p>
                </div>

                <div className="footer-column">
                    <h3>Shop</h3>
                    <a href="/shop">All Products</a>
                    <a href="/collections">Collections</a>
                    <a href="/new">New Arrivals</a>
                </div>

                <div className="footer-column">
                    <h3>Company</h3>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <a href="/careers">Careers</a>
                </div>

                <div className="footer-column">
                    <h3>Support</h3>
                    <a href="/faq">FAQ</a>
                    <a href="/shipping">Shipping</a>
                    <a href="/returns">Returns</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2026 MYSTORE. All rights reserved.</p>

                <div>
                    <a href="/privacy">Privacy</a>
                    <a href="/terms">Terms</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;