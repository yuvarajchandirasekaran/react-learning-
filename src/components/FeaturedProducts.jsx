import ProductCard from './ProductCard';

const products = [
    {
        id: 1,
        name: 'Essential T-Shirt',
        category: 'Clothing',
        price: 999,
        badge: 'BEST SELLER',
    },
    {
        id: 2,
        name: 'Everyday Hoodie',
        category: 'Clothing',
        price: 1499,
    },
    {
        id: 3,
        name: 'Classic Backpack',
        category: 'Accessories',
        price: 1299,
        badge: 'NEW',
    },
    {
        id: 4,
        name: 'Minimal Sneakers',
        category: 'Footwear',
        price: 2199,
    },
];

function FeaturedProducts() {
    return (
        <section className="featured section">
            <div className="section-heading section-heading-row">
                <div>
                    <span>OUR PICKS</span>
                    <h2>Featured products</h2>
                </div>

                <a href="/shop" className="view-all">
                    View all →
                </a>
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>
        </section>
    );
}

export default FeaturedProducts;    