import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head componentTitle="Contact" />
      <h1>Contact Me!</h1>
      <ul>
        <li>
          <a
            href="mailto:michaelsu.jobs@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          {/* target=_blank opens a new window/tab instead of same redirecting on same tab */}
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/michael-su-407a10157/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/miicow"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </Layout>
  )
}

export default ContactPage
