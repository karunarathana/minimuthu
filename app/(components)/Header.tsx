// components/HeaderSimple.tsx
'use client';

import Link from 'next/link';
import { FaUtensils } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <FaUtensils className="text-amber-500 text-2xl" />
            <span className="text-xl font-bold">
              <span className="text-gray-800">Hotel</span>
              <span className="text-amber-500">MiniMuthu</span>
            </span>
          </Link>

          {/* Welcome Message */}
          <div className="flex items-center space-x-2">
            <p className="text-[1.3rem] font-bold text-gray-700">Menu</p>
            <p className="text-[1.3rem] font-bold text-gray-700">Event</p>
            <p className="text-[1.3rem] font-bold text-gray-700">Galary</p>
            <p className="text-[1.3rem] font-bold text-gray-700">Contact</p>
          </div>

          {/* Empty div for spacing */}
          <div className="w-20">
            <button className="bg-orange-300 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-300 py-2 w-[7rem]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;