const features = [
    {
        title: 'Fast Delivery',
        description: 'Quick and reliable delivery to your doorstep.',
    },
    {
        title: 'Quality Products',
        description: 'Carefully selected products made to last.',
    },
    {
        title: 'Secure Payment',
        description: 'Your payments are protected and secure.',
    },
];

function Features() {
    return (
        <section className="features section">
            {features.map((feature) => (
                <div className="feature" key={feature.title}>
                    <div className="feature-icon">✓</div>

                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>
                </div>
            ))}
        </section>
    );
}

export default Features;