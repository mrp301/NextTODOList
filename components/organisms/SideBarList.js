import styled from 'styled-components';
import Link from 'next/link';
import { color } from '@/utils/color';

const SideBarList = ({ title, list, className }) => {
  const items = list.map(({ text, href, icon }) => {
    return (
      <Item key={text}>
        <Link href={href}>
          <a>
            <Icon
              type="image/svg+xml"
              data={`../../static/images/icon_${icon}.svg`}
            />{text}
          </a>
        </Link>
      </Item>
  )});

  return (
    <div className={className}>
      <Title>{title}</Title>
      <List>
        {items}
      </List>
    </div>
  );
};

const Title = styled.p`
  display: flex;
  align-items: center;
  height: 32px;
  color: ${color['glay1']};
  font-size: 12px;
`

const List = styled.ul`
  flex: 1 1 auto;
  &li:not(::last-child) {
    margin-bottom: 12px;
  }
`

const Item = styled.li`
  a {
    display: flex;
    align-items: center;
    padding: 5px;
    height: 32px;
    width: 100%;
    font-size: 14px;
    color: ${color['glay0']};
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    background: #494949;
  }
`;

const Icon = styled.object`
  margin-right: 8px;
  width: 18px;
  height: 18px;
`;

export default SideBarList;