import orderStatus from '../assets/order-status.svg'

const benefits = [
  {
    title: 'Record stock as it moves',
    text: 'Keep incoming and outgoing items in one reliable record.',
  },
  {
    title: 'Review profit every day',
    text: 'See the result of each business day without rebuilding a spreadsheet.',
  },
  {
    title: 'Choose only what you need',
    text: 'Start with essential records, then add analysis and export tools.',
  },
]

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <h2>Less time reconciling. More time deciding.</h2>
        <p>
          Stockly gives business owners a consistent way to understand inventory and profit.
        </p>
      </div>

      <div className="about-composition">
        <div className="about-art">
          <img
            src={orderStatus}
            alt="Illustration of an order status being reviewed"
            width="800"
            height="655"
            loading="lazy"
            decoding="async"
          />
        </div>

        <dl className="benefit-list">
          {benefits.map((benefit) => (
            <div className="benefit-item" key={benefit.title}>
              <dt>{benefit.title}</dt>
              <dd>{benefit.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default About
