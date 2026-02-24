import './RecipeBanner.scss'

export const RecipeBanner = ({ title, imgSrc, linkLabel }) => {
  return (
    <article className="recipe-banner">
      <h3 className="recipe-banner__title">{title}</h3>
      <img
        className="recipe-banner__image"
        src={imgSrc}
        alt=""
        width={200}
        height={200}
      />
      <a className="recipe-banner__link" href="/">
        {linkLabel}
      </a>
    </article>
  )
}
