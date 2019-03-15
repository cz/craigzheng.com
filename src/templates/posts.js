import React, { Fragment } from "react"
import { graphql } from "gatsby"

export default ({data}) => {
  const post = data.markdownRemark
  return (
    <Fragment>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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