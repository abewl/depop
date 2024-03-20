import { Head } from "@inertiajs/react";
import Sidebar from "@/Components/Sidebar";
import ButtonsPage from "./ButtonsPage";
import CardsPage from "./CardsPage";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Components({ auth, laravelVersion, phpVersion }) {
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

          <ButtonsPage />
          <CardsPage />

            <h2 id="page-laravel" className="mt-6 mb-6 text-xl font-semibold text-gray-900 dark:text-white">
              Example Laravel Components
            </h2>

              <div id="grid-wrapper" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mb-16">
                <a
                  href="https://laravel.com/docs"
                  className="duration-250 flex scale-100 rounded-lg bg-white from-gray-700/50 via-transparent p-6 shadow-2xl shadow-gray-500/20 transition-all focus:outline focus:outline-2 focus:outline-red-500 motion-safe:hover:scale-[1.01] dark:bg-gray-800/50 dark:bg-gradient-to-bl dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/5"
                >
                  <div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50 dark:bg-red-800/20">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        className="h-7 w-7 stroke-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                        />
                      </svg>
                    </div>

                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                      Base Laravel Card
                    </h2>

                    <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                      Laravel has wonderful documentation covering every aspect of
                      the framework. Whether you are a newcomer or have prior
                      experience with Laravel, we recommend reading our
                      documentation from beginning to end.
                    </p>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="mx-6 h-6 w-6 shrink-0 self-center stroke-red-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </a>

              </div> {/* End of grid div */}

          </div>

          </div>

          <Footer />

        </div>

      </div>
    </>
  );
}
