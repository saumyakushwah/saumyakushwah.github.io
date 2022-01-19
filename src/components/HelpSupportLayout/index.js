import { Card, Col, Row, Typography } from "antd";
import { Input } from "antd";

const { Search } = Input;
const { Title } = Typography;
const { Meta } = Card;

export default function HelpSupportLayout() {
  const onSearch = (value) => console.log(value);
  return (
    <div style={{ background: "#2C1F53" }}>
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          style={{
            textAlign: "right",
            paddingBottom: "30px",
            paddingTop: "30px",
          }}
        >
          <button className="btn-one">Get Started</button>
          <button className="btn-two">Get Started</button>
        </div>
        <Title className="support-heading" style={{ color: "#fff !important" }}>
          How can we help you??
        </Title>
        <div style={{ textAlign: "center", paddingBottom: "100px" }}>
          <Search
            placeholder="Search any keywords"
            allowClear
            onSearch={onSearch}
            style={{ width: 750 }}
          />
        </div>
      </div>
      <div style={{ padding: "80px 200px" }}>
        <Title style={{ color: "#fff", fontSize: "48px", textAlign: "center" }}>
          Getting started
        </Title>
        <Row>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
        <Title
          style={{
            color: "#fff",
            fontSize: "48px",
            textAlign: "center",
            padding: "80px 0 0 0",
          }}
        >
          Campaigns
        </Title>
        <Row>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
        <Title
          style={{
            color: "#fff",
            fontSize: "48px",
            textAlign: "center",
            padding: "80px 0 0 0",
          }}
        >
          Integrations
        </Title>
        <Row>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
        <Title
          style={{
            color: "#fff",
            fontSize: "48px",
            textAlign: "center",
            padding: "80px 0 0 0",
          }}
        >
          Use cases
        </Title>
        <Row>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={2} sm={4} md={6} lg={14} xl={8}>
            <Card
              hoverable
              style={{
                width: 240,
                padding: "150px 140px",
                borderRadius: "11px",
                margin: "10px 40px 20px 0",
              }}
            >
              {/* <Title level={5}>Name</Title> */}
              <Meta title="Name" style={{ textAlign: "center" }} />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
