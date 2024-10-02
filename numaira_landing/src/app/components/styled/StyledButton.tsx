import styled from "styled-components";
import { Colors } from "../../colors";
export const StyledButton = styled.button`
    background: linear-gradient(${Colors.brand200}, ${Colors.brand500});
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    font-size: 1rem;
    font-weight: 500;
    &:hover {
        background: linear-gradient(${Colors.brand200}, ${Colors.brand500});
    }
`;