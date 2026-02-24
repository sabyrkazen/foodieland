import { Image } from 'minista'

import dish from '@assets/images/recipe-banner/dish.png'

import './RecipeBanner.scss'

export const RecipeBanner = () => {
  return (
    <article className="recipe-banner">
      <h3 className="recipe-banner__title">Don’t forget to eat healthy food</h3>
      <Image className="recipe-banner__image" src={dish} />
      <a className="recipe-banner__link" href="/">
        www.foodieland.com
      </a>
    </article>
  )
}
