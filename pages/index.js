import React from 'react';
import Head from 'next/head';
import { css } from 'emotion';
import styled from '@emotion/styled';
import Link from 'next/link';

export default class SomePage extends React.Component {

  // getInitialProps = asyncData
  // pagaでのみ使える
  static async getInitialProps() {
    const hoge = 'hoge';
    return { hoge };
  }

  render () {
    const H1 = styled.h1({
      margin: '0',
    });

    return (
      <div>
        <Head>
          <title>hoge</title>
        </Head>
        <H1>
          {this.props.hoge}
        </H1>
        <img src="/static/images/momo.png" />
        <Link href="/hoge">hoge</Link>
      </div>
    )
  }
}