import clsx from 'clsx'

import { Button } from '@components/Button'

import './Section.scss'

export const Section = ({
  className,
  title,
  titleId,
  description,
  linkLabel,
  children,
  headerClassName,
  descriptionClassName,
}) => {
  return (
    <section className={clsx('section', className)} aria-labelledby={titleId}>
      <header className={clsx('section__header', 'container', headerClassName)}>
        <h2 className="section__title" id={titleId}>
          {title}
        </h2>
        {description && (
          <div className={clsx('section__description', descriptionClassName)}>
            <p>{description}</p>
          </div>
        )}
        {linkLabel && (
          <Button className="section__link" href="/" mode="light-blue">
            {linkLabel}
          </Button>
        )}
      </header>
      <div className="section__body container">{children}</div>
    </section>
  )
}
