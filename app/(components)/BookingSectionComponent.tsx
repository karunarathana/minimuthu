'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaClock, FaUser, FaPhone, FaEnvelope, FaUtensils, FaComment } from 'react-icons/fa'
import { MdOutlinePeople, MdOutlineTableRestaurant } from 'react-icons/md'

interface BookingForm {
    name: string
    email: string
    phone: string
    date: string
    time: string
    guests: number
    occasion: string
    specialRequests: string
}

export default function BookingSection() {

    const [formData, setFormData] = useState<BookingForm>({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        occasion: '',
        specialRequests: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const timeSlots = [
        '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
        '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
    ]

    const occasions = [
        'Select Occasion', 'Birthday', 'Anniversary', 'Business Dinner', 'Date Night', 'Family Gathering', 'Other'
    ]

    const tablePreferences = ['Indoor', 'Outdoor', 'Window']

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0 }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        await new Promise(resolve => setTimeout(resolve, 1500))

        setIsSubmitting(false)
        setIsSubmitted(true)

        setTimeout(() => {
            setIsSubmitted(false)
            setFormData({
                name: '',
                email: '',
                phone: '',
                date: '',
                time: '',
                guests: 2,
                occasion: '',
                specialRequests: ''
            })
        }, 3000)
    }

    const incrementGuests = () => {
        setFormData(prev => ({ ...prev, guests: Math.min(20, prev.guests + 1) }))
    }

    const decrementGuests = () => {
        setFormData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))
    }

    return (
        <section className="py-20 bg-gray-50">

            <div className="container mx-auto px-4">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >

                    <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">
                        Reserve Your Table
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2 mb-4">
                        Book Your Table
                    </h2>

                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Reserve your table and enjoy an exceptional dining experience with us.
                    </p>

                </motion.div>

                <div className="max-w-3xl mx-auto">

                    <motion.div
                        initial={{ opacity: 0, x: -500 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden"
                    >

                        <div className="p-8">

                            <form onSubmit={handleSubmit}>

                                {/* Personal Info */}
                                <motion.div variants={item} className="mb-8">

                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                                        Personal Information
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                <FaUser className="inline mr-2 text-orange-500" /> Full Name *
                                            </label>

                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                <FaEnvelope className="inline mr-2 text-orange-500" /> Email *
                                            </label>

                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-gray-700 font-medium mb-2">
                                                <FaPhone className="inline mr-2 text-orange-500" /> Phone *
                                            </label>

                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                                                placeholder="+1 234 567 8900"
                                            />
                                        </div>

                                    </div>
                                </motion.div>

                                {/* Reservation Details */}
                                <motion.div variants={item} className="mb-8">

                                    <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b">
                                        Reservation Details
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                <FaCalendarAlt className="inline mr-2 text-orange-500" /> Date *
                                            </label>

                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleInputChange}
                                                required
                                                min={new Date().toISOString().split('T')[0]}
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                <FaClock className="inline mr-2 text-orange-500" /> Time *
                                            </label>

                                            <select
                                                name="time"
                                                value={formData.time}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-orange-500"
                                            >

                                                <option value="">Select a time</option>

                                                {timeSlots.map(slot => (
                                                    <option key={slot}>{slot}</option>
                                                ))}

                                            </select>
                                        </div>

                                        {/* Guests */}
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                <MdOutlinePeople className="inline mr-2 text-orange-500" /> Guests
                                            </label>

                                            <div className="flex items-center space-x-4">

                                                <motion.button
                                                    whileHover={{ scale: 1.2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    type="button"
                                                    onClick={decrementGuests}
                                                    className="w-10 h-10 rounded-full bg-gray-200"
                                                >
                                                    -
                                                </motion.button>

                                                <span className="text-xl font-semibold w-12 text-center">
                                                    {formData.guests}
                                                </span>

                                                <motion.button
                                                    whileHover={{ scale: 1.2 }}
                                                    whileTap={{ scale: 0.9 }}
                                                    type="button"
                                                    onClick={incrementGuests}
                                                    className="w-10 h-10 rounded-full bg-gray-200"
                                                >
                                                    +
                                                </motion.button>

                                            </div>
                                        </div>

                                        {/* Occasion */}
                                        <div>
                                            <label className="block text-gray-700 font-medium mb-2">
                                                <FaUtensils className="inline mr-2 text-orange-500" /> Occasion
                                            </label>

                                            <select
                                                name="occasion"
                                                value={formData.occasion}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 border rounded-lg"
                                            >
                                                {occasions.map(o => (
                                                    <option key={o} value={o === 'Select Occasion' ? '' : o}>
                                                        {o}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                    </div>

                                </motion.div>

                                {/* Success */}
                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-center"
                                    >
                                        ✓ Booking confirmed! We,ll send you a confirmation email shortly.
                                    </motion.div>
                                )}

                                {/* Submit */}
                                <motion.button
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3 px-6 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600"
                                >
                                    {isSubmitting ? 'Processing...' : 'Book a Table'}
                                </motion.button>

                            </form>

                        </div>

                        <div className="bg-gray-50 px-8 py-4 border-t text-sm text-gray-600 flex justify-between flex-wrap">
                            <span>📞 +1 (555) 123-4567</span>
                            <span>✉️ reservations@restaurant.com</span>
                            <span>🕒 Mon-Sun: 11:30 AM - 10:00 PM</span>
                        </div>

                    </motion.div>

                </div>

            </div>

        </section>
    )
}