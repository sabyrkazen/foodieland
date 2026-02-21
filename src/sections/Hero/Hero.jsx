import { HeroCard } from '@/components/HeroCard'
import { slides } from '@/sections/Hero/hero.data'

import './Hero.scss'

export const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div
        className="hero__slider swiper"
        data-js-slider={JSON.stringify({
          spaceBetween: 120,
          slidesPerView: 'auto',
          centeredSlides: true,
          initialSlide: 1,
          effect: 'coverflow',
        })}
      >
        <ul className="hero__slider-list swiper-wrapper">
          {slides.map((slide) => (
            <li key={slide.id} className="hero__slider-item swiper-slide">
              <HeroCard className="hero__card" {...slide} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
