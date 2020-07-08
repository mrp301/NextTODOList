import styled from 'styled-components';

const TheHeader = () => (
  <Header>
    <Inner>
      ヘッダー
    </Inner>
  </Header>
);

const Header = styled.div`
  padding: 5px 10px;
  background: #fff;
`

const Inner = styled.header`
  margin: 0 auto;
  width: 944px;
`;

export default TheHeader;