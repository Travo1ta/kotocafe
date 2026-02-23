import styled from 'styled-components';
import BaseLi from '../../../styled/li/li'; // переименовали импорт

export const StyledLi = styled(BaseLi)` // используем переименованный импорт
  margin-bottom: 10px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background-color: ${(props) => props.theme.colorWhite};
  border-radius: ${(props) => (props.open ? '10px 10px 0 0' : '10px')};
  cursor: pointer;
  transition: border-radius 0.2s ease-out;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Arrow = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-right: 2px solid ${(props) => props.theme.colorBlackForText};
  border-bottom: 2px solid ${(props) => props.theme.colorBlackForText};
  transform: ${(props) => (props.open ? 'rotate(-135deg)' : 'rotate(45deg)')};
  transition: transform 0.2s ease-out;
`;

export const Wrapper = styled.div`
  height: ${(props) => (props.open ? `${props.height}px` : '0')};
  overflow: hidden;
  transition: height 0.2s ease-out;
  background-color: ${(props) => props.theme.colorWhite};
  border-radius: 0 0 10px 10px;
`;

export const ContentWrapper = styled.div`
  padding: 0 20px 20px;
  
  ul {
    margin: 10px 0;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 5px;
  }
`;