import { Button, Col, Row } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

export default function MainGrid({ heading, para, btnText, img }) {
  return (
    <div className="maingrid-section">
      <Row justify="space-around" align="middle">
        <Col xs={24} sm={24} md={24} lg={14} xl={14}>
          <Title
            style={{ color: "#fff", fontSize: "45px" }}
            className="main-grid-heading"
          >
            {heading}
          </Title>
          <Title level={5} style={{ color: "#fff" }} className="main-grid-para">
            {para}
          </Title>
          <button type="primary" className="maingrid-button">
            {btnText}
          </button>
        </Col>
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <img src={img} alt="cards" className="maingrid-img" />
        </Col>
      </Row>
    </div>
  );
}
