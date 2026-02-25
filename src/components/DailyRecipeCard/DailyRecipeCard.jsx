import { Tags } from '@components/Tags'

import './DailyRecipeCard.scss'

export const DailyRecipeCard = ({ title, info, imgSrc, heartIcon }) => {
  return (
    <article className="daily-recipe-card">
      <a className="daily-recipe-card__link" href="/">
        <div className="daily-recipe-card__image-wrapper">
          <img
            className="daily-recipe-card__image"
            src={imgSrc}
            alt=""
            width={290}
            height={200}
          />
          <img
            className="daily-recipe-card__heart"
            src={heartIcon.imgSrc}
            alt=""
            width={48}
            height={48}
          />
        </div>
        <h3 className="daily-recipe-card__title h6">{title}</h3>
        <Tags data={info} />
      </a>
    </article>
  )
}
