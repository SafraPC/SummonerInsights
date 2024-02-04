import styled from "styled-components";

interface ButtonProps {
  isDisabled?: boolean;
  isLoading?: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ isDisabled }) => (isDisabled ? "transparent" : "#d13639")};
  border: ${({ isLoading }) => (isLoading ? "none" : "2px solid")};
  border-color: ${({ isDisabled }) => (isDisabled ? "gray" : "#d13639")};
  display: flex;
  width: 70px;
  height: 65px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: ${({ isDisabled, isLoading }) => (isDisabled || isLoading ? "none" : "auto")};
`;
