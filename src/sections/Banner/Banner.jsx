import { Button } from '@components/Button'

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
          <Button href="/">Learn More</Button>
        </div>
        <img
          className="banner__image"
          src="/src/assets/images/banner/banner-bg.png"
          alt=""
          width={710}
          height={597}
        />
      </div>
    </div>
  )
}
