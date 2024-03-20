import { Head } from "@inertiajs/react";
// import Sidebar from "@/Components/Sidebar";
// import ButtonsPage from "./ButtonsPage";
// import CardsPage from "./CardsPage";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import LandingCard from "@/Components/LandingCard";
import CardShopItem from "@/Components/CardShopItem";
import ButtonSecondary from "@/Components/ButtonSecondary";

export default function Components({ auth, laravelVersion, phpVersion }) {

  // JSON to render list of cards
  const shopItems = [
    {
      id: 1,
      header: "Item 1",
      description: "Description of Item 1",
      imagesrc: "/assets/shop/general/sneaker-white.jpg",
      price: "$10",
    },
    {
      id: 2,
      header: "Item 2",
      description: "Description of Item 2",
      imagesrc: "/assets/shop/general/sneaker-white.jpg",
      price: "$15",
    },
    {
      id: 3,
      header: "Item 3",
      description: "Description of Item 1",
      imagesrc: "/assets/shop/general/sneaker-white.jpg",
      price: "$10",
    },
    {
      id: 4,
      header: "Item 4",
      description: "Description of Item 1",
      imagesrc: "/assets/shop/general/sneaker-white.jpg",
      price: "$10",
    },
    {
      id: 5,
      header: "Item 5",
      description: "Description of Item 1",
      imagesrc: "/assets/shop/general/sneaker-white.jpg",
      price: "$10",
    },
  ];

  return (
    <>
      <Head title="Components"/>
      <div id="main-wrapper" className="relative min-h-screen bg-gray-100 bg-center selection:bg-red-500 selection:text-white sm:flex sm:justify-center dark:bg-gray-900">

        <div id="margin-wrapper" className="2xl:max-w-7xl w-full">

          <div className="z-10">
          <Header />
          </div>

          <div className="grid grid-cols-5 mx-auto">
          <LandingCard imagesrc1="/assets/women-cta.jpg" imagesrc2="/assets/men-cta.jpg" />
          </div>

          <div className="flex flex-col my-12 gap-6 mx-auto items-center w-4/5">
              <h2 className="text-4xl font-extrabold text-black">Buy. Sell. Make fashion Circular.
              </h2>
              <ButtonSecondary>
              Sell now
              </ButtonSecondary>
          </div>

          <div className="flex flex-wrap mx-auto w-4/5 my-12">
            {shopItems.reduce((rows, item, index) => {
              if (index % 4 === 0) rows.push([]);
              rows[rows.length - 1].push(
                <CardShopItem
                  key={item.id}
                  header={item.header}
                  description={item.description}
                  imagesrc={item.imagesrc}
                  price={item.price}
                >
                  {/* You can pass additional child components here */}
                </CardShopItem>
              );
              return rows;
            }, []).map((row, index) => (
              <div key={index} className="flex flex-row gap-6 w-full mx-9 my-3">
                {row}
              </div>
            ))}
          </div>

          <Footer />

        </div>

      </div>
    </>
  );
}
