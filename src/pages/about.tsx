import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>This About the Kiran's Blogging</p>
    </Layout>
  )
}


export const Head = () => (
  <Seo title="About Page" />
)
export default AboutPage;
