import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';
import AppCard from '../components/atoms/AppCard';
import AppPanel from '../components/atoms/AppPanel';
import PanelList from '../components/organis/PanelList';
import styles from '../styles/margin.scss';
import TheHeader from '../components/organis/TheHeader';
import NavList from '../components/organis/NavList';

export default class SomePage extends React.Component {
  static async getInitialProps() {
    const hoge = 'hoge';
    return { hoge };
  }

  render () {
    console.log(styles);

    return (
      <div>
        <Head>
          <title>hoge</title>
        </Head>
        <TheHeader className={styles.example} />
        <NavList />
        <Main>
          <Inner>
            <AppCard
              title="タイトル"
              headerText={<span>テキストテキストテキスト<br />テキストテキストテキスト</span>}
            >
              <PanelList>
                <AppPanel panelTitle="パネルタイトル">
                  パネル1
                </AppPanel>
                <AppPanel panelTitle="パネルタイトル">
                  <span>テキストテキストテキスト<br />テキストテキスト</span>
                </AppPanel>
                <AppPanel panelTitle="パネルタイトル">
                  <span>テキストテキスト<br />テキストテキスト<br />テキストテキスト</span>
                </AppPanel>
                <AppPanel panelTitle="パネルタイトル">
                  <span>テキストテキストテキスト<br />テキストテキスト</span>
                </AppPanel>
              </PanelList>
            </AppCard>
            <Link href="/hoge"><a>Hoge</a></Link>
          </Inner>
        </Main>
      </div>
    )
  }
}

const Main = styled.main`
  padding: 20px;
  background: #f1f5f8;
  min-height: 100vh;
`;

const Inner = styled.div`
  margin: 0 auto;
  width: 944px;
`;
