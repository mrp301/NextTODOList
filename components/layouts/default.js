import SideBar from '../organisms/SideBar';
import styled from 'styled-components';

const LayoutDefault = ({ children }) => (
  <Flex>
    <SideBar />
    <Main>
      {children} 
    </Main>
  </Flex>
);

const Flex = styled.div`
  display: flex;
`

const Main = styled.main`
  flex: 1 1 auto;
  width: 100%;
  min-height: 100vh;
  background: #f1f5f8;
`

export default LayoutDefault;