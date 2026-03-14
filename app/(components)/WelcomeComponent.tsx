// components/ChefComponentSimple.tsx
import Image from 'next/image';
import onion from '../../public/onion.png';
import Food from '../../public/food4.png';
import leaf from '../../public/leaf1.png';
import { FaCheckCircle } from 'react-icons/fa';

export default function WelcomeComponent() {
    return (
        <section className="relative py-16 bg-white">
            <div className="absolute top-[25px] left-[15px] z-0">
                <Image
                    src={onion}
                    alt="Decorative onion"
                    width={200}
                    height={200}
                    className="object-contain"
                />
            </div>
            <div className="absolute bottom-[25px] right-[15px] z-0">
                <Image
                    src={leaf}
                    alt="Decorative leaf"
                    width={300}
                    height={300}
                    className="object-contain"
                />
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-8">

                    {/* Chef Image */}
                    <div className="md:w-1/2">
                        <div>
                            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                                Our Expert Chef
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                               Wecome to Our Restaurant
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-2 gap-3 pt-2">
                            <div>
                                {['15+ Years Experience', 'Michelin Star', 'Italian Expert'].map((text, i) => (
                                    <div key={i} className="flex items-center space-x-2 py-1">
                                        <FaCheckCircle className="text-orange-500 w-4 h-4" />
                                        <span className="text-gray-700 text-sm">{text}</span>
                                    </div>
                                ))}
                            </div>
                            <div>
                                {['Pastry Master', 'Sommelier', '1000+ Dishes'].map((text, i) => (
                                    <div key={i} className="flex items-center space-x-2 py-1">
                                        <FaCheckCircle className="text-orange-500 w-4 h-4" />
                                        <span className="text-gray-700 text-sm">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Button */}
                        <div className='flex gap-2.5'>
                            <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                                Book a Table
                            </button>
                            <button className="mt-4 bg-black hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
                                Book a Table
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="md:w-1/2 space-y-5">
                        <div className="relative">
                            <Image
                                src={Food}
                                alt="Expert Chef"
                                width={500}
                                height={500}
                                className="object-contain"
                            />
                            {/* Decorative Border */}
                            <div className="absolute -z-10 top-5 left-5 w-full h-full border-2 border-orange-200 rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}