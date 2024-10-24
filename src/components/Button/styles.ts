import styled from 'styled-components';
import { IButtonContainerProps } from './types'


export const ButtonContainer = styled.button<IButtonContainerProps>`
    width: 100%;
    height: 42px;

    background-color: ${({disabled}) => (disabled ? 'lightgrey' : '#81259D')};

    color: ${({disabled}) => (disabled ? '#000' : '#FFF')};

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: ${({disabled}) => (disabled ? 0.6 : 1)};
        cursor: ${({disabled}) => (disabled ? 'not-allowed' : 'pointer')};
    }
`