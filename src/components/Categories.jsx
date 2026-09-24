const categories = [
    {
        name: 'Clothing',
        description: 'Everyday essentials',
    },
    {
        name: 'Accessories',
        description: 'Complete your look',
    },
    {
        name: 'Lifestyle',
        description: 'Made for everyday',
    },
];

function Categories() {
    return (
        <section className="categories section">
            <div className="section-heading">
                <span>EXPLORE</span>
                <h2>Shop by category</h2>
            </div>

            <div className="category-grid">
                {categories.map((category) => (
                    <a
                        href="/shop"
                        className="category-card"
                        key={category.name}
                    >
                        <div className="category-image">
                            <span>{category.name}</span>
                        </div>

                        <div className="category-content">
                            <h3>{category.name}</h3>
                            <p>{category.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Categories;