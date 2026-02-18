import clsx from 'clsx'
import { Image } from 'minista'

export const AuthorCard = ({ className, imgSrc, name, date }) => {
  return (
    <div className={clsx('author-card', className)}>
      <Image className="author-card__image" src={imgSrc} />
      <h3 className="author-card__name">{name}</h3>
      <time className="author-card__date" dateTime={date.dateTime}>
        {date.label}
      </time>
    </div>
  )
}
