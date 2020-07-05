import TheHeader from '../organis/TheHeader';
import TheFooter from '../organis/TheFooter';
import NavList from '../organis/NavList';

const LayoutDefault = ({ children }) => (
  <div>
    <TheHeader />
    <NavList />
      {children} 
    <TheFooter />
  </div>
);

export default LayoutDefault;