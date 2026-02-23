import clsx from 'clsx'

import { Icon } from '../Icon'

import './Tags.scss'

export const Tags = ({ data, classes = {} }) => {
  return (
    <ul className={clsx('tags__list', classes.list)}>
      {data.map(({ icon, label }, index) => (
        <li className={clsx('tags__item', classes.item)} key={index}>
          <Icon name={icon} hasFill />
          <span className={clsx('tags__label', classes.label)}>{label}</span>
        </li>
      ))}
    </ul>
  )
}
