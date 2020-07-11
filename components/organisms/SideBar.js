import styled from 'styled-components';
import Link from 'next/link';

const SideBar = () => (
  <Aside>
    <Logo>
      <Link href="/"><a>お題箱</a></Link>
    </Logo>
    <List>
      <li>未消化</li>
      <li>セルフ</li>
      <li>消化済み</li>
      <li>全件</li>
      <li>設定</li>
    </List>
    <User>
      <Name>mrbleのお題箱</Name>
      <Email>tubdaka490@gmail.com</Email>
    </User>
  </Aside>
);

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px 15px;
  width: 180px;
  height: 100vh;
  color: #fff;
  background: #323232;
`
const Logo = styled.h1`
  flex: 0 0 auto;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  a {
    color: #fff;
    text-decoration: none;
  }
`

const List = styled.ul`
  flex: 1 1 auto;
  li {
    display: flex;
    align-items: center;
    height: 32px;
    color: #9f9f9f;
    &:hover {
      cursor: pointer;
      background: #494949;
    }
  }
`

const User = styled.div`
  flex: 0 0 auto;
`

const Name = styled.p`
  font-size: 12px;
  line-height: normal;
`

const Email = styled.p`
color: #9f9f9f;
  font-size: 12px;
  line-height: normal;
`


export default SideBar;