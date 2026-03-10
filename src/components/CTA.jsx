import { motion } from 'framer-motion'

export default function CTA({ wa }) {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-overlay" />
      <div className="container cta-content">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>מוכנים להתחיל?</h2>
          <p>
            בין אם אתם מתחילים או מנוסים — האימון מותאם אליכם.
            <br />שלחו הודעה בוואטסאפ ונתאם אימון ראשון.
          </p>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="btn-red btn-lg">
            💬 שלחו הודעה עכשיו
          </a>
        </motion.div>
      </div>
    </section>
  )
}
