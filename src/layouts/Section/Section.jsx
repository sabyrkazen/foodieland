import clsx from 'clsx'

import { Button } from '@/components/Button'

import './Section.scss'

export default ({
  className,
  title,
  titleId,
  description,
  linkLabel,
  children,
}) => {
  return (
    <section
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <h2 className="section__title h3" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
        {linkLabel && (
          <Button className="section__link" href="/">
            {linkLabel}
          </Button>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
