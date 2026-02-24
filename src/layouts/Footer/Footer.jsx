import { Logo } from '@components/Logo'
import { Socials } from '@components/Socials'

import { menuItems } from './footer.data'

import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <header className="footer__header">
          <div className="footer__body">
            <Logo className="footer__logo" />
            <div className="footer__subtitle">
              <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
            </div>
          </div>
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              {menuItems.map(({ label, href }) => (
                <li key={href} className="footer__menu-item">
                  <a className="footer__menu-link" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div className="footer__extra">
          <div className="footer__copyright">
            <p>
              © 2020 Flowbase. Powered by <span>Webflow</span>
            </p>
          </div>
          <Socials className="footer__socials" />
        </div>
      </div>
    </footer>
  )
}
