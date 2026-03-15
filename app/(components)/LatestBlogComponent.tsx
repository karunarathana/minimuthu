'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa'

const blogPosts = [
  {
    id: 1,
    title: "New Summer Menu Launch",
    excerpt: "Discover our refreshing new summer dishes with seasonal ingredients",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    date: "June 15, 2024",
    author: "Chef Michael",
    category: "Menu"
  },
  {
    id: 2,
    title: "Wine Tasting Event",
    excerpt: "Join us for an exclusive evening of fine wines and gourmet pairings",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3",
    date: "June 10, 2024",
    author: "Sommelier",
    category: "Events"
  },
  {
    id: 3,
    title: "Chef's Special Recipe",
    excerpt: "Learn how to make our signature pasta at home",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601",
    date: "June 5, 2024",
    author: "Chef Maria",
    category: "Recipes"
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25
    }
  }
}

const card = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0 }
}

const LatestBlog = () => {
  return (
    <section className="py-16 bg-gray-50">

      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Latest <span className="text-orange-500">News & Blogs</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest events, new menu items, and culinary adventures
          </p>
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >

          {blogPosts.map((post) => (

            <motion.article
              key={post.id}
              variants={card}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg"
            >

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  unoptimized
                />

                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">

                <div className="flex items-center text-xs text-gray-500 mb-3 space-x-3">

                  <div className="flex items-center">
                    <FaCalendarAlt className="w-3 h-3 mr-1" />
                    <span>{post.date}</span>
                  </div>

                  <div className="flex items-center">
                    <FaUser className="w-3 h-3 mr-1" />
                    <span>{post.author}</span>
                  </div>

                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-orange-500 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-orange-500 text-sm font-medium hover:text-orange-600"
                >
                  Read More
                  <FaArrowRight className="ml-1 w-3 h-3" />
                </Link>

              </div>

            </motion.article>

          ))}

        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/blog"
            className="inline-flex items-center border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-medium"
          >
            View All Posts
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>

      </div>

    </section>
  )
}

export default LatestBlog;