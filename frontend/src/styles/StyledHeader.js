import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};

  .logo {
    color: ${(props) => props.theme.colors.white};
    font-size: 36px;
  }
  .btn-login {
    display: inline-block;
    padding: 24px;
    color: ${(props) => props.theme.colors.white};
  }
`;
