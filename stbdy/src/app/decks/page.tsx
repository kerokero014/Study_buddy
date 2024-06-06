import Header from "../components/MainHeader";
import Footer from "../components/MainFooter";
import AllDecks from "../components/AllDecks";


export default function Courses() {
  return (
    <>
      <Header />

      <h1 className="text-4xl text-white m-4 p-1">Courses</h1>

      <AllDecks />

      <Footer />
    </>
  );
}
