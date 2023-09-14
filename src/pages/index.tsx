import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";


const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome to Kiran's Blog">
      <p>I am making it to learn Gatsby</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg"
      />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
