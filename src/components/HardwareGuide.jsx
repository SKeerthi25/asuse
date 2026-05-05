import { motion } from 'framer-motion';
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

export default function HardwareGuide() {
  const sections = [
    {
      title: "Input Devices",
      image: img15,
      items: [
        { name: "Keyboards", desc: "Wired, wireless, mechanical" },
        { name: "Mice", desc: "Optical, wireless, ergonomic" },
        { name: "Combo sets", desc: "Keyboard + mouse" },
        { name: "Graphic tablets", desc: "For design users" }
      ]
    },
    {
      title: "Display & Output Devices",
      image: img12,
      items: [
        { name: "Monitors", desc: "HD, Full HD, 4K, curved" },
        { name: "Projectors", desc: "For schools & offices" },
        { name: "Printers", desc: "Inkjet, laser, all-in-one" },
        { name: "Scanners", desc: "High-resolution document scanning" }
      ]
    },
    {
      title: "Networking Equipment",
      image: img7,
      items: [
        { name: "Routers", desc: "Wi-Fi 5, Wi-Fi 6" },
        { name: "Modems", desc: "High-speed internet access" },
        { name: "Network switches", desc: "Wired network expansion" },
        { name: "Range extenders", desc: "Wi-Fi boosters" },
        { name: "Access points", desc: "Enterprise wireless" },
        { name: "Cables", desc: "Ethernet cables & connectors" }
      ]
    },
    {
      title: "Storage Devices",
      image: img3,
      items: [
        { name: "External hard drives", desc: "High-capacity backup" },
        { name: "SSDs", desc: "Portable & internal solid state" },
        { name: "USB flash drives", desc: "Compact portable storage" },
        { name: "NAS systems", desc: "Network Attached Storage" }
      ]
    },
    {
      title: "Computer Accessories",
      image: img14,
      items: [
        { name: "Stands & cooling", desc: "Laptop stands & cooling pads" },
        { name: "Docking stations", desc: "Multi-port connectivity" },
        { name: "Webcams", desc: "HD video conferencing" },
        { name: "Audio", desc: "Headsets & microphones, Speakers" },
        { name: "UPS", desc: "Uninterruptible Power Supply" }
      ]
    },
    {
      title: "Office Tech Essentials",
      image: img12,
      items: [
        { name: "Barcode scanners", desc: "Retail and inventory" },
        { name: "POS systems", desc: "Point of Sale" },
        { name: "Label printers", desc: "Shipping and organization" },
        { name: "Card readers", desc: "Secure access and payments" }
      ]
    },
    {
      title: "Software Products",
      image: img11,
      items: [
        { name: "Operating systems", desc: "Windows, Linux setups" },
        { name: "Cybersecurity", desc: "Antivirus software" },
        { name: "Productivity", desc: "Word processing, spreadsheets" },
        { name: "Business tools", desc: "Accounting for SMEs, CRM" },
        { name: "Backup software", desc: "Data recovery solutions" }
      ]
    },
    {
      title: "IT Hardware",
      image: img13,
      items: [
        { name: "Desktop computers", desc: "Standard office towers" },
        { name: "Laptops", desc: "Business & enterprise mobility" },
        { name: "Workstations", desc: "High-performance computing" },
        { name: "Mini PCs", desc: "Compact desktop solutions" }
      ]
    },
    {
      title: "Bundled Solutions",
      image: img11,
      items: [
        { name: "Office setup kits", desc: "PC + monitor + peripherals" },
        { name: "School IT packages", desc: "Education-focused bundles" },
        { name: "Home-office kits", desc: "Remote work starter kits" },
        { name: "Networking bundles", desc: "Complete infrastructure setups" }
      ]
    },
    {
      title: "Add-on Consumables",
      image: img1,
      items: [
        { name: "Ink & toner", desc: "Printer cartridges" },
        { name: "Office supplies", desc: "Paper and essentials" },
        { name: "Cleaning kits", desc: "For delicate electronics" }
      ]
    }
  ];

  return (
    <div className="py-24 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6">Comprehensive IT Portfolio</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Explore our complete range of enterprise hardware, software, and managed IT solutions tailored for modern business environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-shadow shadow-sm flex flex-col"
            >
              <div className="h-48 w-full relative overflow-hidden bg-slate-200">
                <img src={section.image} alt={section.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">{section.title}</h3>
                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex flex-col pl-4 border-l-2 border-brand-500">
                      <span className="font-bold text-slate-800 dark:text-slate-200">{item.name}</span>
                      {item.desc && <span className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">{item.desc}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
