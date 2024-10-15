'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { AlignJustify } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { sidebarLinks } from '../../constants'
import { usePathname } from 'next/navigation'
import { cn } from '../../lib/utils'
import Footer from '../Footer'

const MobileNavbar = ({ user }: MobileNavProps) => {
  const pathName = usePathname()

  return (
    <section id='mobile-nav' className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <AlignJustify size={30} />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-white'>
          <Link
            className='cursor-pointer flex items-center gap-1 px-4'
            href='/'
          >
            <Image src='/icons/logo.svg' width={34} height={34} alt='Logo' />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>
              Horizon
            </h1>
          </Link>
          <div className='mobilenav-sheet'>
            <SheetClose asChild>
              <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathName === item.route ||
                    pathName.startsWith(`${item.route}/`)
                  return (
                    <SheetClose asChild key={item.label}>
                      <Link
                        className={cn('mobilenav-sheet_close w-full', {
                          'bg-bankGradient': isActive,
                        })}
                        href={item.route}
                        key={item.label}
                      >
                        <div className='size-6 relative'>
                          <Image
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                              'brightness-[3] invert-0': isActive,
                            })}
                          />
                        </div>
                        <p
                          className={cn('text-16 font-semibold text-black-2', {
                            '!text-white': isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  )
                })}
                User
              </nav>
            </SheetClose>
            <Footer user={user} type='mobile' />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNavbar
