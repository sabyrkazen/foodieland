import clsx from 'clsx'

import './Grid.scss'

export const Grid = ({ className, children, columns }) => {
  return (
    <ul className={clsx(`grid grid--${columns}`, className)}>{children}</ul>
  )
}
