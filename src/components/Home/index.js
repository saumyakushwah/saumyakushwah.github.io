import Banner from "../Banner";
import FloatingButton from "../FloatingButton";
import MainFooter from "../MainFooter";
import MainLayout from "../MainLayout";

export default function Home() {
  return (
    <>
      <Banner />
      <FloatingButton />
      <div className="home-class">
        <MainLayout />
      </div>
      <MainFooter />
    </>
  );
}
