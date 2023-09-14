import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Blog = ({ data }) => {
  return (
    <Layout pageTitle="Welcome Blog">
      <ul>
        {
          data.allFile.nodes.map((item: {name: string}) => {
            return <li key={item.name}>{item.name}</li>
          })
        }
      </ul>
    </Layout>
  )
}
export const data = graphql`
query {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
    }
  }
}
`
export default Blog;
export const Head = () => (
  <Seo title="Blog Page" />
)


