import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainGrid from "../MainGrid";
import QuesComp from "../QuesComp";
import SalesPromotion from "../SalesPromotion";
import SecondGrid from "../SecondGrid";
import ThirdGrid from "../ThirdGrid";

export default function LoyaltyLayout() {
  return (
    <>
      <Banner />
      <FloatingButton />
      <div className="home-class">
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <MainGrid
            heading={
              <>
                <span style={{ color: "#F9A802" }}>
                  Loyalty Managment
                  <br /> programs
                </span>{" "}
                to retain your
                <br /> consumers
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
            img={"/maingrid-img10.png"}
          />
          <br />
          <br />
          <SecondGrid
            gridHeading={
              <>
                <span style={{ color: "#F9A802" }}>Loyalty</span> Soulution for
                you
              </>
            }
            gridImg1="/i.png"
            gridImg2="/ii.png"
            gridImg3="/iii.png"
            gridPara1={<>Reward engagement</>}
            gridSubPara1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum, convallis est at porttitor facilisi maecenas sit."
            gridPara2="Ensure long-lasting loyalty"
            gridSubPara2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum, convallis est at porttitor facilisi maecenas sit."
            gridPara3="Multi-tiered & goal-oriented"
            gridSubPara3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum, convallis est at porttitor facilisi maecenas sit."
          />
          <ThirdGrid
            title={
              <>
                Build{" "}
                <span style={{ color: "#F9A802" }}>
                  data-driven loyalty interactions
                </span>{" "}
                in weeks, not months
              </>
            }
            subTitle={
              <>
                Our loyalty platform being flexible & modular allows your team
                to use our building blocks with minimum upfront integration and
                slowly connect them to different touch points & systems as you
                grow <br /> <br />
                Thanks to our elastic approach, you can select any program
                criteria, tiers, and rewards that are relevant to your business.
              </>
            }
            titleImg="/uu.png"
          />
          <ThirdGrid
            reverse
            title={
              <>
                <span style={{ color: "#F9A802" }}>Reward</span> more than
                orders
              </>
            }
            subTitle={
              <>
                Let customers earn points for any activity – from purchases to
                reviews and referrals.
                <br />
                <br />
                • Orders & purchasing selected items.
                <br />
                • Referring new customers.
                <br />
                • Sharing personal data.
                <br />
                • Filling out surveys & writing product reviews.
                <br />
                • Visiting your brick-and-mortar stores & participating in
                events.
                <br />
                • Following & sharing on social media.
                <br />• Any other event important to you.
              </>
            }
            titleImg="/vv.png"
          />
          <ThirdGrid
            title={
              <>
                Give
                <span style={{ color: "#F9A802" }}> customers</span> what they
                want
              </>
            }
            subTitle={
              <>
                Surprise users with prizes tailored to their profiles and allow
                them to access rewards anywhere in the journey. Using our
                loyalty software gamify the reward mechanics with tier-based
                rewards with different point multipliers.
                <br />
                <br />
                Let customers redeem points for awesome rewards
              </>
            }
            titleImg="/ww.png"
          />
        </div>
      </div>
      <div style={{ backgroundColor: "#2C1F53" }}>
        <QuesComp
          ques={
            <>
              Want to build a{" "}
              <span style={{ color: "#F9A802" }}>
                data based loyality program
              </span>
            </>
          }
          quesPara="We are here"
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
