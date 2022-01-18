import { Col, Row } from "antd";
import ICON from "../../icons";
import { Typography } from "antd";
import { Layout } from "antd";
const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

export default function MainFooter() {
  return (
    <div style={{ paddingTop: "30px", paddingBottom: "30px" }}>
      <Footer style={{ textAlign: "center" }}>
        <Row>
          <Col xs={8} sm={8} md={8} lg={4} xl={4}>
            {ICON.websiteLogo()}
          </Col>
          <Col xs={8} sm={8} md={8} lg={4} xl={4} className="footer-links-box">
            <div className="footer-links">
              <Title level={5}>Features</Title>

              <li>
                <a href="/#coupons">Coupon software</a>
              </li>
              <li>
                <a href="/#cartlevel">Cart-level promotion software</a>
              </li>
              <li>
                <a href="/#giftcards">Gift cards software</a>
              </li>
              <li>
                <a href="/#productbundling">Product bundling</a>
              </li>
              <li>
                <a href="/#loyalty">Loyalty program software</a>
              </li>
              <li>
                <a href="/#referralprograms">Referral program software</a>
              </li>
              <li>
                <a href="/#giveaway">Giveaways software</a>
              </li>
              <li>
                <a href="/#digitalwallets">Digital wallets</a>
              </li>
              <li>
                <a href="/#geofencing">Geofence promotions</a>
              </li>
            </div>
          </Col>
          <Col xs={8} sm={8} md={8} lg={4} xl={4} className="footer-links-box">
            <div className="footer-links">
              <Title level={5}>Meribachat for...</Title>

              <li>
                <a href="/#enterprise">Enterprise</a>
              </li>
              <li>
                <a href="/#marketers">Marketers</a>
              </li>
              <li>
                <a href="/#productmanagers">Product managers</a>
              </li>
              <li>
                <a>Developers</a>
              </li>
            </div>
          </Col>
          <Col xs={8} sm={8} md={8} lg={4} xl={4} className="footer-links-box">
            <div className="footer-links">
              <Title level={5}>For Marketers</Title>

              <li>
                <a href="/#integrations">Integrations</a>
              </li>
              <li>
                <a>Success portal</a>
              </li>
              <li>
                <a>Inspiration library</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Roadmap</a>
              </li>
              <li>
                <a>Help Center</a>
              </li>
              <li>
                <a>Promotions Hub</a>
              </li>
            </div>
          </Col>
          <Col xs={8} sm={8} md={8} lg={4} xl={4} className="footer-links-box">
            <div className="footer-links">
              <Title level={5}>For Developers</Title>

              <li>
                <a>Documentation</a>
              </li>
              <li>
                <a>API status</a>
              </li>
            </div>
          </Col>
          <Col xs={8} sm={8} md={8} lg={4} xl={4} className="footer-links-box">
            <div className="footer-links">
              <Title level={5}>Company</Title>

              <li>
                <a>About</a>
              </li>
              <li>
                <a>Our partners</a>
              </li>
              <li>
                <a>Career</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>Legal</a>
              </li>
            </div>
          </Col>
        </Row>
      </Footer>
    </div>
  );
}
