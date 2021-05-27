import styled from 'styled-components';
import { Button, TextField, Typography } from '@material-ui/core';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    height: 300px;
    width: 500px;
    border: 3px solid rgba(126, 186, 181, 1);
    border-radius: 10px;
    padding: 15px;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
    padding: 15px;
`;

export const StyledTextField = styled(TextField)`
    width: 80%;
    margin-left: 10px;
    background-color: rgba(202, 240, 250, 0.2);
`;

export const SubmitButton = styled(Button)`
    background-color:rgba(126, 186, 181, 1);
    width:20%;
    margin: auto;
    color: white;
    &:hover{
        background-color:rgba(126, 186, 181, 0.8);
    }
`;

export const RegisterLink = styled(Button)`
    color: blue;
    margin:auto;
    text-decoration:underline;
    &:hover{
        background-color:white;
    }
`;

export const StyledTypography = styled(Typography)`
    width:20%;
    text-align: center;
`;
