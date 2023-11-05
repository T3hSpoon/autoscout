import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/Mercedes-Benz-logo-2011-640x369.png'
import logoMirage from '@/images/logos/bmw-logo-2020-gray.png'
import logoStatamic from '@/images/logos/Opel-logo-2009-640x496.png'
import logoStaticKit from '@/images/logos/toyota-logo-2020-europe-640.png'
import logoTransistor from '@/images/logos/Volkswagen-logo-2019-640x500.png'
import logoTuple from '@/images/logos/audi-logo-2016-640.png'

export function Hero() {
  return (
    <Container className="h-screen pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        Pe AutoScout24, găsiți{' '}
        <span className="relative whitespace-nowrap text-yellow-500">
          <span className="relative">autovehicule</span>
        </span>{' '}
        pentru familie sau afacere.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        AutoScout24 este o piaţă virtuală cu peste 2,5 milioane de autovehicule
        din toată Europa, oferite de dealeri şi vânzători particulari.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Creați un cont</Button>
        <Button
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-yellow-500 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Prezentare video</span>
        </Button>
      </div>
      <div className="mt-36 lg:mt-24">
        <p className="font-display text-base text-slate-900">
          Găsiți brandul de mașină care vă reprezintă
        </p>
        <ul
          role="list"
          className=" mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      unoptimized
                      className="h-24 w-24 object-contain grayscale"
                    />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
