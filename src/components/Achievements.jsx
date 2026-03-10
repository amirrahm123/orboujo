import { motion } from 'framer-motion'

const medals = [
  { emoji: '🥇', title: 'אליפות ישראל', desc: 'מקום ראשון', count: '×7' },
  { emoji: '🥈', title: 'גביע העולם', desc: 'מקום שני', count: '' },
]

export default function Achievements() {
  return (
    <section className="section achievements" id="achievements">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">הישגים</span>
          <h2>רקורד מנצח</h2>
        </motion.div>

        <div className="medals-grid">
          {medals.map((m, i) => (
            <motion.div
              key={i}
              className="medal-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="medal-emoji">{m.emoji}</span>
              <div>
                <h3>{m.title} {m.count && <span className="medal-count">{m.count}</span>}</h3>
                <p>{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="achievement-banner"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="banner-item">
            <span className="banner-num">7+</span>
            <span className="banner-label">שנות ניסיון</span>
          </div>
          <div className="banner-divider" />
          <div className="banner-item">
            <span className="banner-num">100+</span>
            <span className="banner-label">מתאמנים</span>
          </div>
          <div className="banner-divider" />
          <div className="banner-item">
            <span className="banner-num">8</span>
            <span className="banner-label">מדליות</span>
          </div>
          <div className="banner-divider" />
          <div className="banner-item">
            <span className="banner-num">נהריה</span>
            <span className="banner-label">מיקום</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
