import React from 'react'
import Link from 'gatsby-link'
import classnames from 'classnames'
import Logo from '../logo/logo'
import styles from './nav.module.css'

export default function Nav({location}) {
  const navClasses = classnames({
    [styles.nav]: true,
    [styles.navCollapsed]: location != '/'
  })

  return (
    <div className={navClasses}>
      <Link className={styles.back} to="/">
        <Logo back={location != '/'}/>
      </Link>
    </div>
  )
}
