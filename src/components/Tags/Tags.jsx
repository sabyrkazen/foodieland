import { Icon } from '../Icon'

import './Tags.scss'

export const Tags = ({ data, listContainer, itemContainer }) => {
  return (
    <ul className="tags__list">
      {data.map(({ icon, label }, index) => (
        <li className="tags__item" key={index}>
          <Icon name={icon} hasFill />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
}
