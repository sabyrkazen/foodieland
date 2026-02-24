import { Image } from 'minista'

import './CategoryCard.scss'

export const CategoryCard = ({ title, imgSrc, color }) => {
  return (
    <article className="category-card">
      <div
        className="category-card__body"
        style={{ '--categoryCardColor': color }}
      >
        <div
          className="category-card__image-wrapper"
          style={{ '--categoryCardImage': `url('${imgSrc}')` }}
        >
          <Image className="category-card__image" src={imgSrc} />
        </div>
        <h3 className="category-card__title h6">{title}</h3>
      </div>
    </article>
  )
}
