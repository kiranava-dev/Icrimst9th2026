import logo from '@/assets/icrimst-logo.png';
import { Mail, MapPin, Phone, Building } from 'lucide-react';

const contacts = [
  { name: "Dr. M. Aravinthraj", area: "Physical and Chemical Sciences", phone: "9629100195" },
  { name: "Rev. Dr. T. Sathinathan", area: "Mathematics", phone: "+91 89405 91333" },
  { name: "Dr. S. Govindarajan", area: "Life Sciences", phone: "+91 98941 60116" }
];

export function Footer() {
  return (
    <footer id="contact" className="relative bg-black/40 border-t border-white/10 pt-20 pb-8 mt-20 z-10 backdrop-blur-sm">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <img src={logo} alt="ICRIMST Logo" className="w-14 h-14 object-contain filter brightness-200" />
              <div>
                <span className="font-display font-bold text-3xl tracking-tight text-white block mb-1">ICRIMST <span className="text-gradient">2026</span></span>
                <span className="text-[18px] md:text-[24px] font-bold text-white/50 tracking-[0.15em] uppercase">9th Edition · Platinum Jubilee</span>
              </div>
            </div>
            <p className="text-white/60 mb-8 text-sm leading-relaxed max-w-md">
              International Conference on Recent Innovations in Material Science and Technology. Organized by Elavenil-ISTA.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">Sacred Heart College (Autonomous), Tirupattur.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:icrimst2026@gmail.com" className="hover:text-white transition-colors font-medium">icrimst2026@gmail.com</a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 text-lg">Accommodation</h4>
            <div className="glass-card p-6 rounded-2xl border-white/10">
              <Building className="w-6 h-6 text-accent mb-4" />
              <p className="text-sm text-white/70 leading-relaxed">
                Accommodation available at Sacred Heart College hostels or nearby hotels, on payment basis upon prior request.
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 text-lg">Contact Persons</h4>
            <div className="space-y-6">
              {contacts.map((c, i) => (
                <div key={i} className="text-sm">
                  <div className="font-semibold text-white/90 mb-0.5">{c.name}</div>
                  <div className="text-xs text-white/50 mb-2 uppercase tracking-wider font-medium">{c.area}</div>
                  <div className="flex items-center gap-2 text-white/80 font-medium">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>{c.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mb-16">
          <h4 className="font-display font-bold text-white mb-6 text-lg flex items-center gap-3">
            <MapPin className="w-5 h-5 text-primary" />
            Venue Location
          </h4>
          <div className="rounded-2xl overflow-hidden border border-white/10 glass-card p-1.5">
            <iframe
              title="Sacred Heart College (Autonomous), Tirupattur — Map"
              src="https://maps.google.com/maps?q=Sacred%20Heart%20College%20Tirupattur&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-72 md:h-80 rounded-xl grayscale-[40%] contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium tracking-wide">
          <p>© 2026 ICRIMST. All rights reserved.</p>
          <p>Organized by Elavenil-ISTA & Sacred Heart College</p>
        </div>
      </div>
    </footer>
  );
}
