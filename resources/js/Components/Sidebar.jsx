import { Link } from "@inertiajs/react";

const Sidebar = () => {
  return (
    <div>
      <Link href="/components">
      <h2 className="mb-6 text-xl font-semibold text-gray-900 dark:text-white">
          Components
      </h2>
      </Link>

      <ul>
          <li><Link href="/components/buttons"
            className="font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white">
            Buttons
          </Link>
          </li>

          <li><Link href="/components/cards"
            className="font-semibold text-gray-600 hover:text-gray-900 focus:rounded-sm focus:outline focus:outline-2 focus:outline-red-500 dark:text-gray-400 dark:hover:text-white">
            Cards
          </Link>
          </li>
      </ul>

    </div>
  );
};

export default Sidebar;
