// components/ReviewCard.tsx (Individual Card Component)
'use client';

import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaRegStar, FaQuoteLeft } from 'react-icons/fa';

interface ReviewCardProps {
  review: {
    id: string;
    name: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
    dishRecommended?: string;
    source?: string;
  };
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="w-4 h-4 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="w-4 h-4 text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="w-4 h-4 text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 h-full flex flex-col">
      <FaQuoteLeft className="text-amber-200 dark:text-amber-900/30 w-8 h-8 mb-4" />
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
        {review.comment}
      </p>

      <div className="flex items-center mt-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={review.avatar}
            alt={review.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white">{review.name}</h4>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-0.5">
              {renderStars(review.rating)}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
          </div>
        </div>
      </div>

      {review.dishRecommended && (
        <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
            Recommended dish: {review.dishRecommended}
          </span>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;