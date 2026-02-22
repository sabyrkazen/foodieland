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
        <div className="recipe-card__info">
          {Object.entries(info).map(([key, { icon, label }]) => (
            <div
              className={`recipe-card__${key === 'cookingTime' ? 'time' : key}`}
              key={key}
            >
              <Icon name={icon} hasFill />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </a>
    </article>
  )
}
