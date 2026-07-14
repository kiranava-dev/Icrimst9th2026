import { motion } from 'framer-motion';
import qrCode from '@/assets/qr-code.jpg';
import { Info, Award, Landmark } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

export function Registration() {
  return (
    <section id="registration" className="py-32 relative z-10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Registration & <span className="text-gradient">Fees</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <TiltCard className="h-full">
            <div className="glass-card rounded-3xl overflow-hidden h-full flex flex-col">
              <div className="p-8 border-b border-white/10">
                <h3 className="font-display text-2xl font-bold text-white">Fee Structure</h3>
              </div>
              <div className="overflow-x-auto flex-grow">
                <table className="w-full text-left border-collapse h-full">
                  <thead>
                    <tr className="bg-white/5 border-b border-white/10">
                      <th className="p-6 font-medium text-white/60">Category</th>
                      <th className="p-6 font-medium text-white/60">Early Bird</th>
                      <th className="p-6 font-medium text-white/60">Regular</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { cat: "Students", eb: "₹500", reg: "₹550" },
                      { cat: "Research Scholars", eb: "₹700", reg: "₹750" },
                      { cat: "Faculty", eb: "₹1,000", reg: "₹1,100" },
                      { cat: "Industry Participants", eb: "₹1,500", reg: "₹1,750" },
                      { cat: "Foreign Participants", eb: "USD 100", reg: "USD 120" }
                    ].map((row, i) => (
                      <tr key={i} className="hover:bg-white/[0.03] transition-colors group">
                        <td className="p-6 text-white font-medium group-hover:text-primary transition-colors">{row.cat}</td>
                        <td className="p-6 text-primary font-medium">{row.eb}</td>
                        <td className="p-6 text-white/70">{row.reg}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TiltCard>

          <TiltCard className="h-full">
            <div id="account-details" className="glass-card rounded-3xl p-8 flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Landmark className="w-48 h-48" />
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-8 mb-8 relative z-10">
                <h3 className="font-display text-2xl font-bold text-white">Account Details</h3>
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-3 flex flex-col items-center border border-white/10 shadow-lg">
                  <div className="w-24 h-24 bg-white p-1.5 rounded-lg mb-2 overflow-hidden">
                    <img src={qrCode} alt="Payment QR Code" className="w-full h-full object-cover scale-125" />
                  </div>
                  <span className="text-[10px] font-medium tracking-widest uppercase text-white/70">Scan to Pay</span>
                </div>
              </div>
              
              <div className="space-y-6 flex-grow relative z-10">
                <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                  <div className="text-xs text-white/50 uppercase tracking-wider font-medium">A/C Holder Name</div>
                  <div className="font-display text-lg text-white font-semibold">Sacred Heart College</div>
                </div>
                <div className="flex flex-col gap-1 border-b border-white/10 pb-4">
                  <div className="text-xs text-white/50 uppercase tracking-wider font-medium">A/C No</div>
                  <div className="font-mono text-xl text-primary font-semibold tracking-wider">0745011413761</div>
                </div>
                <div className="grid grid-cols-2 gap-6 border-b border-white/10 pb-4">
                  <div className="flex flex-col gap-1">
                    <div className="text-xs text-white/50 uppercase tracking-wider font-medium">Bank Name</div>
                    <div className="text-white font-medium">CSB Bank Ltd.</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs text-white/50 uppercase tracking-wider font-medium">Branch</div>
                    <div className="text-white font-medium">Gandhipet, Tirupattur</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1">
                    <div className="text-xs text-white/50 uppercase tracking-wider font-medium">IFSC Code</div>
                    <div className="font-mono text-secondary tracking-wider font-medium">CSBK0000745</div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="text-xs text-white/50 uppercase tracking-wider font-medium">MICR Code</div>
                    <div className="font-mono text-emerald-400 tracking-wider font-medium">635047103</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 relative z-10">
                <a 
                  href="https://forms.gle/ZxcrQ84kKKb7Yh5q6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-4 rounded-xl bg-primary text-background font-bold hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                >
                  Confirm Registration
                </a>
              </div>
            </div>
          </TiltCard>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-colors"
          >
            <div className="p-3 rounded-full bg-white/5 text-accent shadow-lg border border-white/10">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-2 text-lg">Abstract Submission</h4>
              <p className="text-sm text-white/70 leading-relaxed">Send submissions via email to <a href="mailto:icrimst2026@gmail.com" className="text-white hover:text-primary transition-colors font-medium">icrimst2026@gmail.com</a>. For Tamil abstracts, use Microsoft Word with Latha font. Authors will be notified of abstract acceptance status.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:border-white/20 transition-colors"
          >
            <div className="p-3 rounded-full bg-white/5 text-secondary shadow-lg border border-white/10">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-white mb-2 text-lg">Awards & Recognition</h4>
              <p className="text-sm text-white/70 leading-relaxed">Awards for the Best Oral Presentation and Best Poster Presentation will be given during the valedictory session to recognize outstanding contributions.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
