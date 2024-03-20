import React, { useState } from 'react';

const Dropdown = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (

    <div
      className="inline-block bg-white dropdown relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ zIndex: 40 }}
    >
        <button
          className={`w-48 ${isHovered ? 'hover:bg-red-700 hover:text-white' : 'text-gray-700'} font-semibold py-2 px-4 inline-flex items-center`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className={`mr-1 ${label === "Sale" && !isHovered ? "text-red-600" : "inherit"}`}>
            {label}
          </span>
        </button>

      {isOpen && (
        <ul
          className="w-48 dropdown-menu absolute text-gray-700 pt-1"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ zIndex: 41 }}
        >
        <div id="dropdown-list-wrapper" className="bg-white">
          {items.map(item => (
            <li key={item.id}>
              <a className="w-48 hover:bg-red-600 hover:text-white py-2 px-4 block whitespace-no-wrap" href={item.href}>{item.label}</a>
            </li>
          ))}
        </div>
        </ul>
      )}
    </div>
  );
};

const MegaMenu = () => {
  // Define JSON objects for each dropdown
  const dropdownItems = {
    dropdown1: [
      { id: 1, label: "Jackets", href: "#" },
      { id: 2, label: "Shorts", href: "#" },
      { id: 3, label: "Tops", href: "#" },
      { id: 4, label: "Shirts", href: "#" },
    ],
    dropdown2: [
      { id: 5, label: "Pants", href: "#" },
      { id: 6, label: "Shorts", href: "#" },
      { id: 7, label: "Shoes", href: "#" },
      { id: 8, label: "Jewellery", href: "#" },
      { id: 9, label: "Sunglasses", href: "#" }
    ],
    dropdown3: [
      { id: 9, label: "Jackets", href: "#" },
      { id: 10, label: "Pants", href: "#" },
      { id: 11, label: "Sneakers", href: "#" }
    ]
  };

  return (
    <div className="py-3 pl-2 w-full bg-white">
      <Dropdown label="Womenswear" items={dropdownItems.dropdown1} />
      <Dropdown label="Menswear" items={dropdownItems.dropdown2} />
      <Dropdown label="Sale" items={dropdownItems.dropdown3} />
    </div>
  );
};

export default MegaMenu;
