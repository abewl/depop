import { Link, Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head title="Components"/>
      <div id="main-wrapper" className="relative min-h-screen bg-gray-100 bg-center selection:bg-red-500 selection:text-white sm:flex sm:justify-center dark:bg-gray-900">

        <div id="margin-wrapper" className="2xl:max-w-7xl w-full">

          <Header />

          <div className="min-h-screen grid grid-cols-5">

              <div className="col-span-1 bg-white p-6">
                  <Sidebar>
                  </Sidebar>
              </div>

              <div id="content-wrapper" className="col-span-4 bg-zinc-50 p-6 max-h-screen overflow-y-auto">
                  {children}
              </div>

          </div>

          <Footer />

        </div>

      </div>
    </>
  );
};

export default Layout;
