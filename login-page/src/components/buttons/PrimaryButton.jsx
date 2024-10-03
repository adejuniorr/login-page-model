import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  width: ${({ $width }) => $width || "fit-content"};
  height: 40px;
  padding: 0 16px;
  border-radius: 4px;
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: var(--blue);
  box-shadow: 0 0 0 var(--orange);
  font-size: 16px;
  color: #fff;
  transition: transform 300ms ease, box-shadow 250ms ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 0 var(--orange);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 var(--orange);
  }

  &:disabled {
    background-color: #dbdbdb;
    color: var(--blue);
    border: 2px solid var(--blue);
    pointer-events: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }

  @media (max-width: 770px) {
    box-shadow: none;

    &:hover {
      transform: none;
      box-shadow: none;
    }

    &:active {
      transform: none;
      box-shadow: inset 0 0 5px #000;
      color: #eee;
    }
  }
`;

export const PrimaryButton = ({
  text,
  width,
  leftIcon,
  rightIcon,
  disabled,
}) => {
  return (
    <Button $width={width} disabled={disabled}>
      {leftIcon} {text} {rightIcon}
    </Button>
  );
};
