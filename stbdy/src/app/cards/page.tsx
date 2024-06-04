import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import AllUsers from "../components/AllUsers";

export default function Page() {
  return (
    <>
      <MainHeader />
      <div>
        <h1>Cards</h1>
        <AllUsers />
      </div>
      <MainFooter />
    </>
  );
}
