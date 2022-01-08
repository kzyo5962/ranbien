import styled from "styled-components";

export const StyledFooter = styled.footer`
    width:100%;
  h5{
    text-transform: uppercase;
  }
    ::before{
      content: "";
      display: block;
      width: 100%;
      height: 5px;
      background: red;
    }
  .footer-title{
    margin: 20px;
    padding: 10px 0 0 0 ;
     left: 0;
  }
  .footer-info{
    width: 100% !important;
    cursor: pointer;
   background: #fbfbfb;
    padding-top: 15px;
  }
  .list-info{
    font-size: 12px;
  }
  .footer-policy {
    background-color:#f5f5f5 ;
    text-align: center;
    position: relative;
  }
  .footer-policy h6{
    display: inline-block;
    padding: 5px;
    line-height: 1.6;
  }
  .footer-policy h6+h6::after{
    content: "";
    position: absolute;
    display: block;
    height: 14px;
   border: 1px solid black;
    background-color: #0d0d0d ;
    line-height: 1.6;
    transform: translate(-300%,-100%);
  }
  .footer-policy p{
    font-size: 12px;
  }
`;