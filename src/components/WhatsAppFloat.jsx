import { useState, useEffect } from 'react'

export default function WhatsAppFloat({ wa }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-float ${show ? 'visible' : ''}`}
      aria-label="WhatsApp"
    >
      💬
    </a>
  )
}
