import logoImage from '@/images/logos/as24.png'
import Image from 'next/image'

export function Logo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <div className="">
      <Image
        src={logoImage}
        alt="Logo"
        height={28}
        className="items-center rounded-md bg-slate-950 p-2"
      />{' '}
    </div>
  )
}
