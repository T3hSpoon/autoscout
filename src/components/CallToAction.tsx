import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-slate-900 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-yellow-500 sm:text-4xl">
            Începeți căutarea mașinii Dvs. acum
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Folosiţi această platformă drept sursă utilă pentru importul
            autoturismelor noi și second-hand.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Creați un cont
          </Button>
        </div>
      </Container>
    </section>
  )
}
