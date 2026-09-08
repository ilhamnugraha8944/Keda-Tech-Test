import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('Thanks. This demonstration does not send data to a server.')
  }

  return (
    <section className="section contact" id="contact">
      <div className="contact-copy">
        <h2>Tell us how your shop works.</h2>
        <p>We will help you identify the simplest plan for your daily operation.</p>
        <a href="mailto:hello@stockly.example">hello@stockly.example</a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" required />
        </label>
        <button className="button button-primary" type="submit">Send message</button>
        <p className="form-status" role="status">{status}</p>
      </form>
    </section>
  )
}

export default Contact
