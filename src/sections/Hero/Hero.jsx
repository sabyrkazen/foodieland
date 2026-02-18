import './Hero.scss'

export const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__slider swiper">
        <ul className="hero__slider-list swiper-wrapper">
          <li className="hero__slider-item swiper-slide">Slide 1</li>
          <li className="hero__slider-item swiper-slide">Slide 2</li>
          <li className="hero__slider-item swiper-slide">Slide 3</li>
        </ul>
      </div>
    </section>
  )
}
