import clsx from 'clsx'

import './Logo.scss'

import logoImg from '@assets/images/logo.svg'

export const Logo = ({ className, loading = 'lazy' }) => {
  const title = 'Home'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src={logoImg}
        alt="Foodieland Logo"
        width={110}
        height={30}
        loading={loading}
      />
    </a>
  )
}
