import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Rectangle = styled.div`
  background-color: ${({theme}) => theme.navbar};
  width: 100vw;
  height: 10vh;
`

export const NavLink = styled.div`
  font-family: ${({theme}) => theme.font.paragraph_font};
  font-size: 16px;
  display: inline-block;
  height: 10vh;
  padding-right: 5vh;
  padding-left: 5vh;
  line-height: 10vh;
  color: ${({theme}) => theme.font.paragraph_color};

  &:hover {
    background-color: ${({theme}) => theme.hover};
    color: ${({theme}) => theme.site_background};
  };

  &.child {
    background-color: ${({theme}) => theme.on_page};
    color: ${({theme}) => theme.site_background};
  };
`

export const Right = styled.div`
  font-family: ${({theme}) => theme.font.paragraph_font};
  font-size: 16px;
  display: inline-flexbox;
  float: right;
  height: 10vh;
  padding-right: 5vh;
  padding-left: 5vh;
  line-height: 10vh;

  &:hover {
    background-color: ${({theme}) => theme.hover};
    color: ${({theme}) => theme.site_background};
  };

  &.true {
    background-color: ${({theme}) => theme.on_page};
    color: ${({theme}) => theme.site_background};
  };
`

export const UpdatedLink = styled(Link)`
  color: ${({theme}) => theme.font.paragraph_color};
  text-decoration: none;

  &:hover {
    color: ${({theme}) => theme.site_background};
  }
`