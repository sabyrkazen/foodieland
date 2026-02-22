import { Icon } from '../Icon'

import './RecipeCard.scss'

export const RecipeCard = ({ title, info, imgSrc }) => {
  return (
    <article className="recipe-card">
      <a className="recipe-card__link" href="/">
        <img
          className="recipe-card__image"
          src={imgSrc}
          alt={title}
          width={368}
          height={250}
          loading="lazy"
        />
        <h3 className="recipe-card__title h4">{title}</h3>
        <ul className="recipe-card__list">
          {info.map(({ icon, label }, index) => (
            <li className="recipe-card__item" key={index}>
              <Icon name={icon} hasFill />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </a>
    </article>
  )
}
