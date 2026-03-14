'use client';

import { motion } from "framer-motion";
import CardComponent from "../(components)/CardComponent";
import Footer from "../(components)/FooterComponent";
import Header from "../(components)/Header";
import HeroSection from "../(components)/HeroSection";
import UserReviews from "../(components)/ReviewComponent";
import ChefComponent from "../(components)/ChefComponent";
import WelcomeComponent from "../(components)/WelcomeComponent";

export default function HomePage() {
    return (
        <>
            <main>
                <motion.div className="h-[10vh]"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 2,
                        ease: 'easeOut',
                        type: 'spring',
                        stiffness: 100,
                        damping: 10
                    }}
                >
                    <Header />
                </motion.div>
                <div className="h-[90vh]">
                    <HeroSection />
                </div>
                <div>
                    {/* Section Header */}
                    <motion.div className="text-center mb-12 mt-12"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Are <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">With Difference ?</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Dont just take our word for it - hear from our satisfied customers about their dining experience
                        </p>
                    </motion.div>
                    <motion.div className="mt-2 flex flex-col items-center justify-center gap-2 md:flex-row"
                        initial={{ opacity: 0, x: 500 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            whileHover={{
                                rotate: 10
                            }}
                        >
                            <CardComponent
                                cardName="Margherita Pizza"
                                cardDescription="Fresh tomatoes, mozzarella, basil, and olive oil on a crispy crust"
                                price="$22.99"
                                rating={4.8}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{
                                rotate: 10
                            }}
                        >
                            <CardComponent
                                cardName="Margherita Pizza"
                                cardDescription="Fresh tomatoes, mozzarella, basil, and olive oil on a crispy crust"
                                price="$22.99"
                                rating={4.8}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{
                                rotate: 10
                            }}
                        >
                            <CardComponent
                                cardName="Margherita Pizza"
                                cardDescription="Fresh tomatoes, mozzarella, basil, and olive oil on a crispy crust"
                                price="$22.99"
                                rating={4.8}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{
                                rotate: 10
                            }}
                        >
                            <CardComponent
                                cardName="Margherita Pizza"
                                cardDescription="Fresh tomatoes, mozzarella, basil, and olive oil on a crispy crust"
                                price="$22.99"
                                rating={4.8}
                            />
                        </motion.div>

                    </motion.div>
                </div>
                <div>
                    {/* Section Header */}
                    <motion.div className="text-center mb-12 mt-12"
                        initial={{ opacity: 0, x: 500 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Our Special <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">Dishes</span>
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Dont just take our word for it - hear from our satisfied customers about their dining experience
                        </p>
                    </motion.div>
                    <motion.div className="mt-2 flex flex-col items-center justify-center gap-2 md:flex-row"
                        initial={{ opacity: 0, x: -500 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.div
                            whileHover={{
                                rotate: -10
                            }}
                        >
                            <CardComponent
                                cardName="Margherita Pizza"
                                cardDescription="Fresh tomatoes, mozzarella, basil, and olive oil on a crispy crust"
                                price="$22.99"
                                rating={4.8}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{
                                rotate: -10
                            }}
                        >
                            <CardComponent
                                cardName="Margherita Pizza"
                                cardDescription="Fresh tomatoes, mozzarella, basil, and olive oil on a crispy crust"
                                price="$22.99"
                                rating={4.8}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{
                                rotate: -10
                            }}
                        >
                            <CardComponent
                                cardName="Margherita Pizza"
                                cardDescription="Fresh tomatoes, mozzarella, basil, and olive oil on a crispy crust"
                                price="$22.99"
                                rating={4.8}
                            />
                        </motion.div>
                        <motion.div
                            whileHover={{
                                rotate: -10
                            }}
                        >
                            <CardComponent
                                cardName="Margherita Pizza"
                                cardDescription="Fresh tomatoes, mozzarella, basil, and olive oil on a crispy crust"
                                price="$22.99"
                                rating={4.8}
                            />
                        </motion.div>

                    </motion.div>
                </div>
                <div className="mt-4">
                    <WelcomeComponent />
                </div>
                <div className="mt-4">
                    <ChefComponent />
                </div>
                <motion.div className="mt-4"
                    animate={{
                        x: [0, 50, 0, -50, 0],
                        y: [0, -50, -100, -50, 0]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <UserReviews />
                </motion.div>
                <div className="mt-4">
                    <Footer />
                </div>
            </main>
        </>
    )
}
