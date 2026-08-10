'use client'

import { Brain, Settings, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '/games', label: 'Games' },
  { href: '/leaderboards', label: 'Leaderboards' },
  { href: '/daily-challenge', label: 'Daily Challenge' },
] as const

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        className="border-b transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(11,13,18,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 lg:px-8">
          <Link href={'/'} className="flex items-center gap-2.5">
            <div
              className="flex size-8 shrink-0 items-center justify-center rounded-xl"
              style={{
                background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                boxShadow: '0 0 20px rgb(108 111 255 / 35%)',
              }}
            >
              <Brain size={16} className="text-foreground" />
            </div>
            <span className="text-foreground font-black">Brain Arena</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href || pathname.startsWith(`${href}/`)

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative text-sm font-medium transition-colors duration-200 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 -bottom-1.5 h-px rounded-full"
                        style={{
                          background:
                            'linear-gradient(90deg, var(--primary), var(--primary-light))',
                        }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          <ul className="flex items-center gap-3">
            <li>
              <button
                className="hidden size-8 items-center justify-center rounded-lg text-[#6B7280] transition-all duration-200 hover:bg-white/5 hover:text-[#F0F2F8] sm:flex"
                type="button"
                aria-label="Settings"
              >
                <Settings size={16} />
              </button>
            </li>
            <li>
              <button
                className="hidden size-8 items-center justify-center rounded-lg text-[#6B7280] transition-all duration-200 hover:bg-white/5 hover:text-[#F0F2F8] sm:flex"
                type="button"
                aria-label="Profile"
              >
                <User size={16} />
              </button>
            </li>
            <li>
              <Link
                href="/games"
                className="block rounded-xl px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--primary-light))',
                  boxShadow: '0 2px 12px rgb(108 111 255 / 35%)',
                }}
              >
                {' '}
                Play Free{' '}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
