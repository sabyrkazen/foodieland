import clsx from 'clsx'

import { Icon } from '@/components/Icon'
import { links } from '@/components/Socials/socials.data'

import './Socials.scss'

export const Socials = ({ className }) => {
  return (
    <div className={clsx('soc1als', className)}>
      <ul className="soc1als__list">
        {links.map(({ label, icon }) => (
          <li className="soc1als__item" key={label}>
            <a className="soc1als__link" href="/" title={label}>
              <span className="visually-hidden">{label}</span>
              <Icon name={icon} hasFill />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
