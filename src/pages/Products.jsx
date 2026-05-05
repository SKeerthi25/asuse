import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import HardwareGuide from '../components/HardwareGuide';

import img1 from '../assets/image.png';
import img2 from '../assets/image copy.png';
import img3 from '../assets/image copy 2.png';
import img4 from '../assets/image copy 3.png';
import img5 from '../assets/image copy 4.png';
import img6 from '../assets/image copy 5.png';
import img7 from '../assets/image copy 6.png';
import img8 from '../assets/image copy 7.png';
import img9 from '../assets/image copy 8.png';
import img10 from '../assets/image copy 9.png';
import img11 from '../assets/image copy 10.png';
import img12 from '../assets/image copy 11.png';
import img13 from '../assets/image copy 12.png';
import img14 from '../assets/image copy 13.png';
import img15 from '../assets/image copy 14.png';

const categories = ['All', 'IT Hardware', 'Input Devices', 'Display & Output', 'Networking', 'Storage', 'Accessories', 'Office Tech', 'Software', 'Bundled Solutions', 'Consumables'];

const products = [
  // --- IT Hardware ---
  { id: 1, name: 'Dell Precision Tower 3660', category: 'IT Hardware', subCategory: 'Workstations', image: img5, price: 1899, originalPrice: 2499, save: 600, badge: 'Enterprise', badgeColor: 'bg-slate-800', specs: ['Intel i9-12900', '64GB RAM', '2TB SSD'] },
  { id: 2, name: 'HP EliteDesk 800 G6 Mini', category: 'IT Hardware', subCategory: 'Mini PCs', image: img9, price: 749, originalPrice: 949, save: 200, badge: 'Industrial', badgeColor: 'bg-slate-700', specs: ['Intel i5', '16GB RAM', '256GB SSD'] },
  { id: 3, name: 'Lenovo ThinkPad P15', category: 'IT Hardware', subCategory: 'Laptops', image: img5, price: 2199, originalPrice: 2599, save: 400, badge: 'Premium', badgeColor: 'bg-purple-500', specs: ['Intel Xeon', '32GB RAM', '1TB SSD'] },
  { id: 4, name: 'Dell PowerEdge R750', category: 'IT Hardware', subCategory: 'Servers', image: img10, price: 4500, originalPrice: 5500, save: 1000, badge: 'Rack Server', badgeColor: 'bg-slate-800', specs: ['Dual Xeon Gold', '128GB RAM', '4x 2TB NVMe'] },
  { id: 5, name: 'Apple MacBook Pro 16"', category: 'IT Hardware', subCategory: 'Laptops', image: img5, price: 2499, originalPrice: 2899, save: 400, badge: 'Creative', badgeColor: 'bg-red-500', specs: ['M3 Max Chip', '36GB Unified', '1TB SSD'] },

  // --- Input Devices ---
  { id: 6, name: 'Logitech G915 Wireless', category: 'Input Devices', subCategory: 'Keyboards', image: img15, price: 229, originalPrice: 249, save: 20, badge: 'Mechanical', badgeColor: 'bg-blue-600', specs: ['Low Profile Switches', 'Lightspeed', 'RGB'] },
  { id: 7, name: 'Razer DeathAdder V3 Pro', category: 'Input Devices', subCategory: 'Mice', image: img15, price: 149, originalPrice: 179, save: 30, badge: 'Gaming', badgeColor: 'bg-emerald-500', specs: ['30K DPI', 'Ultra-light', 'Optical Switches'] },
  { id: 8, name: 'Logitech MK270 Combo', category: 'Input Devices', subCategory: 'Combo sets', image: img15, price: 49, originalPrice: 59, save: 10, badge: 'Wireless', badgeColor: 'bg-slate-500', specs: ['Keyboard + Mouse', 'Long Battery', 'USB Receiver'] },
  { id: 9, name: 'Wacom Intuos Pro', category: 'Input Devices', subCategory: 'Graphic tablets', image: img15, price: 349, originalPrice: 399, save: 50, badge: 'Design', badgeColor: 'bg-purple-600', specs: ['8K Pressure', 'Pro Pen 2', 'Bluetooth'] },
  { id: 10, name: 'Keychron Q1 Mechanical', category: 'Input Devices', subCategory: 'Keyboards', image: img15, price: 179, originalPrice: 199, save: 20, badge: 'Custom', badgeColor: 'bg-slate-800', specs: ['Full Aluminum', 'Hot-swappable', 'QMK/VIA'] },

  // --- Display & Output ---
  { id: 11, name: 'Dell UltraSharp 27 4K', category: 'Display & Output', subCategory: 'Monitors', image: img5, price: 649, originalPrice: 799, save: 150, badge: '4K Display', badgeColor: 'bg-blue-500', specs: ['IPS Black', 'USB-C Hub', '98% DCI-P3'] },
  { id: 12, name: 'Epson EB-L210W', category: 'Display & Output', subCategory: 'Projectors', image: img12, price: 849, originalPrice: 999, save: 150, badge: 'Office Tech', badgeColor: 'bg-slate-700', specs: ['Laser 4500 Lumens', 'WXGA', 'Wi-Fi'] },
  { id: 13, name: 'HP LaserJet Pro M454dn', category: 'Display & Output', subCategory: 'Printers', image: img12, price: 429, originalPrice: 499, save: 70, badge: 'Color Laser', badgeColor: 'bg-emerald-600', specs: ['28 ppm', 'Auto Duplex', 'Gigabit'] },
  { id: 14, name: 'Brother MFC-L2750DW', category: 'Display & Output', subCategory: 'Printers', image: img12, price: 249, originalPrice: 299, save: 50, badge: 'All-in-one', badgeColor: 'bg-blue-600', specs: ['Laser Print/Scan', '36 ppm', 'NFC'] },
  { id: 15, name: 'Fujitsu ScanSnap iX1600', category: 'Display & Output', subCategory: 'Scanners', image: img12, price: 449, originalPrice: 529, save: 80, badge: 'High-speed', badgeColor: 'bg-emerald-500', specs: ['40 ppm', 'Cloud Scan', 'Touchscreen'] },

  // --- Networking ---
  { id: 16, name: 'TP-Link Archer AX6000', category: 'Networking', subCategory: 'Routers', image: img7, price: 299, originalPrice: 349, save: 50, badge: 'Wi-Fi 6', badgeColor: 'bg-emerald-600', specs: ['Dual Band', '8 LAN Ports', '2.5G WAN'] },
  { id: 17, name: 'Netgear Nighthawk Modem', category: 'Networking', subCategory: 'Modems', image: img7, price: 189, originalPrice: 219, save: 30, badge: 'High-speed', badgeColor: 'bg-blue-500', specs: ['DOCSIS 3.1', 'Multi-Gig', 'Cable cert.'] },
  { id: 18, name: 'Cisco Catalyst 9300', category: 'Networking', subCategory: 'Network switches', image: img7, price: 3200, originalPrice: 3800, save: 600, badge: 'Managed', badgeColor: 'bg-slate-800', specs: ['48-Port PoE+', 'Stackable', 'L3'] },
  { id: 19, name: 'Ubiquiti UniFi U6-LR', category: 'Networking', subCategory: 'Access points', image: img7, price: 179, originalPrice: 199, save: 20, badge: 'Enterprise', badgeColor: 'bg-blue-600', specs: ['Wi-Fi 6', '3.0 Gbps', 'PoE+'] },
  { id: 20, name: 'Cat6 Ethernet Cable 305m', category: 'Networking', subCategory: 'Cables', image: img7, price: 129, originalPrice: 159, save: 30, badge: 'Bulk', badgeColor: 'bg-slate-500', specs: ['Solid Copper', 'LSZH Jacket', '1000Mbps'] },

  // --- Storage ---
  { id: 21, name: 'WD My Passport 5TB', category: 'Storage', subCategory: 'External hard drives', image: img3, price: 119, originalPrice: 149, save: 30, badge: 'Portable', badgeColor: 'bg-blue-500', specs: ['USB 3.2', 'Encryption', 'Backup soft.'] },
  { id: 22, name: 'Samsung 990 PRO 2TB', category: 'Storage', subCategory: 'SSDs', image: img4, price: 189, originalPrice: 249, save: 60, badge: 'NVMe', badgeColor: 'bg-slate-800', specs: ['PCIe 4.0', '7450 MB/s', 'Heatsink'] },
  { id: 23, name: 'SanDisk Ultra Luxe 128GB', category: 'Storage', subCategory: 'USB flash drives', image: img3, price: 25, originalPrice: 35, save: 10, badge: 'USB 3.1', badgeColor: 'bg-blue-400', specs: ['All-metal', '150MB/s', 'Compact'] },
  { id: 24, name: 'Synology DS923+ NAS', category: 'Storage', subCategory: 'NAS systems', image: img10, price: 599, originalPrice: 699, save: 100, badge: '4-Bay', badgeColor: 'bg-slate-800', specs: ['Ryzen CPU', 'ECC RAM', 'NVMe slots'] },

  // --- Accessories ---
  { id: 25, name: 'Dell WD19S 180W Dock', category: 'Accessories', subCategory: 'Docking stations', image: img1, price: 229, originalPrice: 279, save: 50, badge: 'USB-C', badgeColor: 'bg-emerald-600', specs: ['Dual 4K Support', '130W Power', 'Gigabit'] },
  { id: 26, name: 'Logitech Brio 4K', category: 'Accessories', subCategory: 'Webcams', image: img14, price: 199, originalPrice: 249, save: 50, badge: '4K Ultra HD', badgeColor: 'bg-blue-500', specs: ['HDR Support', 'Windows Hello', 'RightLight'] },
  { id: 27, name: 'Jabra Evolve2 65', category: 'Accessories', subCategory: 'Headsets', image: img14, price: 249, originalPrice: 299, save: 50, badge: 'Audio', badgeColor: 'bg-purple-500', specs: ['Active Noise Cancel', '37hr Battery', 'UC'] },
  { id: 28, name: 'APC Back-UPS Pro 1500', category: 'Accessories', subCategory: 'UPS', image: img2, price: 219, originalPrice: 269, save: 50, badge: 'Power Backup', badgeColor: 'bg-emerald-600', specs: ['1500VA / 900W', 'LCD Display', 'AVR'] },

  // --- Office Tech ---
  { id: 29, name: 'Zebra ZD421 Label Printer', category: 'Office Tech', subCategory: 'Label printers', image: img12, price: 389, originalPrice: 449, save: 60, badge: 'Retail', badgeColor: 'bg-slate-800', specs: ['Thermal Transfer', '4-Inch', 'USB/WiFi'] },
  { id: 30, name: 'Honeywell Voyager 1250g', category: 'Office Tech', subCategory: 'Barcode scanners', image: img12, price: 129, originalPrice: 159, save: 30, badge: 'Retail', badgeColor: 'bg-slate-700', specs: ['Laser Scanner', 'Ergonomic', 'USB'] },
  { id: 31, name: 'Square Register POS', category: 'Office Tech', subCategory: 'POS systems', image: img12, price: 799, originalPrice: 899, save: 100, badge: 'Point of Sale', badgeColor: 'bg-slate-900', specs: ['Dual Touch', 'Integrated Reader', 'App'] },

  // --- Software ---
  { id: 32, name: 'Windows 11 Pro License', category: 'Software', subCategory: 'Operating systems', image: img11, price: 199, originalPrice: 249, save: 50, badge: 'OS', badgeColor: 'bg-blue-600', specs: ['Digital Key', 'Enterprise Security', 'Remote'] },
  { id: 33, name: 'Bitdefender GravityZone', category: 'Software', subCategory: 'Cybersecurity', image: img11, price: 45, originalPrice: 65, save: 20, badge: 'Antivirus', badgeColor: 'bg-emerald-500', specs: ['Yearly License', 'Endpoint Security', 'Firewall'] },
  { id: 34, name: 'Microsoft 365 Business', category: 'Software', subCategory: 'Productivity', image: img11, price: 12, originalPrice: 15, save: 3, badge: 'Cloud', badgeColor: 'bg-blue-500', specs: ['Monthly subscription', 'Office Apps', 'Teams'] },

  // --- Bundled Solutions ---
  { id: 35, name: 'Office Setup Kit', category: 'Bundled Solutions', subCategory: 'Office setup kits', image: img11, price: 1249, originalPrice: 1549, save: 300, badge: 'Complete', badgeColor: 'bg-emerald-600', specs: ['PC + Monitor + Periph', 'Cables', 'Windows'] },
  { id: 36, name: 'School IT Package', category: 'Bundled Solutions', subCategory: 'School IT packages', image: img11, price: 899, originalPrice: 1199, save: 300, badge: 'Education', badgeColor: 'bg-blue-500', specs: ['Student PC', 'Software bundle', 'Support'] },

  // --- Consumables ---
  { id: 37, name: 'HP 206A Toner Set', category: 'Consumables', subCategory: 'Ink & toner', image: img1, price: 249, originalPrice: 289, save: 40, badge: 'Genuine', badgeColor: 'bg-slate-600', specs: ['CMYK Set', '1350 pages', 'Compatible M281'] },
  { id: 38, name: 'Premium A4 Paper (5 Reams)', category: 'Consumables', subCategory: 'Office supplies', image: img1, price: 35, originalPrice: 45, save: 10, badge: 'Supplies', badgeColor: 'bg-slate-500', specs: ['80gsm', '2500 sheets', 'Jam-free'] },

  // --- More Variety (Filling up to 50+) ---
  { id: 39, name: 'SanDisk Ultra 64GB', category: 'Storage', subCategory: 'USB flash drives', image: img3, price: 15, originalPrice: 25, save: 10, badge: 'Popular', badgeColor: 'bg-blue-500', specs: ['USB 3.0', '100MB/s', 'Slide design'] },
  { id: 40, name: 'Corsair RM850x PSU', category: 'IT Hardware', subCategory: 'Components', image: img13, price: 149, originalPrice: 179, save: 30, badge: 'Hardware', badgeColor: 'bg-slate-800', specs: ['850W Gold', 'Fully Modular', 'Quiet'] },
  { id: 41, name: 'SATA to USB 3.0 Adapter', category: 'Accessories', subCategory: 'Cables', image: img1, price: 19, originalPrice: 29, save: 10, badge: 'Adapter', badgeColor: 'bg-orange-500', specs: ['2.5" Drive support', 'UASP', 'Plug & Play'] },
  { id: 42, name: 'NeoDen 4 Pick & Place', category: 'IT Hardware', subCategory: 'Assembly Tech', image: img10, price: 4500, originalPrice: 5500, save: 1000, badge: 'Enterprise', badgeColor: 'bg-slate-900', specs: ['Vision system', '4 Heads', 'Auto Rails'] },
  { id: 43, name: 'Intel I225-T1 NIC', category: 'Networking', subCategory: 'Network cards', image: img7, price: 89, originalPrice: 119, save: 30, badge: 'Network', badgeColor: 'bg-blue-600', specs: ['2.5GbE Speed', 'PCIe 3.0', 'Intel Controller'] },
  { id: 44, name: 'Logitech Z150 Speakers', category: 'Accessories', subCategory: 'Speakers', image: img6, price: 35, originalPrice: 45, save: 10, badge: 'Audio', badgeColor: 'bg-orange-500', specs: ['2.0 Stereo', '6W Peak', '3.5mm input'] },
  { id: 45, name: 'Parallel to USB Adapter', category: 'Accessories', subCategory: 'Cables', image: img8, price: 24, originalPrice: 34, save: 10, badge: 'Legacy', badgeColor: 'bg-slate-500', specs: ['IEEE 1284', 'For Dot Matrix', '1.5m Cable'] },
  { id: 46, name: 'Ubiquiti UniFi Switch 24', category: 'Networking', subCategory: 'Network switches', image: img7, price: 219, originalPrice: 249, save: 30, badge: 'Managed', badgeColor: 'bg-blue-500', specs: ['24-Port Gig', 'Fanless', 'Rackmount'] },
  { id: 47, name: 'Samsung Galaxy Tab S9', category: 'IT Hardware', subCategory: 'Tablets', image: img3, price: 1199, originalPrice: 1399, save: 200, badge: 'Enterprise', badgeColor: 'bg-blue-500', specs: ['14.6" AMOLED', 'S-Pen', 'Snapdragon'] },
  { id: 50, name: 'Seagate IronWolf 12TB', category: 'Storage', subCategory: 'NAS systems', image: img4, price: 289, originalPrice: 349, save: 60, badge: 'Storage', badgeColor: 'bg-red-700', specs: ['NAS Optimized', '7200 RPM', 'AgileArray'] }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-12 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="bg-slate-950 text-white py-20 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-600/10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 text-brand-500"
          >
            IT Hardware & Software Wholesale
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Premium IT distribution for businesses and schools. Competitive pricing on the latest enterprise hardware, networking, and software solutions.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm ${
                activeCategory === cat 
                  ? 'bg-brand-600 text-white shadow-md' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid based on User Screenshot */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map(product => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow group flex flex-col"
              >
                {/* Image Section */}
                <div className="h-64 relative bg-white overflow-hidden p-4">
                  <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold text-white rounded-full shadow-sm ${product.badgeColor}`}>
                    {product.badge}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-blue-600 font-medium text-sm mb-1">{product.subCategory}</p>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{product.name}</h3>
                  
                  {/* Pricing Row */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl font-black text-slate-900">${product.price}</span>
                    <span className="text-sm font-semibold text-slate-400 line-through">${product.originalPrice}</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-md ml-auto">
                      Save ${product.save}
                    </span>
                  </div>
                  
                  {/* Specs List */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-slate-100 mt-auto">
                    <Link to="/contact" className="w-full py-3 bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold rounded-xl flex items-center justify-center transition-colors">
                      Request Quote
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <HardwareGuide />
    </div>
  );
}
