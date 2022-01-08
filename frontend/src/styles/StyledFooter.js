import styled from "styled-components";

export const StyledFooter = styled.footer`
  p {
    font-size: ${(props) => props.theme.fontSizes.p};
  }
  h5 {
    font-size: ${(props) => props.theme.fontSizes.h5};
    font-weight: 400;
  }
  h6 {
    font-size: ${(props) => props.theme.fontSizes.h6};
  }

  .footer-title {
    border-top: 4px solid ${(props) => props.theme.colors.red};
    background-color: ${(props) => props.theme.colors.white};
  }
  .footer-title h1 {
    font-size: ${(props) => props.theme.fontSizes.h1};
  }
  .footer-info {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;
