// components/UserReviews.tsx
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

// Sample review data
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    comment: "Absolutely amazing food! The best Italian restaurant in town. Will definitely come back.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    comment: "Outstanding service and delicious pasta. The ambiance is perfect for date night.",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 4,
    comment: "Great food and friendly staff. The desserts are to die for!",
    date: "3 days ago"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 4,
    comment: "Great food and friendly staff. The desserts are to die for!",
    date: "3 days ago"
  },
   {
    id: 5,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    comment: "Outstanding service and delicious pasta. The ambiance is perfect for date night.",
    date: "1 week ago"
  },
   {
    id: 6,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    rating: 5,
    comment: "Outstanding service and delicious pasta. The ambiance is perfect for date night.",
    date: "1 week ago"
  },
];

const UserReviews = () => {
  // Calculate average rating
  const avgRating = (reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Our <span className="text-orange-500">Customers Say</span>
          </h2>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <p className='w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi placeat neque necessitatibus magni hic voluptates similique. Eveniet dolorem molestiae rerum veritatis, in nisi animi voluptatum ea tempore nesciunt ullam!</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              
              {/* Quote Icon */}
              <FaQuoteLeft className="text-orange-200 w-6 h-6 mb-2" />

              {/* Comment */}
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {review.comment}
              </p>

              {/* Rating Stars */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-200'}`} 
                  />
                ))}
              </div>

              {/* User Info */}
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-6">
          <button className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            View All Reviews →
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserReviews;