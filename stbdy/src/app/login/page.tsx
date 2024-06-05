
import LogInForm from "../components/log-in-form";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

export default function LogInPage() {
  return (
    <>
      <MainHeader />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <LogInForm />
      </div>

      <MainFooter />
    </>
  );
}
