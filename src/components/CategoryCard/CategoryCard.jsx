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
          <img
            className="category-card__image"
            src={imgSrc}
            width={100}
            height={100}
            loading="lazy"
            alt={title}
          />
        </div>
        <h3 className="category-card__title h6">{title}</h3>
      </div>
    </article>
  )
}
