import './AuthorCard.scss'
import clsx from 'clsx'
import { Image } from 'minista'

export const AuthorCard = ({ className, imgSrc, name, date }) => {
  return (
    <div className={clsx('author-card', className)}>
      <Image className="author-card__image" src={imgSrc} />
      <div className="author-card__info">
        <h3 className="author-card__name default-text">{name}</h3>
        <time
          className="author-card__date default-text"
          dateTime={date.dateTime}
        >
          {date.label}
        </time>
      </div>
    </div>
  )
}
