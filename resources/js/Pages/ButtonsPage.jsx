import { Button } from "@/Components/ui/button";
import ButtonPrimary from "@/Components/ButtonPrimary";
import ButtonSecondary from "@/Components/ButtonSecondary";
import Layout from "./Layout";

const ButtonsPage = () => {
    return (
        <>
          <h2 id="page-buttons" className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
          Buttons
          </h2>

          <div id="grid-wrapper" className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mb-16">
          <Button variant="destructive" className="w-fit">Shadcn button</Button>
          <div></div>

            <ButtonPrimary>
            Primary button
            </ButtonPrimary>

            <ButtonSecondary>
            Secondary button
            </ButtonSecondary>

          </div>

      </>
    );
}

ButtonsPage.layout = page => (
    <Layout title="Buttons">{page}
    </Layout>
)

export default ButtonsPage;
