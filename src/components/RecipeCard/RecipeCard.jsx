import { Image } from 'minista'

import { Tags } from '@components/Tags'

import './RecipeCard.scss'

export const RecipeCard = ({ title, info, imgSrc, heartIcon }) => {
  return (
    <article className="recipe-card">
      <a className="recipe-card__link" href="/">
        <div className="recipe-card__image-wrapper">
          <Image
            className="recipe-card__image"
            src={imgSrc}
            width={368}
            height={250}
          />
          <Image
            className="recipe-card__heart"
            src={heartIcon.imgSrc}
            width={48}
            height={48}
          />
        </div>
        <h3 className="recipe-card__title h4">{title}</h3>
        <Tags data={info} />
      </a>
    </article>
  )
}
