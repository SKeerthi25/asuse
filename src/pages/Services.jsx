import { motion } from 'framer-motion';
import { Package, Truck, Handshake, HeadphonesIcon, MonitorDot, Database, Cloud, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      icon: Package,
      title: "Bulk IT Supply Solutions",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      desc: "Tailored bulk ordering systems for enterprises needing large-scale deployments of workstations, peripherals, and server hardware."
    },
    {
      icon: Cloud,
      title: "Web & Cloud Setup",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      desc: "Business-ready cloud tools, cloud storage migrations, and enterprise web solutions tailored for scaling operations."
    },
    {
      icon: HeadphonesIcon,
      title: "Responsive IT Support",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
      desc: "Fast, reliable helpdesk support and on-site technical assistance when your systems slow down or need immediate troubleshooting."
    },
    {
      icon: Shield,
      title: "Secure Network Setup",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
      desc: "Comprehensive cybersecurity solutions, next-gen firewalls, and encrypted network infrastructures to protect your business data."
    },
    {
      icon: Truck,
      title: "Nationwide Logistics",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=2070&auto=format&fit=crop",
      desc: "Efficient and secure delivery networks across the UK, ensuring your hardware arrives safely and on schedule."
    },
    {
      icon: Database,
      title: "Data Center Procurement",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
      desc: "Sourcing high-end networking gear, storage arrays, and rack servers for data center expansion or upgrades."
    },
    {
      icon: Handshake,
      title: "IT Consultation",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      desc: "Expert advisory services to help you build a scalable IT roadmap and optimize your infrastructure budget."
    },
    {
      icon: MonitorDot,
      title: "Workspace Modernization",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      desc: "Upgrading office environments with modern displays, ergonomic peripherals, and unified communication systems."
    },
    {
      icon: Package,
      title: "Software Licensing Management",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      desc: "Centralized management of Microsoft, Google Workspace, and Adobe licenses for your entire enterprise."
    },
    {
      icon: Shield,
      title: "Endpoint Security Management",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=2070&auto=format&fit=crop",
      desc: "Deploying and managing advanced antivirus, zero-trust network access, and endpoint protection across all devices."
    },
    {
      icon: Database,
      title: "IT Hardware Asset Recovery",
      image: "https://images.unsplash.com/photo-1624835252877-c9f5ed2ba7ea?q=80&w=2070&auto=format&fit=crop",
      desc: "Secure decommissioning, data wiping, and environmentally compliant recycling of aging IT infrastructure."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure Audits",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      desc: "Comprehensive review of AWS, Azure, and Google Cloud environments to optimize performance and reduce monthly spend."
    }
  ];

  return (
    <div className="pt-12 pb-24">
      <div className="bg-slate-950 text-white py-20 mb-16 border-b-4 border-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 text-brand-500"
          >
            Practical IT Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            End-to-end IT supply chain solutions designed for modern enterprise efficiency.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Core IT services for everyday business needs</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                 <img 
                   src={service.image} 
                   alt={service.title} 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 bg-slate-900/40"></div>
                 <div className="absolute top-4 left-4 h-12 w-12 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg backdrop-blur-sm">
                   <service.icon size={24} />
                 </div>
              </div>
              <div className="p-8 bg-white dark:bg-slate-900">
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                  {service.desc}
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-brand-600 font-bold text-sm hover:text-brand-800 transition-colors uppercase tracking-wider">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
