import styled from 'styled-components';
import { color } from '@/utils/color';

export default({ children, type, handleClick, className }) => {
  const Button = styled.button`
  padding: 10px 5px;
  text-align: center;
  color: #fff;
  min-width: 100px;
  font-weight: bold;
  border-radius: 4px;
  background: ${type ? color[type] : color['glay']};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`

  return (
    <Button onClick={handleClick} className={className}>
      {children}
    </Button>
  );
};