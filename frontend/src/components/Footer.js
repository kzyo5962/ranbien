import React from "react";
import {Container, Row,Col} from "react-bootstrap";
import {StyledFooter} from "../styles/StyledFooter"
const Footer = () => {
  return (
      <StyledFooter>
          <Container >
          <Row className="footer-title">
              RẠN BIỂN – MANG CẢ BIỂN KHƠI VỀ NƠI THÀNH PHỐ
          </Row>
          </Container>
          <div className="footer-info">
          <Container >
              <Row>
                  <Col className="list-info">
                      <h5>thông tin liên hệ</h5>
                      <p>Đ/c: 195 Nam Kỳ Khởi Nghĩa, P7, Q3, Tp HCM</p>
                      <p>Hotline: 0827 846 222</p>
                      <p>Email: pkd.ranbien@gmail.com</p>
                      <p>Tìm cửa hàng gần nhất</p>
                  </Col>
                  <Col className="list-info">
                      <h5>chăm sóc khách hàng</h5>
                      <p>Tin tức & Sự Kiện</p>
                      <p>Hướng dẫn mua hàng</p>
                      <p>Đổi Trả Sản Phẩm</p>
                      <p>Giao Hàng & Vận Chuyển</p>
                      <p>Chính Sách Giải Quyết Khiếu Nại</p>
                  </Col>
                  <Col className="list-info">
                      <h5>FACEBOOK FANPAGE</h5>
                  </Col>
              </Row>
          </Container>
          </div>
          <div className="footer-policy">
              <h6>chính sách bảo mật</h6>
              <h6>chính sách giải quyết khiếu nại</h6>
              <h6>giao hàng & vận chuyển</h6>
              <p>Công ty TNHH TM DV Trường Sa</p>
              <p>Địa chỉ: 20 Phan Thúc Duyện, P1,Q Tân Bình, Tp. Hồ Chí Minh</p>
              <p>Mã số doanh nghiệp: 0310545331 - Do sở Kế Hoạch và Đầu Tư TPHCM cấp ngày 29/12/2010</p>
              <p>© 2022 Hải Sản Rạn Biển. Tất cả các quyền được bảo lưu.</p>
          </div>
      </StyledFooter>
  );
};

export default Footer;
