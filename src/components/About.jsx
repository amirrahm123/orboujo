import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-img-placeholder">
              <span>🥊</span>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className="section-label">מי אני</span>
            <h2>אור בוג׳ו</h2>
            <p>
              מאמן קיקבוקס והגנה עצמית מנהריה עם ניסיון רב בזירה ובאימון.
              אלוף ישראל בקיקבוקס עם 7 מדליות זהב באליפויות ארציות,
              ומקום שני בגביע העולם.
            </p>
            <p>
              אני מאמין שקיקבוקס הוא הרבה מעבר לספורט — זו דרך חיים.
              האימונים שלי בנויים לחזק אותך פיזית ומנטלית, לשפר ביטחון עצמי,
              ולהעניק כלים אמיתיים להגנה עצמית.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-num">7</span>
                <span className="about-stat-label">מדליות זהב</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">🥈</span>
                <span className="about-stat-label">גביע העולם</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">+100</span>
                <span className="about-stat-label">מתאמנים</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
