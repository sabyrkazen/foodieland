import { Tags } from '../Tags'

import './RecipeCard.scss'

export const RecipeCard = ({ title, info, imgSrc, heartIcon }) => {
  return (
    <article className="recipe-card">
      <a className="recipe-card__link" href="/">
        <div className="recipe-card__image-wrapper">
          <img
            className="recipe-card__image"
            src={imgSrc}
            alt={title}
            title={title}
            width={368}
            height={250}
            loading="lazy"
          />
          <img
            className="recipe-card__heart"
            src={heartIcon.imgSrc}
            alt={heartIcon.label}
            title={heartIcon.label}
            width={48}
            height={48}
            loading="lazy"
          />
        </div>
        <h3 className="recipe-card__title h4">{title}</h3>
        <Tags data={info} />
      </a>
    </article>
  )
}
