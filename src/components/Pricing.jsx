const plans = [
  {
    name: 'Basic',
    price: '99K',
    summary: 'For a small business replacing manual stock notes.',
    features: ['Incoming stock', 'Outgoing stock', 'Daily profit records'],
  },
  {
    name: 'Business',
    price: '249K',
    summary: 'For teams that need a clearer view of sales performance.',
    features: [
      'Incoming and outgoing stock',
      'Daily profit records',
      'Sales analysis chart',
      '24/7 support',
    ],
    featured: true,
  },
  {
    name: 'Entrepreneur',
    price: '499K',
    summary: 'For operators preparing data for deeper business decisions.',
    features: [
      'Everything in Business',
      'Excel data export',
      'AI revenue prediction',
      '24/7 priority support',
    ],
  },
]

function Pricing() {
  return (
    <section className="section pricing" id="pricing">
      <div className="section-heading pricing-heading">
        <h2>Plans for each stage of growth.</h2>
        <p>Choose the tools your operation needs today.</p>
      </div>

      <div className="pricing-layout">
        {plans.map((plan) => (
          <article
            className={`price-plan price-plan-${plan.name.toLowerCase()}${plan.featured ? ' featured' : ''}`}
            key={plan.name}
          >
            <header className="plan-header">
              <div>
                <h3>{plan.name}</h3>
                {plan.featured && <p className="plan-label">Recommended</p>}
              </div>
              <p className="plan-price"><span>Rp</span>{plan.price}<small>/month</small></p>
            </header>
            <p className="plan-summary">{plan.summary}</p>
            <ul>
              {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <a
              className={`button ${plan.featured ? 'button-inverse' : 'button-outline'}`}
              href="#contact"
            >
              Choose {plan.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Pricing
