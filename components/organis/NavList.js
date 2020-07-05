import Link from 'next/link';
import styled from 'styled-components';
import { color } from '../../utils/color';

const navListItem = ['マイページ', 'お題一覧', '設定'];
const NavList = () => {
  return (
    <NavLists>
      {navListItem.map((item, index) => (
        <li key={index}>
          <Link href="/">{item}</Link>
        </li>
      ))}
    </NavLists>
  );
};

const NavLists = styled.ul`
  display: flex;
  list-style: none;
  border-bottom: solid 1px #333;
  li {
    padding: 10px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    &:hover {
      background: red;
    }
    a {
      color: ${color.main};
      display: block;
      text-decoration: none;
    }
  }
`;

export default NavList;