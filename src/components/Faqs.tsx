import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What data does AutoScout24 process?',
      answer:
        'AutoScout24 is a platform for suppliers and interested parties of cars and their financing. In principle, you can visit our website without registering and actively providing us with personal data. ',
    },
    {
      question:
        ' For what purposes and on what legal basis does AutoScout24 process your data?',
      answer:
        'We process your data mainly in order to make the offer and the associated services and functions available to you. ',
    },
    {
      question: 'To which recipients do we pass on your data?',
      answer:
        'As part of the provision of the offer and the functions and services associated with it, we pass on your data to suppliers and interested parties of cars and their financing.',
    },
  ],
  [
    {
      question: 'How long do we store your data?',
      answer:
        'We delete or make your personal data anonymous as soon as they are no longer required for the purposes for which we process them in accordance with the above paragraphs. The actual storage period depends on how you use our offer.',
    },
    {
      question: 'What rights do you have as the person concerned?',
      answer:
        'As a data subject of the processing of personal data, you have a right to information about the data processed, a right to correction of your personal data, a right to deletion of your personal data, a right to restrict the processing of your personal data and a right to the transferability of your personal data.',
    },
    {
      question:
        'What should you observe when handling the data of other users?',
      answer:
        'In order to facilitate business transactions between members of the AutoScout24 community, our service allows you to access certain contact information of other users.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
