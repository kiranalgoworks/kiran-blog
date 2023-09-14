import React from "react";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>This About the Kiran's Blogging</p>
    </Layout>
  )
}


export const Head = () => (
  <>
    <title>About Kiran</title>
    <meta name="description" content="its about gatsby Tutorial About us page" />
  </>
)
export default AboutPage;
