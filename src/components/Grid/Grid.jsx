import './Grid.scss'
import clsx from 'clsx'

export const Grid = ({ className, children, columns }) => {
  return (
    <ul className={clsx(`grid grid--${columns}`, className)}>
      {children.map((child, index) => (
        <li key={index}>{child}</li>
      ))}
    </ul>
  )
}
