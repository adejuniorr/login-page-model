import styled from "styled-components";

const LinkContainer = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ $alignment }) => $alignment || "center"};
`;

export const Link = ({ href, target, additionalText, text, alignment }) => {
  return (
    <LinkContainer $alignment={alignment}>
      {additionalText}
      <a href={href} target={target}>
        {text}
      </a>
    </LinkContainer>
  );
};
