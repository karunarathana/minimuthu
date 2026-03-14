// components/Footer.tsx (Server Component)
import Link from 'next/link';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaYelp, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaClock 
} from 'react-icons/fa';
import BackToTop from './BackTopComponent';
import NewsletterForm from './NewLetterFormComponent';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Menu', href: '/menu' },
    { name: 'Reservations', href: '/reservations' },
    { name: 'Contact', href: '/contact' },
  ];

  const workingHours = [
    { day: 'Monday - Thursday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Friday - Saturday', hours: '11:00 AM - 11:00 PM' },
    { day: 'Sunday', hours: '12:00 PM - 9:00 PM' },
  ];

  const contactInfo = {
    address: '123 Gourmet Street, Foodie District, NY 10001',
    phone: '+1 (555) 123-4567',
    email: 'info@restaurantname.com',
  };

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaYelp, href: 'https://yelp.com', label: 'Yelp' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Savory Bites
              </h2>
              <p className="text-sm text-gray-400 mt-1">Est. 2024</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Experience culinary excellence with our carefully crafted dishes made from the freshest ingredients, served with passion and love.
            </p>
            
            {/* Social Links (these are Links, not interactive buttons) */}
            <div className="flex space-x-3 pt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 inline-block transform hover:translate-x-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Working Hours
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></span>
            </h3>
            <ul className="space-y-4">
              {workingHours.map((schedule, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <FaClock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-300">{schedule.day}</p>
                    <p className="text-sm font-medium text-amber-400">{schedule.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Contact Us
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{contactInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-gray-300 hover:text-amber-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-gray-300 hover:text-amber-400 transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>

            {/* Newsletter - Moved to Client Component */}
            <NewsletterForm />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} Savory Bites. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-gray-400 hover:text-amber-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Client Component */}
      <BackToTop />
    </footer>
  );
};

export default Footer;