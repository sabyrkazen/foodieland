import './Socials.scss'
import clsx from 'clsx'

export const Socials = (props) => {
  const { className } = props

  const links = [
    { label: 'Facebook', icon: 'facebook' },
    { label: 'Twitter', icon: 'twitter' },
    { label: 'Instagram', icon: 'instagram' },
  ]

  return <div className={clsx('soc1als', className)}>Socials</div>
}
