import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    gap: 15px;
    margin: 0;
    padding: 0;
`;

export const Button = styled.button`
    
    padding: 5px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    ::first-letter {
        text-transform: uppercase;
    }
`;