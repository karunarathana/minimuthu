// components/UserReviews.tsx
import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaQuoteLeft, FaRegStar } from 'react-icons/fa';
import ReviewCard from './ReviewCardComponents';
import ReviewCarousel from './ReviewCarouselComponent';

// Types
interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  dishRecommended?: string;
  source?: 'google' | 'yelp' | 'tripadvisor' | 'website';
}

// Sample review data
const reviews: Review[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108777-466d912a41bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    date: '2 days ago',
    comment: 'Absolutely incredible dining experience! The truffle pasta was divine and the service was impeccable. The ambiance is perfect for a romantic dinner or special celebration.',
    dishRecommended: 'Truffle Pasta',
    source: 'google'
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    date: '1 week ago',
    comment: 'Best steak I\'ve had in years! Cooked perfectly to medium-rare and the seasoning was spot on. The wine selection is impressive too. Will definitely be coming back!',
    dishRecommended: 'Ribeye Steak',
    source: 'yelp'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 4.5,
    date: '3 days ago',
    comment: 'Lovely atmosphere and friendly staff. The seafood platter was fresh and beautifully presented. Only giving 4.5 because the dessert took a bit long, but it was worth the wait!',
    dishRecommended: 'Seafood Platter',
    source: 'tripadvisor'
  },
  {
    id: '4',
    name: 'David Thompson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    date: '5 days ago',
    comment: 'Hidden gem in the city! The lunch specials are a great value and the quality is outstanding. Their homemade pasta is to die for.',
    dishRecommended: 'Homemade Lasagna',
    source: 'google'
  },
  {
    id: '5',
    name: 'Lisa Park',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
    rating: 5,
    date: '1 week ago',
    comment: 'Celebrated our anniversary here and they made it so special! Complimentary champagne and a beautiful dessert plate with "Happy Anniversary" written in chocolate. The food was exceptional!',
    dishRecommended: 'Wagyu Beef',
    source: 'website'
  }
];

// Star Rating Component
const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <FaStar key={i} className="w-4 h-4 text-yellow-400" />;
        } else if (i === fullStars && hasHalfStar) {
          return <FaStarHalfAlt key={i} className="w-4 h-4 text-yellow-400" />;
        } else {
          return <FaRegStar key={i} className="w-4 h-4 text-yellow-400" />;
        }
      })}
      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{rating.toFixed(1)}</span>
    </div>
  );
};

// Source Badge Component
const SourceBadge = ({ source }: { source: Review['source'] }) => {
  const badges = {
    google: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
    yelp: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
    tripadvisor: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400',
    website: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full ${badges[source || 'website']}`}>
      {source ? source.charAt(0).toUpperCase() + source?.slice(1) : 'Website'}
    </span>
  );
};

// Main Reviews Component
const UserReviews = () => {
  // Calculate average rating
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What Our <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Guests Say</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dont just take our word for it - hear from our satisfied customers about their dining experience
          </p>
        </div>

        {/* Overall Rating Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center md:justify-start mb-2">
                <StarRating rating={averageRating} />
              </div>
              <p className="text-gray-600 dark:text-gray-300">Based on {totalReviews} reviews</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['google', 'yelp', 'tripadvisor'].map((source) => (
                <div key={source} className="flex items-center space-x-2">
                  <SourceBadge source={source as Review['source']} />
                  <span className="text-sm text-gray-600 dark:text-gray-300">4.8 ★</span>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
              Write a Review
            </button>
          </div>
        </div>

        {/* Grid View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 relative"
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="absolute top-4 right-4 text-amber-200 dark:text-amber-900/30 w-8 h-8" />

              {/* Reviewer Info */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  {/* <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <StarRating rating={review.rating} />
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                {review.comment}
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <span className="text-sm text-gray-500 dark:text-gray-400">{review.date}</span>
                <div className="flex items-center space-x-2">
                  {review.dishRecommended && (
                    <span className="text-xs bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-1 rounded-full">
                      {review.dishRecommended}
                    </span>
                  )}
                  <SourceBadge source={review.source} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel View Alternative */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-8">
            Featured Reviews
          </h3>
          {/* <ReviewCarousel reviews={reviews} /> */}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white rounded-lg font-medium transition-all duration-300">
            Load More Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;