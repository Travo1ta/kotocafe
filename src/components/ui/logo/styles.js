import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// Общие стили для логотипа (вынесены в переменную)
const logoStyle = css`
  display: flex;
  height: 44px;
  align-items: center;
`;

// Стили для логотипа-ссылки (на всех страницах кроме главной)
export const StyledLogo = styled(Link)`
  ${logoStyle}
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

// Стили для логотипа-текста (на главной странице - некликабельный)
export const StyledLogoMainPage = styled.span`
  ${logoStyle}
`;

export const Text = styled.span`
  display: flex;
  height: 44px;
  margin-left: 24px;
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  color: ${(props) => props.theme.colorBlackForText};
`;