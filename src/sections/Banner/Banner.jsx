import { Image } from 'minista'

import './Banner.scss'

export const Banner = () => {
  return (
    <div className="banner">
      <div className="banner__inner container">
        <div className="banner__body">
          <h2 className="banner__title">
            Everyone can be a chef in their own kitchen
          </h2>
          <div className="banner__description">
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
          <a href="/" className="banner__link button">
            Learn More
          </a>
        </div>
        <Image
          className="banner__image"
          src="/src/assets/images/banner/banner-bg.png"
        />
      </div>
    </div>
  )
}
