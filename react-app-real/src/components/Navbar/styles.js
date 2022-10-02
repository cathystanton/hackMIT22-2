import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Rectangle = styled.div`
  background-color: ${({theme}) => theme.color.layout.navbar};
  width: 100vw;
  height: 10vh;
`

export const NavLink = styled.div`
  font-family: ${({theme}) => theme.font.body.font_family};
  font-size: 16px;
  display: inline-block;
  height: 10vh;
  padding-right: 5vh;
  padding-left: 5vh;
  line-height: 10vh;
  color: ${({theme}) => theme.color.font.paragraph};

  &.child {
    background-color: ${({theme}) => theme.color.layout.navbar_highlight};
    color: ${({theme}) => theme.color.layout.background};
  };
`

export const Right = styled.div`
  font-family: ${({theme}) => theme.font.body.font_family};
  font-size: 16px;
  display: inline-flexbox;
  float: right;
  height: 10vh;
  padding-right: 5vh;
  padding-left: 5vh;
  line-height: 10vh;

  &.true {
    background-color: ${({theme}) => theme.color.layout.navbar_highlight};
    color: ${({theme}) => theme.color.layout.background};
  };
`

export const UpdatedLink = styled(Link)`
  color: ${({theme}) => theme.color.layout.navbar};
  text-decoration: none;

  &:hover {
    color: ${({theme}) => theme.color.font.paragraph};
  }
`