import clsx from 'clsx'
import './AuthorCard.scss'

export const AuthorCard = ({ className, imgSrc, name, date }) => {
  return (
    <div className={clsx('author-card', className)}>
      <img
        className="author-card__image"
        src={imgSrc}
        width={50}
        height={50}
        loading="lazy"
        alt={name}
      />
      <div className="author-card__body">
        <h3 className="author-card__name">{name}</h3>
        <time className="author-card__date" dateTime={date.dateTime}>
          {date.label}
        </time>
      </div>
    </div>
  )
}
