import React, { Fragment } from "react"
import { graphql } from "gatsby"

export default ({data}) => {
  const project = data.markdownRemark
  return (
    <Fragment>
      <h1>{project.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </Fragment>
  )
}

export const query = graphql`
  query($path: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`