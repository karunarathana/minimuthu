// components/CardComponent.tsx
import Image from 'next/image';
import { FaStar, FaHeart, FaShoppingCart, FaClock } from 'react-icons/fa';

interface CardItem {
  cardName: string;
  cardDescription: string;
  price?: string;
  rating?: number;
  image?: string;
  time?: string;
}

export default function CardComponent({ 
  cardName, 
  cardDescription, 
  price = '$24.99',
  rating = 4.5,
  time = '30-40 min',
  image = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
}: CardItem) {
  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden w-72">
      
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={cardName}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          unoptimized
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/* Favorite Button */}
        <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
          <FaHeart className="w-5 h-5" />
        </button>

        {/* Rating Badge */}
        <div className="absolute bottom-3 left-3 flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <FaStar className="w-4 h-4 text-yellow-400 mr-1" />
          <span className="text-sm font-semibold text-gray-800">{rating}</span>
        </div>

        {/* Time Badge */}
        <div className="absolute bottom-3 right-3 flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
          <FaClock className="w-3 h-3 text-amber-500 mr-1" />
          <span className="text-xs font-medium text-gray-800">{time}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title and Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
            {cardName}
          </h3>
          <span className="text-lg font-bold text-amber-600">{price}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {cardDescription}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {/* Dietary Info (example) */}
          <div className="flex space-x-2">
            <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Veg</span>
            <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">Spicy</span>
          </div>

          {/* Order Button */}
          <button className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
            <FaShoppingCart className="w-4 h-4" />
            <span className="text-sm font-medium">Order</span>
          </button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-200 rounded-bl-full opacity-20"></div>
    </div>
  );
}