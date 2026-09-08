import { useEffect, useRef, useState } from 'react'

function LoginModal({ isOpen, onClose }) {
  const dialogRef = useRef(null)
  const [status, setStatus] = useState('')

  useEffect(() => {
    const dialog = dialogRef.current

    if (isOpen && !dialog.open) dialog.showModal()
    if (!isOpen && dialog.open) dialog.close()
  }, [isOpen])

  function handleCancel(event) {
    event.preventDefault()
    onClose()
  }

  function handleSubmit(event) {
    event.preventDefault()
    setStatus('Demo only. No authentication request was sent.')
  }

  return (
    <dialog
      className="login-dialog"
      ref={dialogRef}
      aria-labelledby="login-title"
      onCancel={handleCancel}
      onClose={() => setStatus('')}
    >
      <button className="dialog-close" type="button" onClick={onClose}>
        Close
      </button>
      <h2 id="login-title">Login to Stockly</h2>
      <p className="dialog-description">This login is a front-end demonstration.</p>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" autoComplete="email" required autoFocus />
        </label>
        <label>
          Password
          <input name="password" type="password" autoComplete="current-password" required />
        </label>
        <button className="button button-primary" type="submit">Login</button>
        <p className="form-status" role="status">{status}</p>
      </form>
    </dialog>
  )
}

export default LoginModal
