import './Footer.scss'
import { Socials } from '@components/Socials'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body"></div>
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
