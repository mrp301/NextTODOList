import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import AppCard from '../components/atoms/AppCard';
import AppPanel from '../components/atoms/AppPanel';
import PanelList from '../components/organisms/PanelList';
import Layout from '../components/layouts/default';

export default class SomePage extends React.Component {
  static async getInitialProps() {
    const hoge = 'hoge';
    return { hoge };
  }

  render () {
    return (
      <div>
        <Head>
          <title>ホーム</title>
        </Head>
        <Layout>
          <Main>
            <Inner>
              <AppCard
                title="タイトル"
                headerText={<span>テキストテキストテキスト<br />テキストテキストテキスト</span>}
              >
                <PanelList>
                  <AppPanel panelTitle="お題の作成">
                    自分のお題を作成します。
                  </AppPanel>
                  <AppPanel panelTitle="お題の管理">
                    <span>テキストテキストテキスト<br />テキストテキスト</span>
                  </AppPanel>
                  <AppPanel panelTitle="設定">
                    <span>何かの設定ができます。</span>
                  </AppPanel>
                </PanelList>
              </AppCard>
              <br />
              <AppCard
                title="タイトル"
                headerText={<span>テキストテキストテキスト<br />テキストテキストテキスト</span>}
              >
                あああ
              </AppCard>
            </Inner>
          </Main>
        </Layout>
      </div>
    )
  }
}

const Main = styled.div`
  margin-left: 180px;
  padding: 20px;
`;

const Inner = styled.div`
  margin: 0 auto;
`;
