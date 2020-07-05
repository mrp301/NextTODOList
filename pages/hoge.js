import React from 'react';

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
      <p>fuga</p>
    )
  }
}