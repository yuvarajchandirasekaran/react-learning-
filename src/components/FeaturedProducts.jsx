import ProductCard from "./ProductCard";

function FeaturedProducts({ onAddToCart }) {
    const products = [
        {
            id: 1,
            name: "Classic T-Shirt",
            category: "Clothing",
            price: 799,
            image: "/images/tshirt.jpg",
        },
        {
            id: 2,
            name: "Everyday Backpack",
            category: "Accessories",
            price: 1299,
            image: "/images/backpack.jpg",
        },
        {
            id: 3,
            name: "Minimal Watch",
            category: "Accessories",
            price: 1999,
            image: "/images/watch.jpg",
        },
        {
            id: 4,
            name: "Ceramic Mug",
            category: "Lifestyle",
            price: 499,
            image: "/images/mug.jpg",
        },
    ];

 return (
        <section className="featured-section">
            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={onAddToCart}
                    />
                ))}
            </div>
        </section>
    );
}

export default FeaturedProducts;