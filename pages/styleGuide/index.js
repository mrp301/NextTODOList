import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import AppButton from '@/components/presentational/AppButton';
import AppCard from '@/components/presentational/AppCard';
import AppPanel from '@/components/presentational/AppPanel';
import PanelList from '@/components/organisms/PanelList';
import Layout from '@/components/layouts/default';
import List from '@/components/presentational/Task/List';
import AppInputWithLabel from '@/components/presentational/Form/AppInputWithLabel';
import css from "@/styles/utils.scss"
import settings from "@/utils/settings";

export default class SomePage extends React.Component {
  static async getInitialProps() {
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      hoge: '',
    };
  }

  handleChange({ name, value }) {
    this.setState({[name]: value});
  }

  render () {
    return (
      <div>
        <Head>
          <title>スタイルガイド{settings.title}</title>
        </Head>
        <Layout>
          <Main>
            <Inner>
              <AppCard
                title="ダッシュボード"
                headerText={<span>テキストテキストテキスト<br />テキストテキストテキスト</span>}
                className={css['marginBottm--small']}
              >
                <PanelList>
                  <AppPanel panelTitle="お題の作成">
                    自分のお題を作成します。
                  </AppPanel>
                  <AppPanel panelTitle="お題の管理">
                    <span>もらったお題の<br />管理ができます。</span>
                  </AppPanel>
                  <AppPanel panelTitle="設定">
                    <span>何かの設定ができます。</span>
                  </AppPanel>
                </PanelList>
              </AppCard>
              <AppCard
                title="お題リスト"
                headerText={<span>テキストテキストテキスト<br />テキストテキストテキスト</span>}
                className={css['marginBottm--small']}
              >
                <List />
              </AppCard>
              <AppCard
                title="フォームパーツ"
                headerText={<span>ログイン・アカウント作成・お題作成用</span>}
              >
                <AppInputWithLabel
                  label="メールアドレス"
                  name="email"
                  value={this.state.email}
                  placeholder="メールアドレス"
                  isError={false}
                  errorText="メールアドレスが未入力です"
                  onChange={e => this.handleChange(e)}
                  className={css['marginBottm--xsmall']}
                />
                <AppInputWithLabel
                  label="パスワード"
                  name="password"
                  value={this.state.password}
                  placeholder="パスワード"
                  isError={false}
                  errorText="パスワードが未入力です"
                  onChange={e => this.handleChange(e)}
                  className={css['marginBottm--xsmall']}
                />
                <AppButton
                  type="primary"
                  handleClick={() => {console.log('ほげ')}}
                  className={css['marginRight--xxsmall']}
                >プライマリー
                </AppButton>
                <AppButton handleClick={() => {console.log('ほげ')}}>送信</AppButton> 
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
