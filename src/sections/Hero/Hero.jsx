import { HeroCard } from '@/components/HeroCard'
import sliderBg from '@/assets/images/slider-bg.jpg'
import scrollIcon from '@/assets/images/scroll.png'
import authorImg from '@/assets/images/author.jpg'

import './Hero.scss'

export const Hero = () => {
  const slides = [
    {
      title: 'Spicy delicious chicken wings',
      description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit...',
      category: {
        imgSrc: scrollIcon,
        label: 'Hot Recipes',
      },
      tags: [
        { icon: 'clock', label: '30 Minutes' },
        { icon: 'cutlery', label: 'Chicken' },
      ],
      author: {
        imgSrc: authorImg,
        name: 'John Smith',
        date: {
          dateTime: '2022-03-15',
          label: '15 March 2022',
        },
      },
      imgSrc: sliderBg,
    },
    {
      title: 'Spicy delicious chicken wings',
      TitleTag: 'h1',
      description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit...',
      category: {
        imgSrc: scrollIcon,
        label: 'Hot Recipes',
      },
      tags: [
        { icon: 'clock', label: '30 Minutes' },
        { icon: 'cutlery', label: 'Chicken' },
      ],
      author: {
        imgSrc: authorImg,
        name: 'John Smith',
        date: {
          dateTime: '2022-03-15',
          label: '15 March 2022',
        },
      },
      imgSrc: sliderBg,
    },
    {
      title: 'Spicy delicious chicken wings',
      description: 'Lorem ipsum dolor sit amet, consectetuipisicing elit...',
      category: {
        imgSrc: scrollIcon,
        label: 'Hot Recipes',
      },
      tags: [
        { icon: 'clock', label: '30 Minutes' },
        { icon: 'cutlery', label: 'Chicken' },
      ],
      author: {
        imgSrc: authorImg,
        name: 'John Smith',
        date: {
          dateTime: '2022-03-15',
          label: '15 March 2022',
        },
      },
      imgSrc: sliderBg,
    },
  ]

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
          {slides.map((slide, index) => (
            <li key={index} className="hero__slider-item swiper-slide">
              <HeroCard className="hero__card" {...slide} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
