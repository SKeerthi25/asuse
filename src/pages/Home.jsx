import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Server, Monitor, ShieldCheck, ArrowRight, Zap, Globe, Users, Trophy, ChevronRight, HardDrive, Cpu, Network, Cloud, Lock, HeadphonesIcon } from 'lucide-react';

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-950 text-white selection:bg-brand-500 selection:text-white">
      {/* Dark Theme Hero Section Matching the Reference */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-24 min-h-[90vh] flex items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              <motion.h2 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white text-3xl md:text-5xl font-black tracking-widest mb-4 uppercase drop-shadow-md"
              >
                ASUSE LTD
              </motion.h2>
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-brand-400 font-bold tracking-widest text-sm uppercase mb-6"
              >
                <span>IT SUPPORT</span>
                <span className="text-slate-600">•</span>
                <span>WEB</span>
                <span className="text-slate-600">•</span>
                <span>CLOUD</span>
              </motion.div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-white">
                Practical IT Solutions <br />
                <span className="text-brand-100">for Modern Businesses</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
                ASUSE LTD is an IT company providing reliable support, enterprise hardware distribution, cloud setup, maintenance, and business technology services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link to="/contact" className="px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white rounded-xl font-bold shadow-lg shadow-brand-500/20 transition-all flex items-center justify-center">
                  Contact ASUSE LTD
                </Link>
                <Link to="/services" className="px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-slate-500 text-white rounded-xl font-bold transition-all flex items-center justify-center">
                  View Services
                </Link>
              </div>

              {/* Three key points */}
              <div className="grid grid-cols-3 gap-6">
                 <div>
                   <h4 className="text-2xl font-bold text-white mb-1">UK</h4>
                   <p className="text-sm text-slate-400">Based in Hayes</p>
                 </div>
                 <div>
                   <h4 className="text-2xl font-bold text-white mb-1">Fast</h4>
                   <p className="text-sm text-slate-400">Remote and local help</p>
                 </div>
                 <div>
                   <h4 className="text-2xl font-bold text-white mb-1">Custom</h4>
                   <p className="text-sm text-slate-400">Solutions for businesses</p>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring" }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
              <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-auto lg:h-full rounded-3xl">
                
                {/* Background glowing orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                    alt="Workspace" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-900/40"></div>
                </div>

                {/* Floating Card 1 */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 left-2 md:-left-10 bg-slate-900 border border-slate-800 p-4 md:p-5 rounded-2xl shadow-2xl max-w-[200px] md:max-w-xs w-auto md:w-64 z-20"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="text-orange-400" size={20} />
                    <span className="text-sm font-bold text-white">Web & Cloud Setup</span>
                  </div>
                  <p className="text-sm text-slate-400">Business-ready tools and websites designed for scale.</p>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-32 left-2 md:-left-16 bg-slate-900 border border-slate-800 p-4 md:p-5 rounded-2xl shadow-2xl max-w-[220px] md:max-w-xs w-auto md:w-72 z-20"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <HeadphonesIcon className="text-yellow-400" size={20} />
                    <span className="text-sm font-bold text-white">Responsive IT Support</span>
                  </div>
                  <p className="text-sm text-slate-400">Fast help when systems slow down or need immediate troubleshooting.</p>
                </motion.div>

                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-16 right-2 md:right-10 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full shadow-2xl z-20 flex items-center gap-2"
                >
                  <ShieldCheck className="text-brand-400" size={16} />
                  <span className="text-xs font-bold text-white">Secure Setup</span>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <section className="py-6 border-y border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden">
        <div className="flex w-full overflow-hidden">
           <motion.div 
             animate={{ x: [0, -1000] }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="flex gap-16 items-center px-8 whitespace-nowrap"
           >
             {[
               "MICROSOFT 365", "WORDPRESS", "GOOGLE WORKSPACE", "CLOUD BACKUP", "CYBER SECURITY", "NETWORK",
               "MICROSOFT 365", "WORDPRESS", "GOOGLE WORKSPACE", "CLOUD BACKUP", "CYBER SECURITY", "NETWORK"
             ].map((tech, i) => (
                <div key={i} className="text-sm md:text-base font-black tracking-widest text-slate-400 uppercase">
                  {tech}
                </div>
             ))}
           </motion.div>
        </div>
      </section>

      {/* Core IT Services */}
      <section className="py-24 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white">Core IT services for everyday business needs</h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Monitor, title: "Hardware Supply", desc: "Enterprise PCs & Laptops", color: "text-blue-400" },
              { icon: Server, title: "Servers", desc: "Rack & Tower Servers", color: "text-purple-400" },
              { icon: Network, title: "Networking", desc: "Switches & Routers", color: "text-brand-400" },
              { icon: Lock, title: "Cybersecurity", desc: "Next-gen Firewalls", color: "text-red-400" }
            ].map((cat, i) => (
              <motion.div key={i} variants={staggerItem} className="bg-slate-900 border border-slate-800 p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 cursor-pointer hover:border-slate-700">
                <div className={`mb-6 ${cat.color}`}>
                  <cat.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{cat.title}</h3>
                <p className="text-slate-400 font-medium mb-2">{cat.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">Why Partner With <span className="text-brand-500">ASUSE?</span></h2>
              <div className="space-y-10">
                {[
                  {
                    icon: ShieldCheck,
                    title: "Premium Hardware Guarantee",
                    desc: "Direct partnerships with top-tier manufacturers ensuring 100% authentic, warrantied hardware for your critical operations."
                  },
                  {
                    icon: Zap,
                    title: "Rapid Deployment Logistics",
                    desc: "Streamlined UK-wide supply chain operations ensuring rapid delivery and setup to minimize business downtime."
                  },
                  {
                    icon: Users,
                    title: "Dedicated Account Management",
                    desc: "Personalized support teams offering technical consultation, licensing management, and long-term scaling strategies."
                  }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className="h-14 w-14 bg-slate-800 rounded-xl flex items-center justify-center text-brand-400 group-hover:bg-brand-500 group-hover:text-white transition-colors duration-300">
                        <feature.icon size={24} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-slate-400 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <div className="grid grid-cols-2 gap-4">
                 <div className="space-y-4 mt-8">
                   <div className="bg-slate-800 p-8 rounded-3xl text-center border border-slate-700">
                     <Trophy size={40} className="mx-auto text-brand-400 mb-4" />
                     <h4 className="text-4xl font-black text-white mb-2">15+</h4>
                     <p className="text-sm font-semibold text-slate-400">Years Experience</p>
                   </div>
                   <div className="rounded-3xl overflow-hidden border border-slate-700">
                     <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700" alt="Corporate IT Infrastructure" />
                   </div>
                 </div>
                 <div className="space-y-4">
                   <div className="rounded-3xl overflow-hidden border border-slate-700">
                     <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700" alt="Server Room" />
                   </div>
                   <div className="bg-slate-800 p-8 rounded-3xl text-center border border-slate-700">
                     <Globe size={40} className="mx-auto text-brand-400 mb-4" />
                     <h4 className="text-4xl font-black text-white mb-2">10k+</h4>
                     <p className="text-sm font-semibold text-slate-400">Products Delivered</p>
                   </div>
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-brand-900">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to upgrade your infrastructure?</h2>
            <p className="text-xl text-brand-100 mb-10">
              Get in touch with our team today for custom quotes and bulk supply solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="px-8 py-4 bg-white text-brand-900 hover:bg-slate-100 rounded-xl font-bold transition-all shadow-xl">
                Contact Sales Team
              </Link>
              <Link to="/products" className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white rounded-xl font-bold transition-all">
                View Our Catalog
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
