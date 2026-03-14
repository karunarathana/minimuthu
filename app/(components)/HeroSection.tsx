// components/HeroSection.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import foodImage from '../../public/Food3.png';
import orangePiece from '../../public/Orage1.png';
import card from '../../public/Card.png';
import { motion } from 'framer-motion';
import { Skeleton } from 'antd';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative h-full bg-gradient-to-b from-orange-50 to-white overflow-hidden'>
      {/* Orange Decorative Element - Top Right */}
      <div className="absolute top-[-15px] right-[25rem] z-0">
        <Image
          src={orangePiece}
          alt="Decorative orange piece"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Orange Decorative Element - Bottom Right */}
      <div className="absolute bottom-[35px] right-[8rem] z-0">
        <Image
          src={orangePiece}
          alt="Decorative orange piece"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Card Element - Front (z-30) */}
      <div className="absolute bottom-[45px] right-[32rem] z-30">
        <Image
          src={card}
          alt="Decorative card"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Card Element - Front (z-30) */}
      <div className="absolute bottom-[-25px] right-[20rem] z-30">
        <Image
          src={card}
          alt="Decorative card"
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Orange Decorative Element - Bottom Left */}
      <div className="absolute bottom-[-15px] left-[16rem] z-0">
        <Image
          src={orangePiece}
          alt="Decorative orange piece"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      {/* Main Content - Middle (z-10) */}
      <div className='relative z-10 container mx-auto px-4 h-full flex items-center'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-10 w-full'>
          
          {/* Left Content */}
          <motion.div 
            className="pl-10 lg:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {loading ? (
              // Skeleton for left content
              <div className="space-y-4">
                <Skeleton.Input active size="large" block={false} style={{ width: 300 }} />
                <Skeleton.Input active size="large" block={false} style={{ width: 300 }} />
                <Skeleton.Input active size="large" block={false} style={{ width: 300 }} />
                <Skeleton.Input active size="large" block={false} style={{ width: 400 }} />
                <Skeleton.Input active size="large" block={false} style={{ width: 250 }} />
                <Skeleton.Button active size="large" shape="round" block={false} />
              </div>
            ) : (
              <>
                {/* Small Top Text */}
                <p className="text-orange-500 text-center w-[60%] rounded-2xl font-semibold text-[1rem] tracking-wider bg-gray-50 p-2">
                  WELCOME TO OUR RESTAURANT
                </p>
                
                {/* Main Heading */}
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Your <span className='bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent'>Go-To</span> Spot
                  <br />
                  For Great <span className='bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent'>Food</span> And
                  <br />
                  Good <span className='bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent'>Times</span>
                </h1>
                
                {/* Description */}
                <p className="text-xl text-gray-600 max-w-2xl">
                  Join Us for Delicious Meals and Memorable Moments!
                </p>
                
                {/* Order Now Button */}
                <div className="pt-4">
                  <Link
                    href="/order"
                    className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xl px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Order Now
                  </Link>
                </div>
              </>
            )}
          </motion.div>

          {/* Right Content - Food Image (z-20) */}
          <div className="lg:w-1/2 relative z-20">
            {loading ? (
              // Skeleton for image
              <div className="flex flex-col items-center space-y-4">
                <Skeleton.Image active style={{ width: 400, height: 400 }} />
                <Skeleton.Input active size="large" style={{ width: 200 }} />
              </div>
            ) : (
              <div className="relative">
                <Image
                  src={foodImage}
                  alt="Delicious food"
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-2xl"
                  priority
                />
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-orange-200 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl opacity-50"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;