import Banner from "../Banner";
import { Typography } from "antd";
import TabsContainer from "../TabsContainer";
import SalesPromotion from "../SalesPromotion";
import QuesComp from "../QuesComp";
import FloatingButton from "../FloatingButton";
const { Title } = Typography;

export default function IntegrationsLayout() {
  return (
    <>
      <Banner />
      <FloatingButton />
      <div
        className="integrations-heading"
        style={{ backgroundColor: "#2C1F53" }}
      >
        <Title className="integrations-heading-title">
          Supercharge your promotions with powerful integrations
        </Title>
      </div>
      <TabsContainer />
      <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques={
            <>
              Are you wasting time and money on{" "}
              <span style={{ color: "#F9A802" }}>Enterprise Analytics</span>
            </>
          }
          quesPara="It’s time to change"
          quesBtn="Get Started"
        />
      </div>
      <div className="sales-promotion-class">
        <SalesPromotion
          header={
            <div style={{ textAlign: "center" }}>
              One solution for every problem:
              <span style={{ color: "#F9A802" }}> MeriBachat</span>
            </div>
          }
        />
      </div>
    </>
  );
}
