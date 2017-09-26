import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Nav from '../components/nav/nav'

import '../styles/global.css'
import '../styles/gatsby.css'

function Layout({children, location}) {
    return (
      <div>
        <Helmet
          title="Craig Zheng"
          meta={[
            { name: "description", content: "I'm Craig Zheng, I'm a designer, and this is my website." },
          ]}
        />
        <Nav location={location.pathname}/>
        <div className="container">
          {children()}
        </div>
      </div>
    )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
