import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Achievements from './components/Achievements'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

const WHATSAPP = 'https://wa.me/972544426276?text=' + encodeURIComponent('היי אור, אשמח לשמוע פרטים על אימון קיקבוקס 🥊')
const INSTAGRAM = 'https://www.instagram.com/or.boujo/'

export default function App() {
  return (
    <>
      <Navbar wa={WHATSAPP} />
      <main>
        <Hero wa={WHATSAPP} />
        <About />
        <Services wa={WHATSAPP} />
        <Achievements />
        <Gallery ig={INSTAGRAM} />
        <CTA wa={WHATSAPP} />
      </main>
      <Footer wa={WHATSAPP} ig={INSTAGRAM} />
      <WhatsAppFloat wa={WHATSAPP} />
    </>
  )
}
