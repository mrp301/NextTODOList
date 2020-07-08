import styled from 'styled-components';
import { color } from '../../utils/color';

const AppCard = ({ children, title, headerText }) => (
  <Card>
    <Header>
      <Title>{title}</Title>
      <HeaderText>{headerText}</HeaderText>
    </Header>
    <Body>
      {children}
    </Body>
  </Card>
);

const Card = styled.div`
  background: #fff;
  box-shadow: 0 0 6px -3px rgba(0, 0, 0, 1);
`

const Header = styled.div`
  padding: 10px;
  background: ${color.primary};
`

const Title = styled.h2`
  margin-bottom: 8px;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`

const HeaderText = styled.p`
  color: #fff;
  font-size: 12px;
`

const Body = styled.div`
  padding: 20px;
`

export default AppCard;