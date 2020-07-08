import styled from 'styled-components';
import { color } from '../../utils/color';
import styles from '../../styles/base.scss';

const AppPanel = ({ children, panelTitle }) => (
  <Panel>
    <Body>
      <Title>{panelTitle}</Title>
      <p>{children}</p>
    </Body>
  </Panel>
);

const Panel = styled.li`
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 10px;
  }
  &:hover {
    background: #f5f5f5;
  }
`

const Title = styled.h2`
  margin-bottom: 8px;
  color: ${color.primary};
  font-weight: bold;
  font-size: 18px;
`

const Body = styled.div`
  padding: 10px;
`

const Text = styled.p`
  font-size: 14px;
  color: red;
`

const Icon = styled.div`
  padding: 10px;
`

const Menu = styled.div`
`

export default AppPanel;