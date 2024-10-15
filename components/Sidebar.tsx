'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from '../constants'
import { cn } from '../lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname()
  return (
    <section id='sidebar' className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link className='mb-12 cursor-pointer flex items-center gap-2' href='/'>
          <Image
            className='size-[24px] max-xl:size-14'
            src='/icons/logo.svg'
            width={34}
            height={34}
            alt='Logo'
          />
          <h1 className='sidebar-logo'>Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`)
          return (
            <Link
              className={cn('sidebar-link', {
                'bg-bankGradient': isActive,
              })}
              href={item.route}
              key={item.label}
            >
              <div className='size-6 relative'>
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn({ 'brightness-[3] invert-0': isActive })}
                />
              </div>
              <p className={cn('sidebar-label', { '!text-white': isActive })}>
                {item.label}
              </p>
            </Link>
          )
        })}
        User
      </nav>
      Footer
    </section>
  )
}

export default Sidebar
