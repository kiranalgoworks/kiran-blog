import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Seo = ({ title }: { title: String }) => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
      id
      host
    }
  }`)

  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )

}

export default Seo;
