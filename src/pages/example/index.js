import React from "react"
import ExampleList from "../../components/pageComponents/example/exampleList"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default () => (
  <Layout className="example-page">
    <SEO title="Example Page" />
    <ExampleList />
  </Layout>
)
