import ButtonPrimary from "./ButtonPrimary";

export default function CardShopItem({ header, imagesrc, description, price, children, ...props }) {
    return (
        <>
        <div {...props} id="grid-wrapper" className="flex flex-col w-1/4 min-w-40 max-w-64 h-card480 p-4 scale-100 rounded-lg bg-white from-gray-700/50 via-transparent shadow-2xl shadow-gray-500/20 transition-all focus:outline focus:outline-2 focus:outline-red-500 motion-safe:hover:scale-[1.01] dark:bg-gray-800/50 dark:bg-gradient-to-bl dark:shadow-none ">

            <div>
                <div id="item-image" className="flex min-h-40 items-center justify-center bg-red-50 dark:bg-red-800/20">
                <img className="object-cover" src={imagesrc} alt="Sneaker" />
                </div>

                <div className="flex flex-col m-auto">
                    <h2 className="mt-4 text-xl font-semibold">
                    {header}
                    </h2>

                    <div className="text-xl">
                    {price}
                    </div>

                    <div className="mt-3">
                    {description}
                    </div>

                    <div className="mt-3">
                    {children}
                    </div>

                    <ButtonPrimary>
                    Add to Cart
                    </ButtonPrimary>
                </div>

            </div>

        </div>
        </>
    );
}
