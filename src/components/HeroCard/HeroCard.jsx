import clsx from 'clsx'

import { Icon } from '@components/Icon'
import { AuthorCard } from '@components/AuthorCard'
import { Button } from '@components/Button'
import { Tags } from '@components/Tags'

import './HeroCard.scss'

import badgeIcon from '@assets/images/hero-card/badge.svg'

export const HeroCard = ({
  className,
  category,
  title,
  TitleTag = 'h2',
  description,
  tags,
  author,
  imgSrc,
}) => {
  return (
    <div className={clsx('hero-card', className)}>
      <div className="hero-card__body">
        <div className="hero-card__body-inner">
          <header className="hero-card__category">
            <img
              className="hero-card__category-image"
              src={category.imgSrc}
              alt=""
              width={24}
              height={24}
            />
            <span>{category.label}</span>
          </header>
          <TitleTag className="hero-card__title">{title}</TitleTag>
          <div className="hero-card__description">
            <p>{description}</p>
          </div>
          <div className="hero-card__tags">
            <Tags
              data={tags}
              classes={{
                list: 'hero-card__tags-list',
                item: 'hero-card__tags-item',
              }}
            />
          </div>
        </div>
        <footer className="hero-card__footer">
          <AuthorCard className="hero-card__author" {...author} />
          <Button className="hero-card__button" href="/recipes">
            <span>View Recipes</span>
            <Icon name="play" hasFill />
          </Button>
        </footer>
        <img
          className="hero-card__badge"
          src={badgeIcon}
          alt=""
          width={150}
          height={150}
        />
      </div>
      <img
        className="hero-card__image"
        src={imgSrc}
        alt=""
        width={660}
        height={640}
      />
    </div>
  )
}
