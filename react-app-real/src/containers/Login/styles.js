import styled from 'styled-components';

export const LogButton = styled.button`
    color: ${({theme}) => theme.color.layout.login_button};
    font-family: ${({theme}) => theme.font.body.font_family};
    font-size: ${({theme}) => theme.font.body.font_size};
    font-color: "white";
    align-items: center;
    position: center;
`