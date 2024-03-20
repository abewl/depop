import ButtonPrimary from "./ButtonPrimary";

export default function LandingCard({ imagesrc1, altimage1, imagesrc2, altimage2, children, ...props }) {
  return (
    <>
      <div {...props} id="grid-wrapper" className="flex flex-row w-screen">

        <div id="cta-left" className="w-1/2 h-fit relative">
          <img
            className="object-cover"
            src={imagesrc1}
            alt={altimage1}
          />

          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="mb-6 text-5xl font-semibold text-white drop-shadow-lg">
              Womenswear
          </h2>

          <ButtonPrimary
          >
              Shop now
          </ButtonPrimary>
          </div>

        </div>

        <div id="cta-left" className="w-1/2 h-fit relative">
          <img
            className="object-cover"
            src={imagesrc2}
            alt={altimage2}
          />

          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
          style={{ zIndex: 20 }}>
          <h2 className="mb-6 text-5xl font-semibold text-white drop-shadow-lg">
              Menswear
          </h2>

          <ButtonPrimary
          >
              Shop now
          </ButtonPrimary>
          </div>

        </div>

        {children}

      </div>
    </>
  );
}
