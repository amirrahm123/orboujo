export default function Footer({ wa, ig }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="footer-logo">🥊 OR BOUJO</span>
            <p>מאמן קיקבוקס והגנה עצמית | נהריה</p>
          </div>

          <div className="footer-links">
            <a href="#about">אודות</a>
            <a href="#services">אימונים</a>
            <a href="#achievements">הישגים</a>
            <a href="#gallery">גלריה</a>
          </div>

          <div className="footer-social">
            <a href={wa} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            <a href={ig} target="_blank" rel="noopener noreferrer">📸 Instagram</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} אור בוג׳ו. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  )
}
