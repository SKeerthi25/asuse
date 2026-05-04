import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Do you supply to businesses outside of the UK?",
      a: "Currently, ASUSE LTD focuses exclusively on the UK market to ensure rapid delivery and localized support for our domestic enterprise clients."
    },
    {
      q: "What is the minimum order quantity for wholesale pricing?",
      a: "Wholesale pricing tiers begin at 10 units for hardware (computers, laptops) and 20 units for peripherals. For software licensing, we offer custom enterprise agreements."
    },
    {
      q: "Do you offer installation and deployment services?",
      a: "We are primarily a wholesale distributor. However, we have a network of certified integration partners across the UK that we can recommend for large-scale deployments."
    },
    {
      q: "Are the products covered by warranty?",
      a: "Yes, all our hardware comes with full manufacturer warranties. We also offer extended enterprise warranty packages and rapid-replacement SLAs for mission-critical infrastructure."
    },
    {
      q: "How long does shipping usually take?",
      a: "Standard enterprise deliveries take 2-4 business days. We also offer next-day delivery for in-stock items ordered before 2 PM."
    },
    {
      q: "Do you provide credit terms for enterprise clients?",
      a: "Yes, we offer flexible 30-day and 60-day credit accounts for qualifying corporate entities and educational institutions, subject to credit checks."
    },
    {
      q: "Can you source specific or discontinued hardware?",
      a: "Absolutely. With our extensive global network of suppliers, we can often procure hard-to-find, legacy, or end-of-life hardware for specialized infrastructure needs."
    },
    {
      q: "Do you offer technical support for the products purchased?",
      a: "We offer basic technical support and RMA assistance for all hardware. For advanced configuration or software support, we provide dedicated SLA-based support packages."
    }
  ];

  return (
    <div className="pt-12 pb-24">
      <div className="bg-slate-950 text-white py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6"
          >
            Frequently Asked <span className="text-brand-500">Questions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Everything you need to know about our products, services, and wholesale processes.
          </motion.p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-card overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-brand-500 shadow-md' : 'border-slate-200 dark:border-slate-800'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-bold text-lg pr-8 text-slate-900 dark:text-white">{faq.q}</span>
                <ChevronDown 
                  className={`text-brand-500 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
