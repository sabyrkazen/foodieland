import { Image } from 'minista'

import './CategoryCard.scss'

export const CategoryCard = ({ title, imgSrc, gradient }) => {
  return (
    <article className="category-card">
      <div
        className="category-card__body"
        style={{ backgroundImage: gradient }}
      >
        <Image className="category-card__image" src={imgSrc} />
        <h3 className="category-card__title h6">{title}</h3>
      </div>
    </article>
  )
}
