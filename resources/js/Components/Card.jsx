export default function Card({ header, className, children, ...props }) {
    return (
        <>
            <div {...props} id="grid-wrapper" className="flex-col duration-250 flex scale-100 rounded-lg bg-white from-gray-700/50 via-transparent p-6 shadow-2xl shadow-gray-500/20 transition-all focus:outline focus:outline-2 focus:outline-red-500 motion-safe:hover:scale-[1.01] dark:bg-gray-800/50 dark:bg-gradient-to-bl dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/5">

            <div id="logo-section">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-50 dark:bg-red-800/20">
            </div>

            <h2 className="text-lg font-semibold leading-10">{header}</h2>

            </div>
                    {children}
            </div>
        </>
    );
}
