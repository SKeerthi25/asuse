import { motion } from 'framer-motion';
import { Briefcase, ChevronRight } from 'lucide-react';

export default function Careers() {
  const jobs = [
    {
      title: "Senior Enterprise Sales Executive",
      department: "Sales",
      location: "Hayes, London (Hybrid)",
      type: "Full-time"
    },
    {
      title: "IT Procurement Specialist",
      department: "Supply Chain",
      location: "Hayes, London",
      type: "Full-time"
    },
    {
      title: "Technical Support Engineer",
      department: "Customer Success",
      location: "Remote - UK",
      type: "Full-time"
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
            Join <span className="text-brand-500">ASUSE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto"
          >
            Build your career at the forefront of enterprise IT distribution.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
          <p className="text-slate-600 dark:text-slate-400">We're always looking for talented individuals to join our team.</p>
        </div>

        <div className="space-y-6">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between group cursor-pointer hover:border-brand-500 dark:hover:border-brand-500 transition-colors"
            >
              <div className="flex items-center gap-6 mb-4 sm:mb-0 w-full sm:w-auto">
                <div className="h-12 w-12 bg-slate-100 dark:bg-slate-800 text-brand-600 rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-3 mt-2 text-sm text-slate-500">
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{job.department}</span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{job.location}</span>
                    <span className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md">{job.type}</span>
                  </div>
                </div>
              </div>
              <div className="sm:ml-4 flex-shrink-0 self-end sm:self-center text-brand-600">
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center glass-card p-8 bg-brand-50 dark:bg-brand-900/10 border-brand-100 dark:border-brand-900/30">
          <h3 className="text-xl font-bold mb-3">Don't see a fit?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6">Send us your CV and we'll keep you in mind for future opportunities.</p>
          <button className="px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold transition-colors">
            Submit Spontaneous Application
          </button>
        </div>
      </div>
    </div>
  );
}
