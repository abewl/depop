export default function ButtonPrimary({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `items-center p-3 w-fit bg-white border border-gray-300 rounded-md font-semibold text-sm text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
