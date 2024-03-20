import ButtonClear from "./ButtonClear";
import SearchIcon from "./SearchIcon";
import SearchLogo from "./SearchLogo";

export default function SearchHome({ className = '', children, ...props }) {
    return (
      <>
        <div className="focus-within:ring-2 focus-within:ring-red-500 items-center w-1/2 mx-24 rounded-3xl focus:ring-2 focus:ring-red-500 bg-gray-100">

        <SearchLogo />
        <input {...props} className="font-semibold bg-gray-100 text-gray-700 text-md ml-8 w-3/4 h-full border-0 focus:ring-0">
        {children}
        </input>
        <ButtonClear>Clear</ButtonClear>
        <SearchIcon/>

        </div>
    </>
    );
}
