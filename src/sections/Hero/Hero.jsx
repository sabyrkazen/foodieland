import './Hero.scss'

export const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__slider swiper">
        <ul className="hero__slider-list swiper-wrapper">
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">Slide 1</div>
          </li>
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">Slide 2</div>
          </li>
          <li className="hero__slider-item swiper-slide">
            <div className="hero__card">Slide 3</div>
          </li>
        </ul>
      </div>
    </section>
  )
}
