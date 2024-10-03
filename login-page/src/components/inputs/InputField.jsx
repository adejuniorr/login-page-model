import styled from "styled-components";

export const InputField = styled.div`
  width: 100%;

  .floating_label {
    display: flex;
    align-items: center;
    position: relative;
    top: 24px;
    left: 10px;
    font-size: 18px;
    color: #555;
    pointer-events: none;
    transition: 0.2s ease all;
    height: 16px;
    z-index: 1;
    width: 10px;
    white-space: nowrap;
  }

  &:has(input:not(:placeholder-shown)),
  &:has(input:focus) {
    .floating_label {
      top: 0;
      font-size: 16px;
      color: var(--blue);

      &.disabled {
        color: #222;
      }
    }

    &:has(.error) {
      .floating_label {
        color: red;
      }
    }
  }

  input:not(:focus) {
    &::placeholder {
      color: #fff;
    }
  }

  .input_container {
    display: flex;
    gap: 4px;
    padding: 10px;
    border-radius: 4px;
    border-bottom: 4px solid var(--blue);
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(153, 153, 153, 0.15)
    );

    input {
      font-size: 18px;
      width: 100%;
      outline: none;
      background: none;
    }

    svg {
      width: 18px;
      color: var(--blue);
    }

    &.error {
      border-color: red;

      svg {
        color: red;
      }
    }
  }

  .input_error_msg {
    height: 20px;
    color: red;
  }

  input::-ms-clear,
  input::-ms-reveal {
    display: none;
  }
`;
