import { Socials } from '@components/Socials'

import { menuItems } from './footer.data'

import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
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
        </div>
        <div className="footer__extra">
          <div className="footer__copuright">
            <p>© 2020 Flowbase. Powered by Webflow</p>
          </div>
          <Socials className="footer__socials" />
        </div>
      </div>
    </footer>
  )
}
