'use client'

import { FaStar, FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    comment: "Absolutely amazing food! The best Italian restaurant in town. Will definitely come back.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
    rating: 5,
    comment: "Outstanding service and delicious pasta. The ambiance is perfect for date night.",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80",
    rating: 4,
    comment: "Great food and friendly staff. The desserts are to die for!",
    date: "3 days ago"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const UserReviews = () => {

  const avgRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <section className="py-12 bg-gray-50">

      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            What Our <span className="text-orange-500">Customers Say</span>
          </h2>

          <p className="max-w-xl mx-auto mt-3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sequi placeat neque necessitatibus magni hic.
          </p>

        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >

          {reviews.map((review) => (

            <motion.div
              key={review.id}
              variants={card}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md"
            >

              {/* Quote Icon */}
              <FaQuoteLeft className="text-orange-200 w-6 h-6 mb-2" />

              {/* Comment */}
              <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                {review.comment}
              </p>

              {/* Rating */}
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${i < review.rating
                        ? "text-yellow-400"
                        : "text-gray-200"
                      }`}
                  />
                ))}
              </div>

              {/* User */}
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
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {review.name}
                  </h4>

                  <p className="text-xs text-gray-500">
                    {review.date}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-orange-500 font-medium hover:text-orange-600 transition-colors"
          >
            View All Reviews →
          </motion.button>

        </motion.div>

      </div>
    </section>
  );
};

export default UserReviews;