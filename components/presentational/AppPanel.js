import styled from 'styled-components';
import { color } from '@/utils/color';
import Link from 'next/link';

const AppPanel = ({ children, panelTitle }) => (
  <Link href="/hoge" passHref>
    <Panel>
      <Icon><img src="../../static/images/icon_create.png" /></Icon>
      <Body>
        <Title>{panelTitle}</Title>
        <Text>{children}</Text>
      </Body>
    </Panel>
  </Link>
);

const Panel = styled.li`
  width: 30%;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  border: solid 1px #e6e8eb;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background: #f5f5f5;
  }
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  height: 160px;
`

const Title = styled.h2`
  margin-bottom: 4px;
  color: ${color.primary};
  font-weight: bold;
  font-size: 18px;
`

const Body = styled.div`
  padding: 10px;
`

const Text = styled.p`
  font-size: 14px;
`

export default AppPanel;