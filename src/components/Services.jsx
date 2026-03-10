import { motion } from 'framer-motion'

const services = [
  {
    icon: '🥊',
    title: 'אימון אישי',
    desc: 'אימון קיקבוקס אחד-על-אחד, מותאם אישית לרמה ולמטרות שלך. טכניקה, כוח, מהירות וסיבולת.',
  },
  {
    icon: '👥',
    title: 'אימון זוגי',
    desc: 'אימון לזוגות או חברים. תרגול טכניקות לחימה, עבודה על פדים, ושיפור כושר משותף.',
  },
  {
    icon: '🛡️',
    title: 'הגנה עצמית',
    desc: 'למידת טכניקות הגנה עצמית מעשיות, מבוססות על ניסיון קרבי אמיתי. להרגיש בטוחים בכל מצב.',
  },
  {
    icon: '💪',
    title: 'כושר קרבי',
    desc: 'אימוני כושר אינטנסיביים המבוססים על תנועות לחימה. שריפת שומן, חיטוב הגוף ושיפור הסיבולת.',
  },
]

export default function Services({ wa }) {
  return (
    <section className="section services" id="services">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-label">מה אני מציע</span>
          <h2>האימונים</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-red">
            💬 לפרטים ותיאום — וואטסאפ
          </a>
        </motion.div>
      </div>
    </section>
  )
}
