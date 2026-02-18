import clsx from 'clsx'
import { Icon } from '@/components/Icon'
import { Image } from 'minista'

export const HeroCard = (props) => {
  const {
    className,
    category,
    title,
    TitleTag = 'h2',
    description,
    tags,
    author,
    imgSrc,
  } = props

  return (
    <div className={clsx('hero-card', className)}>
      <div className="hero-card__body">
        <header className="hero-card__category">
          <Image className="hero-card__category-image" src={category.imgSrc} />
          <span>{category.label}</span>
        </header>
        <TitleTag className="hero-card__title">{title}</TitleTag>
        <div className="hero-card__description">
          <p>{description}</p>
        </div>
        <div className="hero-card__tags">
          <ul className="hero-card__tags-list">
            {tags.map(({ icon, label }) => (
              <li className="hero-card__tags-item" key={label}>
                <Icon name={icon} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <footer className="hero-card__footer">

        </footer>
      </div>
      <Image className="hero-card__image" src={imgSrc} />
    </div>
  )
}
