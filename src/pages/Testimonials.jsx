import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "IT Director, Nexus Corp",
    content: "ASUSE LTD has been our primary hardware distributor for over 3 years. Their ability to deliver bulk workstation orders on tight schedules has been invaluable to our expansion.",
    rating: 5
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO, FinTech Solutions",
    content: "When we needed to upgrade our data center, ASUSE provided expert consultation and sourced high-end server racks at highly competitive prices. Exceptional service from start to finish.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Robertson",
    role: "Operations Manager, EduTrust UK",
    content: "Supplying 500 laptops for our educational trust could have been a logistical nightmare, but Thiyagu and his team handled everything flawlessly. Highly recommended for bulk educational tech.",
    rating: 5
  },
  {
    id: 4,
    name: "Marcus Thorne",
    role: "Network Engineer, CloudSync",
    content: "The cybersecurity appliances and network switches we procured through ASUSE LTD were exactly as specified, 100% authentic, and delivered well before our deployment deadline.",
    rating: 5
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Procurement Head, Global Retail",
    content: "We've shifted all our Microsoft 365 licensing and enterprise software procurement to ASUSE. Their centralized management and support have saved us both time and significant budget.",
    rating: 5
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Founder, Innovate Tech Startups",
    content: "As a startup, we needed a scalable IT foundation without overspending. ASUSE provided the perfect balance of premium hardware and cost-effective cloud setups.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="pt-12 pb-24">
      <div className="bg-slate-950 text-white py-20 mb-16 border-b-4 border-brand-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 text-brand-500"
          >
            Client Testimonials
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Here's what our enterprise partners have to say about working with ASUSE LTD.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow relative group"
            >
              <div className="absolute top-6 right-6 text-slate-100 dark:text-slate-800 transition-colors group-hover:text-brand-50 dark:group-hover:text-brand-900/30">
                <Quote size={60} />
              </div>
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 relative z-10 min-h-[100px]">
                "{testimonial.content}"
              </p>
              
              <div className="border-t border-slate-100 dark:border-slate-800 pt-6 relative z-10">
                <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                <p className="text-brand-600 dark:text-brand-400 text-sm font-medium">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
