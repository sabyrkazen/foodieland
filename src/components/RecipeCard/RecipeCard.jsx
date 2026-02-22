import { Icon } from '../Icon'

import './RecipeCard.scss'

export const RecipeCard = ({ title, cookingTime, category, imgSrc }) => {
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
          <div className="recipe-card__time">
            <Icon name="clock" hasFill />
            <span>{cookingTime}</span>
          </div>
          <div className="recipe-card__category">
            <Icon name="cutlery" hasFill />
            <span>{category}</span>
          </div>
        </div>
      </a>
    </article>
  )
}
