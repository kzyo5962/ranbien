import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StyledFooter } from "../styles/StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-title">
        <Container>
          <Row>
            <Col>
              <h1>RẠN BIỂN - MANG CẢ BIỂN KHƠI VỀ NƠI THÀNH PHỐ</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col lg={4}>
            <h6>thông tin liên hệ</h6>
            <p>Đ/c: 195 Nam Kỳ Khởi Nghĩa, P7, Q3, Tp HCM</p>
            <p>Hotline: 0827 846 222</p>
            <p>Email: pkd.ranbien@gmail.com</p>
            <p>Tìm cửa hàng gần nhất</p>
          </Col>
          <Col lg={4}>
            <h6>chăm sóc khách hàng</h6>
            <p>Tin tức & Sự Kiện</p>
            <p>Hướng dẫn mua hàng</p>
            <p>Đổi Trả Sản Phẩm</p>
            <p>Giao Hàng & Vận Chuyển</p>
            <p>Chính Sách Giải Quyết Khiếu Nại</p>
          </Col>
          <Col lg={4}>
            <h6>FACEBOOK FANPAGE</h6>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="footer-policy text-center">
              <div className="d-flex justify-content-center align-items-center">
                <h5>chính sách bảo mật</h5>
                <h5>chính sách giải quyết khiếu nại</h5>
                <h5>giao hàng & vận chuyển</h5>
              </div>
              <div className="footer-info">
                <p>Công ty TNHH TM DV Trường Sa</p>
                <p>Địa chỉ: 20 Phan Thúc Duyện, P1,Q Tân Bình, Tp. Hồ Chí Minh</p>
                <p>
                  Mã số doanh nghiệp: 0310545331 - Do sở Kế Hoạch và Đầu Tư TPHCM cấp ngày
                  29/12/2010
                </p>
                <p>© 2022 Hải Sản Rạn Biển. Tất cả các quyền được bảo lưu.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
