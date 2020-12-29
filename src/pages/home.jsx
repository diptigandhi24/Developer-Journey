import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "./homepage.css"
const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby blog with Markdown pages.</p>
    <p>
      <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
      <br />
    </p>
    <div className="homeWrapper">
      <div>hello1</div>
      <div>hello1</div>
      <div>hello1</div>
    </div>
  </Layout>
)

export default IndexPage
