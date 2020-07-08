import React from 'react'
import App, { Container } from 'next/app'
import Layout from '../components/layouts/default';
import '../styles/base.scss'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    )
  }
}