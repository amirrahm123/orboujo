import { motion } from 'framer-motion'

export default function Hero({ wa }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🥇 אלוף ישראל בקיקבוקס
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          אור <span className="text-red">בוג׳ו</span>
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          מאמן קיקבוקס והגנה עצמית | אימונים אישיים וזוגיים | נהריה
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-red">
            💬 קבעו אימון בוואטסאפ
          </a>
          <a href="#services" className="btn-outline-light">
            האימונים שלנו
          </a>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <span>⌄</span>
      </div>
    </section>
  )
}
