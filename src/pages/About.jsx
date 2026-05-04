import { motion } from 'framer-motion';
import { Target, Flag, Heart, Award } from 'lucide-react';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="pt-12 pb-24">
      {/* Page Header */}
      <div className="bg-slate-950 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            About <span className="text-brand-500">ASUSE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Delivering excellence in IT wholesale distribution across the United Kingdom since our inception.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Overview & Director */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              <p>
                Based in Hayes, London, ASUSE LTD has established itself as a premier wholesale distributor of computers, peripheral equipment, and software solutions.
              </p>
              <p>
                Under the leadership of Director Thiyagarajan Thiruvarasu, we have built strong partnerships with major technology manufacturers, allowing us to provide cutting-edge infrastructure to businesses, educational institutions, and government sectors nationwide.
              </p>
              <p>
                Our commitment to reliability, competitive pricing, and exceptional customer service has made us the trusted IT partner for hundreds of organizations.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 flex flex-col items-center justify-center text-center border border-slate-200 dark:border-slate-800"
          >
            <div className="h-20 w-20 bg-brand-600 rounded-full flex items-center justify-center text-white text-3xl font-black mb-6 shadow-xl shadow-brand-500/20">
              TT
            </div>
            <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Thiyagarajan Thiruvarasu</h3>
            <p className="text-brand-500 font-bold uppercase tracking-widest text-sm">Managing Director</p>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: Flag,
              title: "Our Mission",
              desc: "To empower UK businesses by providing seamless access to high-quality, reliable, and scalable IT infrastructure and software solutions."
            },
            {
              icon: Target,
              title: "Our Vision",
              desc: "To be the most trusted and efficient technology wholesale partner in Europe, driving innovation through exceptional supply chain management."
            },
            {
              icon: Heart,
              title: "Our Values",
              desc: "Integrity in our partnerships, excellence in our service, and a relentless commitment to technological advancement and sustainability."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 text-center"
            >
              <div className="h-16 w-16 mx-auto bg-brand-50 dark:bg-brand-900/20 text-brand-600 rounded-full flex items-center justify-center mb-6">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
