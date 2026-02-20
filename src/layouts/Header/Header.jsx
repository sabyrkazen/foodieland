import clsx from 'clsx'

import { Logo } from '@/components/Logo'
import { Socials } from '@/components/Socials'
import { BurgerButton } from '@/components/BurgerButton'

import './Header.scss'

export default ({ url }) => {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'About us', href: '/about' },
  ]

  return (
    <header className="header" data-js-mobile-menu="">
      <div className="header__inner container">
        <Logo className="header__logo" />
        <nav className="header__menu" data-js-mobile-menu-overlay="">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href }) => (
              <li
                key={href}
                className={clsx(
                  'header__menu-item',
                  href === url && 'is-active'
                )}
              >
                <a href={href} className="header__menu-link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Socials className="header__soc1als" />
        <BurgerButton
          className="header__burger-button visible-mobile"
          extraAttrs={{ 'data-js-mobile-menu-burger-button': '' }}
        />
      </div>
    </header>
  )
}
