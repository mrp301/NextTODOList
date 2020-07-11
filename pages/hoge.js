import React from 'react';
import List from '@/components/presentational/Task/List';

export default class SomePage extends React.Component {

  // getInitialProps = asyncData
  // pagaでのみ使える
  static async getInitialProps() {
    return {};
  }

  /* getInitialProps()で返した値がコンポーネントにPropsとして渡されてくる */
  // サーバーサイドおよび、クライアントサイドで取得したデータをもとにレンダリング。
  render () {
    return (
      <div>
        <p>fuga2</p>
        <List />
      </div>
    )
  }
}