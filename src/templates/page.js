import React from 'react'
import Helmet from 'react-helmet'

export default function Template({ data }) {
  const doc = data.markdownRemark;
  const title = (doc.frontmatter.path === '/' ? 'Craig Zheng' : `Craig Zheng - ${doc.frontmatter.title}`);
  return (
    <div className="page">
      <Helmet title={title} />
      <h1>{doc.frontmatter.title}</h1>
      <div className="content" dangerouslySetInnerHTML={{ __html: doc.html }} />
    </div>
  );
}

export const pageQuery = graphql`
  query CaseStudyByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
