import styled from 'styled-components';
import Link from 'next/link';
import SideBarList from '@/components/organisms/SideBarList';
import css from "@/styles/utils.scss"
import { color } from '@/utils/color';

const request = [
  { text: '未消化', href: '/', icon: 'task' },
  { text: 'セルフ', href: '/', icon: 'self' },
  { text: 'お気に入り', href: '/', icon: 'star' },
  { text: '消化済み', href: '/', icon: 'done' },
  { text: '全て', href: '/', icon: 'all' },
];

const other = [
  { text: '設定', href: '/', icon: 'setting' },
  { text: 'スタイルガイド', href: '/styleGuide/', icon: 'guide' },
]

const SideBar = () => (
  <Aside>
    <Logo>
      <Link href="/"><a>お題箱</a></Link>
    </Logo>
    <ListContainer>
      <SideBarList
        title="お題管理"
        list={request}
        className={css['marginBottm--small']}
      />
      <SideBarList
        title="その他"
        list={other}
      />
    </ListContainer>
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
  background: ${color['glay3']};
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

const ListContainer = styled.div`
  flex: 1 1 auto;
`

const User = styled.div`
  flex: 0 0 auto;
`

const Name = styled.p`
  font-size: 12px;
  line-height: normal;
`

const Email = styled.p`
  color: ${color['glay1']};
  font-size: 12px;
  line-height: normal;
`


export default SideBar;