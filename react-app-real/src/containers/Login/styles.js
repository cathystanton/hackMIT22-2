import styled from 'styled-comonents';

export const LogButton = styled.button = `
    color: ${({theme}) => theme.color.login_button};
    font-size: ${({theme}) => theme.font.body.font_size};
    position: center;
    align-items: center;
    text-color: white;
`