import './RecipeCard.scss'
import { Icon } from '../Icon'

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
          <span className="recipe-card__time">
            <Icon name="clock" hasFill />
            {cookingTime}
          </span>
          <span className="recipe-card__category">
            <Icon name="cutlery" hasFill />
            {category}
          </span>
        </div>
      </a>
    </article>
  )
}
