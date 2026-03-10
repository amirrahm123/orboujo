import { motion } from 'framer-motion'

const placeholders = [
  { emoji: '🥊', label: 'אימון אישי' },
  { emoji: '🏆', label: 'תחרות' },
  { emoji: '💪', label: 'כושר קרבי' },
  { emoji: '🥇', label: 'אליפות ישראל' },
  { emoji: '🛡️', label: 'הגנה עצמית' },
  { emoji: '👥', label: 'אימון זוגי' },
]

export default function Gallery({ ig }) {
  return (
    <section className="section gallery" id="gallery">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">גלריה</span>
          <h2>מהאימונים</h2>
        </motion.div>

        <div className="gallery-grid">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="gallery-emoji">{p.emoji}</span>
              <span className="gallery-label">{p.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href={ig} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
            📸 עקבו אחרינו באינסטגרם
          </a>
        </motion.div>
      </div>
    </section>
  )
}
