/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
'use client'
import { useState } from 'react'
import { Disclosure, RadioGroup, Tab } from '@headlessui/react'
import { StarIcon } from '@heroicons/react/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

const product = {
  name: 'Volvo S60',
  price: '$30,000-',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjN6OTJpOHR1NWFpaC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.gQ9L3_txxLR3XgioDHMG8MLx9p3wuPGqpED4Br-f66Q/image;s=0x450;f=jpeg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImQ3bDN6d3Z1NzB0dTMtQVVUT1ZJVFJPIiwidyI6W3siZm4iOiJxN216NTNiaWZwemstQVVUT1ZJVFJPIiwicyI6IjE2IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.m_xwb8LhRLVyqHVMlOnuIOdt0xj9_Ewy2huVAiREhlI/image;s=0x450;f=jpeg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InJ5aXIxOXMybG5nOC1BVVRPVklUUk8iLCJ3IjpbeyJmbiI6InE3bXo1M2JpZnB6ay1BVVRPVklUUk8iLCJzIjoiMTYiLCJwIjoiMTAsLTEwIiwiYSI6IjAifV19.WCSAOYZqKYy6DBHNK6b6-psLBS_fd6VFyOTig5903xw/image;s=0x450;f=jpeg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [],
  description: `
    <p>2.0 T5 Intro Edition black R full options</p>
  `,
  details: [
    {
      name: 'Date de baza',
      items: [
        'Berlina',
        'Vehicul second hand',
        'Locuri pe scaune: 5',
        'Usi: 4',
      ],
    },

    {
      name: 'Istoricul vehiculului',
      items: [
        'Kilometraj: 31,147 km',
        'Prima înmatriculare: 07/2019',
        'Locuri pe scaune: 5',
        'Usi: 4',
      ],
    },
    {
      name: 'Date tehnice',
      items: [
        'Putere: 184 kW (250 CP)',
        'Tip de cutie de viteze: automată',
        'Cilindree: 1.969cm2',
        'Viteze: 8',
        'Cilindri: 4',
        'Greutate proprie: 1586 kg',
      ],
    },
    // More sections...
  ],
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <Tab.Group as="div" className="flex flex-col-reverse">
            {/* Image selector */}
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <Tab.List className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <Tab
                    key={image.id}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                  >
                    {({ selected }) => (
                      <>
                        <span className="sr-only">{image.name}</span>
                        <span className="absolute inset-0 overflow-hidden rounded-md">
                          <img
                            src={image.src}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </span>
                        <span
                          className={classNames(
                            selected ? 'ring-indigo-500' : 'ring-transparent',
                            'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
              {product.images.map((image) => (
                <Tab.Panel key={image.id}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center sm:rounded-lg"
                  />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">
                {product.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? 'text-yellow-500'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>

              <div
                className="space-y-6 text-base text-gray-700"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </div>

            <form className="mt-6">
              {/* Colors */}

              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-yellow-500 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                >
                  Contactează vânzătorul
                </button>

                <button
                  type="button"
                  className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                >
                  <HeartIcon
                    className="h-6 w-6 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Add to favorites</span>
                </button>
              </div>
            </form>

            <section aria-labelledby="details-heading" className="mt-12">
              <h2 id="details-heading" className="sr-only">
                Additional details
              </h2>

              <div className="divide-y divide-gray-200 border-t">
                {product.details.map((detail) => (
                  <Disclosure as="div" key={detail.name}>
                    {({ open }) => (
                      <>
                        <h3>
                          <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                            <span
                              className={classNames(
                                open ? 'text-yellow-500' : 'text-gray-900',
                                'text-sm font-medium',
                              )}
                            >
                              {detail.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon
                                  className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusIcon
                                  className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel
                          as="div"
                          className="prose prose-sm pb-6"
                        >
                          <ul role="list">
                            {detail.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
