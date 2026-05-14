import { siteConfig } from "@/config/brand-settings"
import { Facebook, Mail, MapPin, Phone } from "lucide-react"

// X (Twitter) icon component
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { title: "HOME", href: "/" },
    { title: "ABOUT US", href: "/about" },
    { title: "SPECIALS", href: "/specials-and-offers" },
    { title: "MAINTENANCE PLAN", href: "/maintenance-plan" },
    { title: "FINANCING", href: "/financing" },
    { title: "REVIEWS", href: "/reviews" },
    { title: "CAREERS", href: "/careers" },
    { title: "SERVICES AREAS", href: "/service-areas" },
    { title: "CONTACT US", href: "/contact" },
  ]

  const servicesOffer = [
    { title: "RESIDENTIAL PLUMBING", href: "/residential-plumbing" },
    { title: "COMMERCIAL PLUMBING", href: "/commercial" },
    { title: "SPECIALTY SERVICES", href: "/specialty" },
    { title: "MAINTENANCE", href: "/maintenance" },
  ]

  return (
    <footer className="relative bg-[#1C398E] mt-24 rounded-t-[60px] overflow-visible shadow-clayDarkContainer">
      {/* Puffy Accent Circle behind the footer */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-[#3B82F6] rounded-full shadow-clayButton flex items-center justify-center text-white z-10 animate-bounce-slow">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7-7-7m14-8l-7 7-7-7" /></svg>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Us Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] font-black tracking-[0.2em] text-white/40 uppercase mb-6 flex items-center gap-3" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <span className="w-8 h-px bg-white/20"></span>
                About Us
              </h3>
              <p className="text-[15px] text-white/70 leading-relaxed font-medium mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                We specialize in high-fidelity residential and commercial plumbing solutions. From repairs to advanced leak detection, we keep your systems running smoothly.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="clay-social-btn" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="clay-social-btn" aria-label="X (Twitter)">
                <XIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${siteConfig.contact?.email}`} className="clay-social-btn" aria-label="Email Us">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="bg-white/5 rounded-[40px] p-8 shadow-clayInnerDark">
            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[13px] font-bold text-white/60 hover:text-[#3B82F6] hover:translate-x-1 transition-all inline-block uppercase tracking-wide"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="bg-white/5 rounded-[40px] p-8 shadow-clayInnerDark">
            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Services
            </h3>
            <ul className="space-y-3">
              {servicesOffer.map((service) => (
                <li key={service.href}>
                  <a
                    href={service.href}
                    className="text-[13px] font-bold text-white/60 hover:text-[#16A34A] hover:translate-x-1 transition-all inline-block uppercase tracking-wide"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-8">
            <h3 className="text-lg font-black text-white uppercase tracking-tight mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-[24px] shadow-clayInnerDark group hover:shadow-clayButton transition-all">
                <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center shadow-clayButton">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Call Us</p>
                  <p className="text-sm font-black text-white">{siteConfig.contact?.phoneFormatted}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-[24px] shadow-clayInnerDark group hover:shadow-clayButton transition-all">
                <div className="w-10 h-10 rounded-full bg-[#16A34A] flex items-center justify-center shadow-clayButton">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-white/40 uppercase tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Location</p>
                  <p className="text-sm font-black text-white">{siteConfig.location?.city}, {siteConfig.location?.state}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-bold text-white/20 uppercase tracking-[0.3em]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            © {currentYear} {siteConfig.business?.name} — All Rights Reserved
          </p>
          <div className="flex gap-4">
            <div className="px-4 py-1.5 rounded-full bg-[#16A34A]/20 text-[#16A34A] text-[9px] font-black uppercase tracking-widest shadow-clayInnerDark">
              Licensed & Insured
            </div>
            <div className="px-4 py-1.5 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] text-[9px] font-black uppercase tracking-widest shadow-clayInnerDark">
              24/7 Service
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .shadow-clayDarkContainer {
          box-shadow: 
            0 -20px 40px rgba(0,0,0,0.2),
            inset 0 10px 20px rgba(255,255,255,0.05);
        }
        .clay-social-btn {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 
            8px 8px 16px rgba(0,0,0,0.2),
            -4px -4px 8px rgba(255,255,255,0.05),
            inset 2px 2px 4px rgba(255,255,255,0.1),
            inset -2px -2px 4px rgba(0,0,0,0.1);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .clay-social-btn:hover {
          transform: translateY(-4px) scale(1.1);
          background: #3B82F6;
          box-shadow: 12px 12px 24px rgba(0,0,0,0.3);
        }
        .shadow-clayInnerDark {
          box-shadow: 
            inset 6px 6px 12px rgba(0,0,0,0.2),
            inset -4px -4px 8px rgba(255,255,255,0.05);
        }
        .shadow-clayButton {
          box-shadow: 
            6px 6px 12px rgba(0,0,0,0.2),
            -4px -4px 8px rgba(255,255,255,0.05),
            inset 2px 2px 4px rgba(255,255,255,0.2),
            inset -2px -2px 4px rgba(0,0,0,0.1);
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}} />
    </footer>
  )
}
