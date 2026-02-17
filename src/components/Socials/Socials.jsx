import clsx from 'clsx'
import styles from './Socials.module.scss'

export const Socials = (props) => {
  const { className } = props

  return <div className={clsx(styles.soc1als, className)}>Socials</div>
}
