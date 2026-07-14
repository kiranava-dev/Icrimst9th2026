import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const topicsData = {
  "Material Science": [
    "Crystal Growth", "Crystallography", "Characterisation Methods", "Corrosion Technology", 
    "Energy Materials", "Radiation Measurement", "Magnetic Materials", "Shockwave-materials interaction", 
    "Modelling and Simulation", "Nanoscience", "Optoelectronic Devices", "Photocatalysts", 
    "Phase Transition", "Surface Engineering", "Superconducting Materials", "Semiconductor Materials", 
    "Solar Technology", "Transport Properties", "Thin Film", "Polymer Composites", "Quantum Computing"
  ],
  "Mathematics": [
    "Difference and Differential Equations", "Fluid Dynamics", "Finite Element Methods and Numerical Analysis", 
    "Mathematical Analysis", "Stochastic Processes", "Functional Equations", "Graph Theory", 
    "Operations Research", "Mathematical Modelling", "Computational Mathematics", "Fuzzy Set Theory", "Cryptography"
  ],
  "Life Sciences": [
    "Biochemistry", "Microbiology", "Biotechnology", "Biomaterials", 
    "Molecular and Cellular Biology", "Drug design", "Environmental and Agricultural Sciences"
  ]
};

export function Topics() {
  const [activeTab, setActiveTab] = useState<keyof typeof topicsData>("Material Science");

  return (
    <section id="topics" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Conference <span className="text-gradient">Topics</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {(Object.keys(topicsData) as Array<keyof typeof topicsData>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-4 rounded-full text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer overflow-hidden group ${
                  activeTab === tab 
                    ? 'text-background shadow-[0_0_30px_rgba(255,255,255,0.4)] scale-105' 
                    : 'glass-card text-white/70 hover:text-white hover:scale-105'
                }`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-white"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-wrap justify-center gap-4"
              >
                {topicsData[activeTab].map((topic, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card px-6 py-4 rounded-2xl text-white/90 text-sm md:text-base font-medium border border-white/10 hover:border-primary hover:text-primary transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] cursor-default"
                  >
                    {topic}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
