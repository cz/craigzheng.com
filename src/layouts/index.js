import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Logo from '../components/logo/logo'

import '../styles/global.css'

const TemplateWrapper = ({
  children
}) => (
    <div>
      <Helmet
        title="Craig Zheng"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div className="main-story">
        <Logo />
        {children()}
      </div>
    </div>
  )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
