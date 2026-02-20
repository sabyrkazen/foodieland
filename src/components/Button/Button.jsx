import clsx from 'clsx'

import './Button.scss'

export const Button = ({
  className,
  type = 'button',
  /*
   * '' (default) | 'light-blue'
   */
  mode = '',
  href,
  children,
}) => {
  const isLink = href !== undefined
  const Component = isLink ? 'a' : 'button'
  const linkAttributes = { href }
  const buttonAttributes = { type }
  const attributesByTag = isLink ? linkAttributes : buttonAttributes

  return (
    <Component
      className={clsx('button', className, mode && `button--${mode}`)}
      {...attributesByTag}
    >
      {children}
    </Component>
  )
}
