import './CategoryCard.scss'

export const CategoryCard = ({ title }) => {
  return (
    <article className="category-card">
      <img className="category-card__image" src="" alt="" />
      <h3 className="category-card__title">{title}</h3>
    </article>
  )
}
