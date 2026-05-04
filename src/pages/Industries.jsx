import { motion } from 'framer-motion';
import { Building2, Store, GraduationCap, Rocket, Landmark, Stethoscope } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: Building2,
      title: "Corporate Offices",
      desc: "Complete workstation deployments, networking infrastructure, and secure communication tools for enterprise environments."
    },
    {
      icon: Store,
      title: "Retailers",
      desc: "Point-of-sale systems, inventory management hardware, and robust back-office computing solutions."
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      desc: "Bulk supply of laptops, interactive displays, and educational software licenses for schools and universities."
    },
    {
      icon: Rocket,
      title: "Startups",
      desc: "Scalable hardware packages and flexible cloud integration tools for rapidly growing tech companies."
    },
    {
      icon: Landmark,
      title: "Government Sectors",
      desc: "Highly secure, compliant, and cost-effective IT procurement solutions for public sector organizations."
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      desc: "Specialized computing equipment, secure data storage, and reliable peripherals for medical facilities."
    }
  ];

  return (
    <div className="pt-12 pb-24">
      <div className="bg-slate-950 text-white py-20 mb-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-brand-600 mix-blend-overlay"></div>
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Cityscape" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Industries We <span className="text-brand-500">Serve</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Tailored IT solutions powering diverse sectors across the United Kingdom.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col items-center text-center group"
            >
              <div className="h-20 w-20 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 group-hover:bg-brand-50 dark:group-hover:bg-brand-900/30 transition-all duration-300">
                <ind.icon size={36} className="text-slate-700 dark:text-slate-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{ind.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
