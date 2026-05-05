import { Link } from 'react-router-dom';
import { Monitor, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group inline-flex mb-2">
              <div className="relative flex items-center justify-center w-10 h-10 bg-brand-600 rounded-lg group-hover:bg-brand-500 transition-colors shadow-lg shadow-brand-500/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-white leading-none">
                  ASUSE
                </span>
                <span className="text-[0.65rem] font-bold tracking-widest text-brand-500 uppercase mt-0.5">
                  LTD
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 pr-4">
              Powering your technology needs with premium IT wholesale distribution, bulk supply solutions, and enterprise software.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-brand-400 transition-colors">Careers</Link></li>
              <li><Link to="/services" className="hover:text-brand-400 transition-colors">Services</Link></li>
              <li><Link to="/industries" className="hover:text-brand-400 transition-colors">Industries Served</Link></li>
              <li><Link to="/contact" className="hover:text-brand-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6">Products</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Computers & Laptops</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Computer Peripherals</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Software Solutions</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Enterprise Servers</Link></li>
              <li><Link to="/products" className="hover:text-brand-400 transition-colors">Networking Gear</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 shrink-0 mt-0.5" />
                <span>23 Kingsway, Hayes,<br/>UB3 2TT, England</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500 shrink-0" />
                <a href="tel:+447345952722" className="hover:text-brand-400 transition-colors">+44 7345 952722</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500 shrink-0" />
                <a href="mailto:Thiyaguuk1947@gmail.com" className="hover:text-brand-400 transition-colors">Thiyaguuk1947@gmail.com</a>
              </li>
              <li className="pt-4 border-t border-slate-800">
                <p className="text-slate-400 font-medium mb-1">Business Hours:</p>
                <div className="flex justify-between text-slate-300">
                  <span>Mon - Fri:</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between text-slate-300 mt-1">
                  <span>Sat - Sun:</span>
                  <span>10:00 - 16:00</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} ASUSE LTD. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/faq" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
