import styled from 'styled-components';

export const Form = styled.form`
    /* outline: 1px solid red; */
    /* background-color: rgba(37, 32, 1, 0.829); */
    display: inline-flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 4px;
    color: rgb(243,229,171);
    padding: 25px;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
`;
// #f9a504;

export const Label = styled.label`
    outline: 1px solid red; 
    text-align: left;
`;

export const Input = styled.input`
    display: block;
    margin-top: 5px;
    color: rgb(240,220,130);
    padding: 7px 10px;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    border-radius: 4px;
    background-color: #4e5b314b;
    letter-spacing: 1.3px;
    border-color: #f9a504;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    box-shadow: #f9a504 0px 30px 60px -70px inset, rgba(0, 0, 0, 0.9) 0px 18px 36px -18px inset;
    /* box-shadow: #f9a504 0px 30px 60px -60px inset, rgba(0, 0, 0, 0.9) 0px 18px 36px -18px inset; */
    &:hover,
        &:focus {
            border: 2px solid #f9a504;
        }
        &::placeholder {
            color: rgb(240,220,130);
            font-style: italic;
        }
        &:valid:not(:placeholder-shown) {
            background-color: rgba(153, 205, 50, 0.315);
        }
        &:not(:valid):not(:placeholder-shown) {
            background-color: rgba(184, 59, 59, 0.24);
        }
`;