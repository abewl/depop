export default function ButtonClear({children, ...props }) {
    return (
        <button
            {...props}
            className="absolute left-[870px] top-[35px] items-center p-1.5 w-fit bg-gray-300 rounded-xl font-semibold text-xs text-gray-700 hover:bg-gray-300 focus:outline-none transition ease-in-out duration-150"
        >
            {children}
        </button>
    );
}
