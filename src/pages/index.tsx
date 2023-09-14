import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";


const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Kiran's Blog">
      <p>I am making it to learn Gatsby</p>
      <StaticImage
        alt="Nature beauty"
        src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />
