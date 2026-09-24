function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <span className="hero-eyebrow">
                    NEW COLLECTION
                </span>

                <h1>
                    Everyday essentials,
                    <br />
                    made better.
                </h1>

                <p>
                    Discover thoughtfully designed products
                    for your everyday lifestyle.
                </p>

                <div className="hero-actions">
                    <a href="/shop" className="btn btn-primary">
                        Shop Collection
                    </a>

                    <a href="/collections" className="btn btn-secondary">
                        Explore
                    </a>
                </div>
            </div>

            <div className="hero-image">
                <div className="hero-image-placeholder">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLvtDb55FgfRTUxW0ASnKtYvD7HgvIXL20lpCaSEJYaN0_xtPc7E3VPRo&s=10" alt="" />
                </div>
            </div>
        </section>
    );
}

export default Hero;