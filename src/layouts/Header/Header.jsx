import './Header.scss'
import Logo from '@/components/Logo'
import clsx from 'clsx'
import { Socials } from '@/components/Socials'

export default (props) => {
  const { url } = props

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Recipes', href: '/recipes' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
    { label: 'About us', href: '/about' },
  ]

  return (
    <header className="header">
      <div className="header__inner inner">
        <Logo className="header__logo" />
        <nav className="header__menu">
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
        <Socials />
      </div>
    </header>
  )
}
