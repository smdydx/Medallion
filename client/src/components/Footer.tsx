import { Link } from 'wouter';
import { Facebook, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Medallion India Pvt Ltd</h3>
            <p className="mb-6">
              Specializing in tunnel structures and advanced engineering solutions for infrastructure development across India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="hover:text-secondary transition-colors duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-secondary transition-colors duration-300">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a className="hover:text-secondary transition-colors duration-300">Services</a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className="hover:text-secondary transition-colors duration-300">Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="hover:text-secondary transition-colors duration-300">Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-secondary transition-colors duration-300">Contact</a>
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-secondary transition-colors duration-300">Tunnel Engineering</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors duration-300">Structural Engineering</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors duration-300">Construction Management</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors duration-300">Civil Engineering Design</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors duration-300">Mechanical Systems</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors duration-300">Consultancy Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <p>
                  B335/5(New B-930), Ground floor, Sangam Gali, New Ashok Nagar, Delhi-110096
                </p>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>+91 9934320255</p>
                  <p>+91 11 3570 1742</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <a href="mailto:afroz.alam@medallionindia.com" className="hover:text-secondary transition-colors duration-300">
                  afroz.alam@medallionindia.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Medallion India Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
