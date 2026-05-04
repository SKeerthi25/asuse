import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const categories = ['All', 'Computers', 'Laptops', 'Tablets', 'Servers', 'Components', 'Software'];

const products = [
  { 
    id: 1, 
    name: 'Dell OptiPlex 7090', 
    category: 'Computers',
    subCategory: 'Desktop Workstation',
    image: img1, 
    price: 899,
    originalPrice: 1299,
    save: 400,
    badge: 'Best Seller',
    badgeColor: 'bg-emerald-500',
    specs: ['Intel i7-11700', '16GB RAM', '512GB SSD', 'Windows 11 Pro']
  },
  { 
    id: 2, 
    name: 'Lenovo ThinkPad E15', 
    category: 'Laptops', 
    subCategory: 'Business Laptop',
    image: img2, 
    price: 1299,
    originalPrice: 1799,
    save: 500,
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
    specs: ['Intel i7-12700H', '16GB RAM', '1TB SSD', '15.6" FHD']
  },
  { 
    id: 3, 
    name: 'Microsoft Surface Pro 9', 
    category: 'Tablets', 
    subCategory: '2-in-1 Tablet',
    image: img3, 
    price: 1599,
    originalPrice: 2199,
    save: 600,
    badge: 'Premium',
    badgeColor: 'bg-purple-500',
    specs: ['Intel i7-1255U', '16GB RAM', '512GB SSD', '13" Touch']
  },
  { 
    id: 4, 
    name: 'HP EliteDesk 800 G6', 
    category: 'Computers',
    subCategory: 'Mini Desktop',
    image: img4, 
    price: 649,
    originalPrice: 949,
    save: 300,
    badge: 'Value',
    badgeColor: 'bg-emerald-500',
    specs: ['Intel i5-10500T', '16GB RAM', '256GB SSD', 'Windows 10 Pro']
  },
  { 
    id: 5, 
    name: 'Dell PowerEdge R750', 
    category: 'Servers', 
    subCategory: 'Rack Server',
    image: img5, 
    price: 4500,
    originalPrice: 5500,
    save: 1000,
    badge: 'Enterprise',
    badgeColor: 'bg-slate-800',
    specs: ['Dual Xeon Gold', '128GB RDIMM', '4x 2TB NVMe', 'iDRAC9 Ent']
  },
  { 
    id: 6, 
    name: 'Apple MacBook Pro 16"', 
    category: 'Laptops', 
    subCategory: 'Creative Workstation',
    image: img6, 
    price: 2499,
    originalPrice: 2899,
    save: 400,
    badge: 'Premium',
    badgeColor: 'bg-purple-500',
    specs: ['M3 Max Chip', '36GB Unified', '1TB SSD', 'Liquid Retina XDR']
  },
  { 
    id: 7, 
    name: 'Cisco Catalyst 9300', 
    category: 'Servers', 
    subCategory: 'Enterprise Switch',
    image: img7, 
    price: 3200,
    originalPrice: 3800,
    save: 600,
    badge: 'Network',
    badgeColor: 'bg-blue-600',
    specs: ['48-Port PoE+', 'Network Advantage', 'Stackable', 'UADP 2.0 ASIC']
  },
  { 
    id: 8, 
    name: 'Samsung Galaxy Tab S9 Ultra', 
    category: 'Tablets', 
    subCategory: 'Enterprise Tablet',
    image: img8, 
    price: 1199,
    originalPrice: 1399,
    save: 200,
    badge: 'Popular',
    badgeColor: 'bg-blue-500',
    specs: ['14.6" AMOLED', 'Snapdragon 8 Gen 2', '12GB RAM', 'S Pen Included']
  },
  { 
    id: 9, 
    name: 'Dell Precision 3660', 
    category: 'Computers', 
    subCategory: 'Tower Workstation',
    image: img9, 
    price: 1899,
    originalPrice: 2499,
    save: 600,
    badge: 'Best Seller',
    badgeColor: 'bg-emerald-500',
    specs: ['Intel Core i9-12900', '64GB DDR5', 'NVIDIA RTX A4000', '2TB NVMe SSD']
  },
  { 
    id: 10, 
    name: 'Synology RackStation RS1221+', 
    category: 'Servers', 
    subCategory: 'NAS Storage',
    image: img10, 
    price: 1349,
    originalPrice: 1599,
    save: 250,
    badge: 'Storage',
    badgeColor: 'bg-slate-800',
    specs: ['8-Bay Rackmount', 'AMD Ryzen V1500B', 'ECC Memory', '10GbE Ready']
  },
  { 
    id: 11, 
    name: 'HP Elite Dragonfly G3', 
    category: 'Laptops', 
    subCategory: 'Executive Laptop',
    image: 'https://images.unsplash.com/photo-1531297172864-dddf5dce9061?q=80&w=2070&auto=format&fit=crop', 
    price: 1949,
    originalPrice: 2349,
    save: 400,
    badge: 'Premium',
    badgeColor: 'bg-purple-500',
    specs: ['Intel Core i7-1265U', '16GB LPDDR5', '512GB PCIe Gen4', '13.5" WUXGA+']
  },
  { 
    id: 12, 
    name: 'Logitech MX Master 3S Bundle', 
    category: 'Computers', 
    subCategory: 'Peripherals',
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071&auto=format&fit=crop', 
    price: 199,
    originalPrice: 249,
    save: 50,
    badge: 'Accessory',
    badgeColor: 'bg-orange-500',
    specs: ['Anywhere Tracking', 'MagSpeed Scroll', 'Quiet Clicks', 'Multi-Device']
  },
  { 
    id: 13, 
    name: 'NVIDIA RTX 4090 GPU', 
    category: 'Components', 
    subCategory: 'Graphics Card',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop', 
    price: 1599,
    originalPrice: 1899,
    save: 300,
    badge: 'Hardware',
    badgeColor: 'bg-emerald-600',
    specs: ['24GB GDDR6X', 'Ada Lovelace Arch', 'DLSS 3.0', 'DisplayPort 1.4a']
  },
  { 
    id: 14, 
    name: 'Intel Core i9-14900K', 
    category: 'Components', 
    subCategory: 'Processor',
    image: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop', 
    price: 599,
    originalPrice: 699,
    save: 100,
    badge: 'Hardware',
    badgeColor: 'bg-blue-600',
    specs: ['24 Cores / 32 Threads', 'Up to 6.0 GHz', 'LGA 1700', '125W Base Power']
  },
  { 
    id: 15, 
    name: 'Microsoft 365 Enterprise E5', 
    category: 'Software', 
    subCategory: 'Cloud Suite',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop', 
    price: 38,
    originalPrice: 45,
    save: 7,
    badge: 'License',
    badgeColor: 'bg-blue-500',
    specs: ['Monthly per user', 'Advanced Security', 'Power BI Pro', 'Teams Voice']
  },
  { 
    id: 16, 
    name: 'Adobe Creative Cloud Teams', 
    category: 'Software', 
    subCategory: 'Design Suite',
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2070&auto=format&fit=crop', 
    price: 89,
    originalPrice: 110,
    save: 21,
    badge: 'License',
    badgeColor: 'bg-red-500',
    specs: ['Monthly per user', '20+ Apps Included', '1TB Cloud Storage', 'Admin Console']
  },
  { 
    id: 17, 
    name: 'Corsair Vengeance 64GB DDR5', 
    category: 'Components', 
    subCategory: 'Memory',
    image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?q=80&w=2070&auto=format&fit=crop', 
    price: 249,
    originalPrice: 299,
    save: 50,
    badge: 'Hardware',
    badgeColor: 'bg-slate-800',
    specs: ['2x32GB Kit', '6000MT/s', 'Intel XMP 3.0', 'Aluminum Heatspreader']
  },
  { 
    id: 18, 
    name: 'Bitdefender GravityZone', 
    category: 'Software', 
    subCategory: 'Endpoint Security',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop', 
    price: 45,
    originalPrice: 65,
    save: 20,
    badge: 'Security',
    badgeColor: 'bg-emerald-500',
    specs: ['Yearly per user', 'Ransomware Mitig.', 'Patch Management', 'Firewall']
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="pt-12 pb-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="bg-slate-950 text-white py-20 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-brand-500">Featured Enterprise Solutions</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Hand-picked technology solutions with enterprise pricing and comprehensive support.
          </p>
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
                <div className="h-64 relative bg-slate-100 overflow-hidden">
                  <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold text-white rounded-full shadow-sm ${product.badgeColor}`}>
                    {product.badge}
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
    </div>
  );
}
