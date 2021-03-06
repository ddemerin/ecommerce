import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem;
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 0.5rem;
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
