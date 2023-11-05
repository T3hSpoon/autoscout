import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Vehicles } from '@/components/Vehicles'
import { Features } from '@/components/Features'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="vehicles" className="snap-center">
          <Vehicles />
        </section>

        <section id="features" className="snap-start">
          <Features />
        </section>

        <section id="call-to-action" className="snap-center">
          <CallToAction />
        </section>
        <section id="testimonials" className="snap-start">
          <Testimonials />
        </section>
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
