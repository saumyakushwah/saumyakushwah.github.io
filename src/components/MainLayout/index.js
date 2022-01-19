import { Layout, Menu, Breadcrumb } from "antd";
import Algorithm from "../Algorithm";
import CheckList from "../CheckList";
import MainGrid from "../MainGrid";
import SalesPromotion from "../SalesPromotion";
import { Typography } from "antd";
import SalesBox from "../SalesBox";
import MainFooter from "../MainFooter";
import Sidebar from "../Sidebar";
import Carousel from "../Carousel";
const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

export default function MainLayout() {
  return (
    <>
      <Layout className="site-layout">
        {/* <Header className="site-layout-background" style={{ padding: 0 }}>
          <div style={{ height: "40px" }}>
            <Title
              level={5}
              style={{
                color: "#fff", 
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              How to design referral programs that work? Get our new{" "}
              <span style={{ fontWeight: "bold" }}>
                Complete Referral Guide
              </span>{" "}
              (no sign-up required).
            </Title>
            <button className="header-btn">Download</button>
          </div>
        </Header> */}
        <Content>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item></Breadcrumb.Item>
              <Breadcrumb.Item></Breadcrumb.Item>
            </Breadcrumb> */}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <MainGrid
              heading={
                <>
                  The <span style={{ color: "#F9A802" }}>Promotion Engine</span>{" "}
                  for any
                  <br /> industry: API first,
                  <br /> customizable & scalable
                </>
              }
              para={
                <>
                  Explore our catalog to find APIs that help create optimal user{" "}
                  <br />
                  experiences and solutions to increase productivity and reduce{" "}
                  <br />
                  manual distribution costs.
                </>
              }
              btnText={"Get Started"}
              img={"/maingrid-img01.png"}
            />
          </div>
        </Content>
        <CheckList />
        <div style={{ backgroundColor: "#2C1F53" }}>
          <Title className="algorithm-heading">
            Save your time & make your sales promotions successful with{" "}
            <span style={{ color: "#F9A802" }}>MeriBachat</span>
          </Title>
        </div>
        <Algorithm />
        {/* <Carousel /> */}
        <SalesPromotion
          header={
            <>
              <span style={{ color: "#F9A802" }}>Sales Promotions</span> offered
              by us
            </>
          }
        />
        {/* <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <MainGrid
            heading={
              <>
                <span style={{ color: "#F9A802" }}>Unlimited Alteration</span>{" "}
                for <br />
                your coupons with our
                <br /> coupon software
              </>
            }
            para={
              <>
                Unlimited coupon customization. Build whatever you need,
                <br /> whenever you need it
              </>
            }
            btnText={"Learn more"}
            img={"/maingrid-img02.png"}
          />
        </div>
        
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <MainGrid
            heading={
              <>
                <span style={{ color: "#F9A802" }}>
                  Personalized geofence <br />
                  marketing
                </span>{" "}
                campaigns
              </>
            }
            para={
              <>
                Generate and manage digital gift cards on scale with top-
                <br />
                tier gift cards software.
              </>
            }
            btnText={"Learn more"}
            img={"/maingrid-img04.png"}
          />
        </div>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
        </div> */}
      </Layout>
    </>
  );
}
