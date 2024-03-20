import { Button } from "@/Components/ui/button";
import Card from "@/Components/Card";
import Layout from "./Layout";
import CardShopItem from "@/Components/CardShopItem";

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
];


const CardsPage = () => {
    return (
        <>
          <h2 id="page-cards" className="mt-6 mb-6 text-xl font-semibold text-gray-900 dark:text-white">
              Cards
          </h2>

          <div id="grid-wrapper" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mb-16">
          <Card header="Base Card">
          This is base card component with only visual props for header and no data props. Width will occupy the full width of container. More props will be added later but this is planned for a simple basic card layout with not a lot of data interaction.
          </Card>
          </div> {/* End of grid div */}

          <CardShopItem header="Shop Item Card" price="$99.00" imagesrc={"/assets/shop/general/sneaker-white.jpg"}>
          The content is manually generated, need to be upgraded with JSON/MDX.
          </CardShopItem>

          <div id="three-item-row-flex" className="flex flex-row gap-6">
          {shopItems.map((item) => (
                  <CardShopItem
                    key={item.id}
                    header={item.header}
                    description={item.description}
                    imagesrc={item.imagesrc}
                    price={item.price}
                  >
                    {/* You can pass additional child components here */}
                  </CardShopItem>
          ))}
          </div>

          <div className="grid p-4 mb-16 grid-cols-2 rounded-lg gap-6" style={{backgroundColor: "#F05340"}}>
              <Card header="Base Card">
              This is base card component with only visual props for header and no data props. Width will occupy the full width of container. More props will be added later but this is planned for a simple basic card layout with not a lot of data interaction.
              </Card>
              <div className="p-6 my-auto text-sm" style={{color: "#FFF"}}>
              This is an example of using the Card component inside of a banner section along with a CTA button. Everything other than the card is custom coded.
                  <div className="mt-6">
                  <Button variant="secondary" className="w-fit">Still a Shadcn button</Button>
                  </div>
              </div>
          </div>

      </>
    );
}

CardsPage.layout = page => (
    <Layout title="Cards">{page}
    </Layout>
)

export default CardsPage;
