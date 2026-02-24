import dish from '@assets/images/recipe-banner/dish.png'

import './RecipeBanner.scss'

export const RecipeBanner = () => {
  return (
    <article className="recipe-banner">
      <h3 className="recipe-banner__title">Don’t forget to eat healthy food</h3>
      <img
        className="recipe-banner__image"
        src={dish}
        alt="Healthy dish"
        title="Healthy dish"
        width={200}
        height={200}
        loading="lazy"
      />
      <a className="recipe-banner__link" href="/">
        www.foodieland.com
      </a>
    </article>
  )
}
