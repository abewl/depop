import ButtonPrimary from "./ButtonPrimary";
// import PackageDependencies from "./print-packagejson";
// import { FacebookLogo, InstagramLogo, TiktokLogo, TwitterLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <div className="absolute bg-zinc-950 w-full py-9">

    <div className="grid grid-cols-4 mx-40 items-start">
    <div className="flex flex-col col-span-1 text-white justify-center mx-auto gap-3">

    <span
        className="bg-clip-text text-left font-inter text-2xl font-extrabold tracking-[-0.02em] [text-wrap:balance]">
        PEARR
      </span>

      {/* <div className="flex flex-row gap-3">
      <FacebookLogo size={30} />
      <InstagramLogo size={30} />
      <TiktokLogo size={30} />
      <TwitterLogo size={30} />
      </div> */}

      {/* <span
        className="bg-clip-text text-left text-white font-light text-sm mt-12 [text-wrap:balance]">
        Have some questions?
      </span> */}

      {/* <ButtonPrimary>
      Send Message
      </ButtonPrimary> */}

    </div>

    <div className="flex flex-row col-span-3">
      <div className="hidden md:flex flex-row mx-auto max-w-fit text-white text-sm justify-center">
        <div className="flex flex-col gap-1.5 font-light">
        <span>Restaurant & Bar</span>
        <span>Fast food ticketing</span>
        <span>Event Booking</span>
        <span>Functions</span>
        <span>Music Events</span>
        </div>
      </div>

      <div className="hidden md:flex flex-row mx-auto max-w-fit text-white text-sm justify-center">
        <div className="flex flex-col gap-1.5 font-light">
        <span>How it works</span>
        <span>QR Codes</span>
        <span>Pricing</span>
        <span>Features</span>
        </div>
      </div>

      <div className="hidden md:flex flex-row mx-auto max-w-fit text-white text-sm justify-center">
        <div className="flex flex-col gap-1.5 font-light">
        <span>About Us</span>
        <span>Our Team</span>
        <span>Hoops Philosophy</span>
        </div>
      </div>

      <div className="hidden md:flex flex-row mx-auto max-w-fit text-white text-sm justify-center">
        <div className="flex flex-col gap-1.5 font-light">
        <span>Register</span>
        <span>Sign in</span>
        </div>
      </div>

    </div>
    </div>

    <div
      className="mx-auto my-6 flex max-w-fit text-white text-sm font-light items-center justify-center gap-9 text-center">
      <span>Copyright PEARR 2024</span>
      <span>Terms</span>
      <span>Privacy</span>
    </div>

    {/* <div
      className="hidden md:flex mx-auto mt-2 max-w-fit text-zinc-500 items-center justify-center space-x-2  px-6 py-2 text-center">
      <PackageDependencies />
    </div> */}

    </div>
  );
}
