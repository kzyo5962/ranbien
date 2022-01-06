import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { StyledHeader } from "../styles/StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Link to="/" className="logo">
          RẠN BIỂN
        </Link>
        <Link to="/login" className="btn-login">
          LOGIN
        </Link>
      </Container>
    </StyledHeader>
  );
};

export default Header;
