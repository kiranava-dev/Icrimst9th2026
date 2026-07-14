import { motion } from 'framer-motion';
import { Atom, Users, FlaskConical, Globe2, GraduationCap, ShieldCheck, Dna } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

interface Member { name: string; role: string; inst: string }

const patrons: Member[] = [
  { name: "Rev. Fr. Ignatius Stanley Lawrence SDB", role: "Rector & Secretary", inst: "Sacred Heart College (Autonomous), Tirupattur" },
  { name: "Rev. Dr. Praveen Peter SDB", role: "Principal", inst: "Sacred Heart College (Autonomous), Tirupattur" },
  { name: "Rev. Dr. G. Theophil Anand SDB", role: "Additional Principal", inst: "Sacred Heart College (Autonomous), Tirupattur" }
];

const chairs: Member[] = [
  { name: "Dr. S.A. Martin Britto Dhas", role: "Department of Physics", inst: "Sacred Heart College" },
  { name: "Dr. M. Srinivasan", role: "Elavenil - ISTA", inst: "SSN College, Chennai" }
];

const conveners: Member[] = [
  { name: "Dr. G. Britto Antony Xavier", role: "UG Head", inst: "Dept. of Mathematics, SHC" },
  { name: "Mr. D. Daniel Lawrence", role: "Head", inst: "Dept. of Physics (Shift-I), SHC" },
  { name: "Dr. V. Collins Arun Prakash", role: "Head", inst: "Dept. of Chemistry (Shift-I), SHC" },
  { name: "Dr. P. Saranraj", role: "Head", inst: "Dept. of Microbiology, SHC" },
  { name: "Dr. I. Niyas Ahamed", role: "UG Head", inst: "Dept. of Biochemistry, SHC" }
];

const secretaries: Member[] = [
  { name: "Mr. N. Madhavan", role: "Dept. of Physics", inst: "SHC" },
  { name: "Dr. A. Poongothai", role: "Dept. of Biochemistry", inst: "SHC" },
  { name: "Dr. M. Manigandan", role: "Dept. of Microbiology", inst: "SHC" },
  { name: "Dr. N. Avinash", role: "Dept. of Mathematics", inst: "SHC" },
  { name: "Dr. G. Prakash", role: "Dept. of Chemistry", inst: "SHC" }
];

const advisoryRaw = [
  "Prof. P. Ramasamy (SSN College, Chennai)", "Prof. K.P.J. Reddy (Indian Institute of Science, Bengaluru)", "Prof. S. Arumugam (Former Vice-Chancellor, TNOU Chennai)", "Prof. P. Kolandaivel (Former Vice-Chancellor, Periyar University Salem)", "Prof. G. Ravi (Vice Chancellor, Alagappa University Karaikudi)", "Prof. N. Vijayan (CSIR-NPL, New Delhi)", "Prof. C. Sekar (Alagappa University Karaikudi)", "Prof. R. Ganesan (Indian Institute of Science, Bengaluru)", "Prof. V. Balasubramaniyan (Advisor, Elavenil Organization)", "Prof. P. Richard Rajkumar (American College, Madurai)", "Prof. G. Rajesh (IIT, Madras)", "Prof. R. Jayavel (AC Tech, Anna University, Chennai)", "Prof. S. Moorthy Babu (Anna University, Chennai)", "Prof. M. Balakrishnan (KKGA College, Thiruvannamalai)", "Prof. A. Raja Sekar (Thiruvalluvar University, Vellore)", "Prof. D. Easwaramoorthy (VIT, Vellore)", "Prof. V. Chandrasekar (Govt. Art College, Vandavasi)", "Prof. R. Venkatesh (Muthurangam Govt. Arts College, Vellore)", "Prof. A. Arun (Govt. Arts College, Chengam)", "Prof. G. Shankar (University of Madras, Chennai)", "Prof. Hasanain A.J. Gharban (University of Wasit, Iraq)", "Prof. Alexander Machado Cardoso (Rio de Janeiro State University, Brazil)", "Prof. Abdel Razzaq Al Tawaha (NARC, Jordan)", "Prof. Turana Mammadova (Azerbaijan State Agricultural University, Azerbaijan)"
];

const intScientificRaw = [
  "Dr. Ikhyun Kim (Keimyung University, Republic of Korea)", "Dr. Raju Suresh Kumar (King Saud University, Saudi Arabia)", "Dr. Magesh Murugesan (Washington State University, USA)", "Dr. Lidong Dai (Guizhou Normal Normal University, China)", "Dr. Abdulrahman I. Almansour (King Saud University, Saudi Arabia)", "Dr. Daniel Joseph (Kyungpook National University, South Korea)", "Dr. C.R. Selvakumar (University of Waterloo, Canada)", "Dr. S. Anbu (University of East Anglia, UK)", "Dr. Y. Kozo Fujiwara (Tohoku University, Japan)", "Dr. P. Dhanaprabhu (Ming Chi University of Technology, Taiwan)", "Dr. R. Paul Murugan (Stanford University, USA)", "Dr. G. Sankar (University College London, UK)", "Dr. R. Sankar (National Taiwan University, Taiwan)", "Dr. R.R. Sumathi (Ludwig Maximilians University, Germany)", "Dr. Lu-Chung Chuang (Institute for Materials Research, Japan)", "Dr. Hesham Nabiel (Al Azhar University, Egypt)", "Dr. T. Shanmugam (WFBR, Netherlands)", "Dr. P. Manimuthu (Ariel University, Israel)", "Dr. M. Subramanian (Dornier Seawings GmbH, Germany)", "Dr. Ashok Kumar Kaliamurthy (Angstrom Laboratory, Uppsala University, Sweden)", "Dr. Shanmugam Vignesh (Yeungnam University, S. Korea)", "Dr. N. Elavarasan (Chulalongkorn University, Thailand)", "Dr. S. Sanmugavel (Lulea University of Technology, Sweden)", "Dr. R. Naveen Kumar (Technical University of Kosice, Slovakia)"
];

const natScientificRaw = [
  "Dr. S. Bhala Murugan (Physical Research Lab., Ahmedabad)", "Dr. I. Panneer Muthuselvam (University of Delhi)", "Dr. Sarath Chandra Veerla (SR University, Warangal)", "Dr. Muthu Senthil Pandian (SSN Institutions, Chennai)", "Mr. Morrison (Laser Spectra Services India Pvt. Ltd., Bengaluru)", "Dr. Shivappa B. Gudennavar (Christ University, Bengaluru)", "Dr. R. Ramesh (Periyar University, Salem)", "Dr. B.S. Sreeja (Anna University, Chennai)", "Dr. S. Murugavel (University of Delhi)", "Dr. K. Sethuraman (Central University of Tamil Nadu)", "Dr. T. Prakesh (University of Madras)", "Dr. Sunil Verma (DAE-RRCAT, Indore)", "Dr. P. Suresh (IIT Hyderabad)", "Dr. Raja Mitra (IIT Goa)", "Dr. R. Arunkumar (NIT Warangal)", "Dr. Shubhadip Chakraborty (GITAM University Bengaluru)", "Dr. S.C. Vanithakumari (IGCAR Kalpakkam)", "Dr. C. Justin Raj (VIT Chennai)", "Dr. P. Samuel (VIT University Vellore)", "Dr. K. Sakthipandi (SRM Institute of Science and Technology)", "Dr. Prasanta Das (Ganpat University, Gujarat)", "Dr. V. Shally (Holy Cross College, Nagercoil)", "Dr. M. Arunkumar (KKGA College, Tiruvannamalai)", "Dr. M. Syed Ali (Thiruvalluvar University, Vellore)"
];

function toMembers(raw: string[], roleLabel: string): Member[] {
  return raw.map((item) => {
    const parts = item.split('(');
    const name = parts[0].trim();
    const inst = parts.length > 1 ? parts[1].replace(')', '').trim() : '';
    return { name, role: roleLabel, inst };
  });
}

const advisory = toMembers(advisoryRaw, 'Advisory Committee');
const intScientific = toMembers(intScientificRaw, 'International Scientific Committee');
const natScientific = toMembers(natScientificRaw, 'National Scientific Committee');

interface Category {
  id: string;
  title: string;
  icon: typeof Atom;
  items: Member[];
  accent: 'primary' | 'secondary';
  dense?: boolean;
}

const categories: Category[] = [
  { id: 'patrons', title: 'Patrons', icon: ShieldCheck, items: patrons, accent: 'primary' },
  { id: 'chairs', title: 'Chairpersons', icon: Users, items: chairs, accent: 'secondary' },
  { id: 'conveners', title: 'Conveners', icon: Atom, items: conveners, accent: 'primary' },
  { id: 'secretaries', title: 'Organizing Secretaries', icon: FlaskConical, items: secretaries, accent: 'secondary' },
  { id: 'advisory', title: 'Advisory Committee', icon: GraduationCap, items: advisory, accent: 'primary', dense: true },
  { id: 'intl-scientific', title: 'International Scientific Committee', icon: Globe2, items: intScientific, accent: 'secondary', dense: true },
  { id: 'natl-scientific', title: 'National Scientific Committee', icon: Dna, items: natScientific, accent: 'primary', dense: true },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

function MemberCard({ item, dense, accent }: { item: Member; dense?: boolean; accent: 'primary' | 'secondary' }) {
  const glow = accent === 'primary' ? '0_0_25px_rgba(0,212,255,0.25)' : '0_0_25px_rgba(167,139,250,0.25)';
  return (
    <motion.div variants={cardVariants} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
      <TiltCard className="h-full">
        <div
          className={`glass-card ${dense ? 'p-5' : 'p-6 md:p-8'} rounded-2xl h-full border border-white/5 hover:border-primary/50 transition-all duration-300 group cursor-default hover:shadow-[${glow}]`}
        >
          <div className={`font-display ${dense ? 'text-base' : 'text-lg'} font-bold text-white mb-2 group-hover:text-primary transition-colors leading-snug`}>
            {item.name}
          </div>
          {!dense && (
            <div className="text-xs text-primary/80 mb-3 font-semibold tracking-wider uppercase">{item.role}</div>
          )}
          {item.inst && (
            <div className={`${dense ? 'text-xs' : 'text-sm'} text-white/60 leading-relaxed`}>{item.inst}</div>
          )}
        </div>
      </TiltCard>
    </motion.div>
  );
}

function CategoryBlock({ category, index }: { category: Category; index: number }) {
  const Icon = category.icon;
  const accentColor = category.accent === 'primary' ? 'text-primary' : 'text-secondary';
  const accentBg = category.accent === 'primary' ? 'bg-primary' : 'bg-secondary';
  const accentBorder = category.accent === 'primary' ? 'border-primary/40' : 'border-secondary/40';

  return (
    <div className="relative">
      {/* watermark icon behind section */}
      <Icon
        className={`hidden md:block absolute -top-10 -right-6 w-40 h-40 ${accentColor} opacity-[0.05] pointer-events-none`}
        strokeWidth={0.8}
      />

      {/* timeline node (desktop) */}
      <div className="hidden md:flex absolute -left-[52px] top-2 flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.4 }}
          className={`w-4 h-4 rounded-full ${accentBg} shadow-[0_0_12px_currentColor] ${accentColor} ring-4 ring-background z-10`}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className={`w-10 h-10 rounded-xl glass-card flex items-center justify-center border ${accentBorder}`}>
            <Icon className={`w-5 h-5 ${accentColor}`} />
          </div>
          <h3 className="text-2xl font-display font-bold text-white">{category.title}</h3>
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.15 }}
            style={{ transformOrigin: 'left' }}
            className={`flex-1 h-px ${category.accent === 'primary' ? 'bg-gradient-to-r from-primary/60 to-transparent' : 'bg-gradient-to-r from-secondary/60 to-transparent'}`}
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={`grid gap-5 ${
            category.dense
              ? 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {category.items.map((item, i) => (
            <MemberCard key={i} item={item} dense={category.dense} accent={category.accent} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function Committee() {
  return (
    <section id="committee" className="py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-primary/90 mb-6"
          >
            <Users className="w-3.5 h-3.5" /> The People Behind ICRIMST
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Organizing <span className="text-gradient">Committee</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            style={{ transformOrigin: 'center' }}
            className="h-[2px] w-40 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* connecting vertical timeline line, desktop only */}
          <div className="hidden md:block absolute left-[-40px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-white/10 to-secondary/40" />

          <div className="space-y-28 md:pl-4">
            {categories.map((category, index) => (
              <CategoryBlock key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
