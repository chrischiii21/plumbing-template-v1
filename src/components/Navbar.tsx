import * as React from "react" // Hydration fix trigger
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { 
  Menu, X, ChevronDown, Phone, Settings, DollarSign, 
  Utensils, Bath, Droplet, Waves, Flame, Pipette,
  Building, Zap, Shield, Search, AlertCircle, Filter,
  Leaf, ClipboardList, Info
} from "lucide-react"
import { topNavItems, mainNavItems, quickActions, type MegaMenuItem, type NavItem as NavItemType } from "@/config/navigation"
const siteConfig = {
  "business": {
    "name": "Plumbing Template",
    "fullName": "ABC Company Heating and Cooling",
    "tagline": "Heating and Cooling",
    "description": "Professional HVAC Services"
  },
  "location": {
    "city": "New York",
    "state": "SC",
    "address": "3648 Rorance Road",
    "fullAddress": "3648 Rorance Road, New York, SC 29170"
  },
  "contact": {
    "email": "dealer@domain.com",
    "phone": "0123456789",
    "phoneFormatted": "012-345-6789"
  },
  "logo": {
    "src": "https://ntv-template-1.vercel.app/logo/dealer-logo.avif",
    "alt": "Acme Inc. Logo"
  }
}

const iconMap: Record<string, React.ReactNode> = {
  utensils: <Utensils className="h-4 w-4" />,
  bath: <Bath className="h-4 w-4" />,
  droplet: <Droplet className="h-4 w-4" />,
  waves: <Waves className="h-4 w-4" />,
  flame: <Flame className="h-4 w-4" />,
  pipette: <Pipette className="h-4 w-4" />,
  building: <Building className="h-4 w-4" />,
  zap: <Zap className="h-4 w-4" />,
  shield: <Shield className="h-4 w-4" />,
  search: <Search className="h-4 w-4" />,
  alert: <AlertCircle className="h-4 w-4" />,
  filter: <Filter className="h-4 w-4" />,
  leaf: <Leaf className="h-4 w-4" />,
  clipboard: <ClipboardList className="h-4 w-4" />,
  settings: <Settings className="h-4 w-4" />,
}

function UtilityLink({ item }: { item: NavItemType }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div 
      className="relative flex items-center h-full"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <a 
        href={item.href} 
        className={`text-[11px] font-black uppercase tracking-[0.15em] transition-all px-4 py-2 rounded-full relative z-50 inline-flex items-center gap-2 active:scale-95 ${isOpen ? 'text-[#3B82F6] bg-[#3B82F6]/5' : 'text-[#1C398E]/90 hover:text-[#3B82F6] hover:bg-[#3B82F6]/5'}`}
        style={{ fontFamily: 'JetBrains Mono, monospace' }}
      >
        {item.title}
        {hasChildren && <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'opacity-40'}`} />}
      </a>

      {hasChildren && isOpen && (
        <>
          <div className="absolute top-full left-0 w-full h-4 bg-transparent z-[110]" />
          <div className="absolute top-[calc(100%+8px)] left-0 bg-white shadow-clayFloating rounded-[24px] p-4 min-w-[220px] z-[120] border border-[#3B82F6]/5 animate-in fade-in slide-in-from-top-2 duration-300">
            <ul className="space-y-1">
              {item.children?.map((child) => (
                <li key={child.href}>
                  <a 
                    href={child.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-[11px] font-bold text-[#1C398E]/60 hover:text-[#3B82F6] hover:bg-[#3B82F6]/5 transition-all group/item"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]/20 group-hover/item:bg-[#3B82F6] transition-colors" />
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

function NavItem({ item }: { item: MegaMenuItem }) {
  const [isOpen, setIsOpen] = React.useState(false)
  
  return (
    <div 
      className="relative h-full flex items-center shrink-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className={`flex items-center gap-2 px-4 h-full text-[11px] font-[900] uppercase tracking-[0.1em] transition-all cursor-pointer group whitespace-nowrap ${isOpen ? 'text-[#3B82F6]' : 'text-[#1C398E] hover:text-[#3B82F6]'}`}>
        <a href={item.href} className="relative z-10">{item.title}</a>
        <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isOpen ? 'rotate-180 opacity-100' : 'opacity-20 group-hover:opacity-100'}`} />
      </div>

      {/* Invisible bridge to prevent closing when moving to dropdown */}
      {isOpen && <div className="absolute top-full left-0 w-full h-24 bg-transparent z-[40]" />}

      {isOpen && (
        <div className="fixed top-[120px] md:top-[160px] left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-3xl shadow-clayFloating p-8 z-[50] w-[96vw] max-w-[1500px] rounded-[40px] border border-[#3B82F6]/5 animate-in fade-in zoom-in-95 duration-300 overflow-hidden">
          <div className="flex flex-col gap-8">
            {/* Header info bar - More compact */}
            <div className="flex items-center border-b border-[#3B82F6]/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6]">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-black text-[#1C398E] uppercase tracking-tighter leading-none mb-1">Our {item.title}</h2>
                  <p className="text-[10px] font-bold text-[#1C398E]/30 uppercase tracking-widest">Select a category to explore</p>
                </div>
              </div>
            </div>

            {/* High-density Grid Layout - Single row priority */}
            <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 ${
              item.categories.length >= 6 ? 'lg:grid-cols-6' : 
              item.categories.length === 5 ? 'lg:grid-cols-5' : 
              'lg:grid-cols-4'
            }`}>
              {item.categories.map((category) => (
                <div key={category.title} className="bg-[#f8faff] rounded-[28px] p-4 lg:p-5 shadow-clayInner group/cat hover:shadow-clayButton transition-all duration-500 flex flex-col h-full border border-transparent hover:border-[#3B82F6]/10">
                  <a 
                    href={category.href || "#"} 
                    className="flex items-center gap-3 mb-4 pb-3 border-b border-[#3B82F6]/5 group/head cursor-pointer"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white shadow-clayButton flex items-center justify-center text-[#3B82F6] group-hover/cat:scale-110 group-hover/cat:rotate-6 transition-all duration-500 shrink-0">
                      {iconMap[category.icon] || <Settings className="h-4 w-4" />}
                    </div>
                    <h3 className="text-[10px] font-black text-[#1C398E] uppercase tracking-widest leading-tight line-clamp-2 group-hover/head:text-[#3B82F6] transition-colors">{category.title}</h3>
                  </a>
                  <ul className="space-y-2.5 flex-grow">
                    {category.items.map((child) => (
                      <li key={child.href}>
                        <a 
                          href={child.href} 
                          className="text-[12px] font-semibold text-[#1C398E]/70 hover:text-[#3B82F6] hover:translate-x-1 transition-all block relative pl-3 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-[#3B82F6]/0 hover:before:bg-[#3B82F6] before:transition-all" 
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {child.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500 overflow-visible">
      {/* Container with global responsive padding */}
      <div className="mx-auto w-full max-w-[1920px] px-3 sm:px-4 md:px-6 xl:px-8 py-2 md:py-4">
        
        {/* Main Puffy Container */}
        <div className="bg-white/90 backdrop-blur-xl rounded-[28px] md:rounded-[40px] shadow-clayHeader border border-white/50 relative overflow-visible">
          
          {/* Top Utility Row - Hidden on mobile/tablet to save space */}
          <div className="hidden xl:flex items-center justify-between px-10 py-3 border-b border-[#3B82F6]/5">
            <div className="flex items-center gap-8">
              {topNavItems.map((item) => (
                <UtilityLink key={item.href} item={item} />
              ))}
            </div>
            <div className="flex items-center gap-6">
              {quickActions.map((action) => (
                <a 
                  key={action.href} 
                  href={action.href} 
                  className={`group relative px-6 py-2.5 rounded-[18px] text-[10px] font-[900] uppercase tracking-[0.2em] flex items-center gap-3 transition-all duration-500 active:scale-95 z-50
                    ${action.icon === "settings" 
                      ? "bg-[#3B82F6] text-white shadow-clayButton hover:bg-[#2563EB] hover:-translate-y-0.5" 
                      : "bg-[#D97706] text-white shadow-clayAmber hover:bg-[#B45309] hover:-translate-y-0.5"
                    }`}
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {action.icon === "settings" ? <Settings className="w-3.5 h-3.5" /> : <DollarSign className="w-3.5 h-3.5" />}
                  <span>{action.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Main Content Row */}
          <div className="flex items-center justify-between px-4 md:px-10 h-16 md:h-24 relative z-10">
            
            {/* Logo Section */}
            <a href="/" className="flex items-center gap-3 md:gap-5 group shrink-0 relative z-20">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-[#f8faff] rounded-[16px] md:rounded-[24px] shadow-clayInner flex items-center justify-center p-2 md:p-3 group-hover:shadow-clayButton transition-all duration-500">
                <img src={siteConfig.logo?.src} alt="Logo" className="w-full h-full object-contain" width={64} height={64} />
              </div>
              <div className="flex flex-col">
                <span className="font-[900] text-xs md:text-xl text-[#1C398E] leading-none uppercase tracking-tighter" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {siteConfig.business?.name}
                </span>
                <span className="hidden sm:block text-[8px] md:text-[9px] font-black text-[#3B82F6] uppercase tracking-[0.3em] mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Expert Plumbing</span>
              </div>
            </a>

            {/* Desktop Navigation - xl and up */}
            <nav className="hidden xl:flex items-center flex-nowrap h-14 px-2 bg-[#f8faff]/50 rounded-full shadow-clayInner border border-[#3B82F6]/5 mx-8 relative z-20 overflow-visible">
              {mainNavItems.map((item) => (
                <NavItem key={item.href} item={item} />
              ))}
            </nav>

            {/* Action Hub */}
            <div className="flex items-center gap-2 md:gap-6 relative z-20">
              {/* Phone Action */}
              <a href={`tel:${siteConfig.contact?.phone}`} className="flex items-center gap-3 bg-[#f8faff] p-2 md:pl-3 md:pr-8 md:py-2.5 rounded-full shadow-clayInner group hover:shadow-clayButton hover:bg-white transition-all duration-500">
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-[#16A34A] shadow-clayButton flex items-center justify-center text-white group-hover:rotate-12 transition-transform shrink-0">
                  <Phone className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <div className="hidden md:flex flex-col">
                  <span className="text-[9px] font-black text-[#1C398E]/40 uppercase tracking-[0.2em] leading-none mb-1">24/7 Service</span>
                  <span className="text-sm md:text-lg font-[900] text-[#1C398E] group-hover:text-[#3B82F6] transition-colors whitespace-nowrap">{siteConfig.contact?.phoneFormatted}</span>
                </div>
              </a>

              {/* Get Quote - Hidden on very small screens, or scaled down */}
              <a 
                href="/contact" 
                className="hidden sm:flex bg-[#3B82F6] text-white px-6 md:px-10 h-10 md:h-14 rounded-[16px] md:rounded-[20px] shadow-clayButton items-center justify-center text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] hover:brightness-105 hover:-translate-y-1 transition-all active:scale-95"
              >
                Get Quote
              </a>

              {/* Mobile Menu Trigger - Visible below xl */}
              <div className="xl:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-[#f8faff] shadow-clayInner text-[#1C398E] hover:bg-white hover:shadow-clayButton transition-all ml-2">
                      <Menu className="w-5 h-5 md:w-6 md:h-6" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-full sm:max-w-md bg-white border-l-0 rounded-l-[40px] shadow-clayFloating p-0 overflow-hidden z-[1000] [&>button[type=button]]:hidden">

                    <SheetHeader className="p-8 border-b border-[#3B82F6]/5 bg-[#f8faff]">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-2xl shadow-clayButton flex items-center justify-center p-2">
                            <img src={siteConfig.logo?.src} alt="Logo" className="w-full h-full object-contain" width={64} height={64} />
                          </div>
                          <SheetTitle className="text-xl font-black text-[#1C398E] uppercase tracking-tighter">
                            {siteConfig.business?.name}
                          </SheetTitle>
                        </div>
                        
                        {/* Integrated High-Fidelity Close Button */}
                        <div className="z-[1100]">
                          <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="w-12 h-12 rounded-2xl bg-white shadow-clayButton text-[#1C398E] hover:text-[#3B82F6] hover:scale-110 transition-all active:scale-95 group">
                              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
                            </Button>
                          </SheetTrigger>
                        </div>
                      </div>
                    </SheetHeader>

                    <div className="p-8 overflow-y-auto max-h-[calc(100vh-120px)] space-y-8">
                      {/* Mobile Utility Actions */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        {quickActions.map((action) => (
                          <a 
                            key={action.href} 
                            href={action.href}
                            className={`flex flex-col items-center gap-3 p-5 rounded-[24px] transition-all active:scale-95 text-white ${
                              action.icon === "settings" 
                                ? "bg-[#3B82F6] shadow-clayButton" 
                                : "bg-[#D97706] shadow-clayAmber"
                            }`}
                          >
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                              {action.icon === "settings" ? <Settings className="w-4 h-4" /> : <DollarSign className="w-4 h-4" />}
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-center leading-tight">{action.title}</span>
                          </a>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-4 px-4 mb-8">
                        {topNavItems.map((item) => (
                          <a key={item.href} href={item.href} className="text-[12px] font-bold text-[#1C398E]/60 hover:text-[#3B82F6] transition-colors uppercase tracking-widest">
                            {item.title}
                          </a>
                        ))}
                      </div>

                      <div className="h-px bg-[#3B82F6]/5 mx-4 mb-8" />

                      {/* Mobile Navigation Links */}
                      <nav className="space-y-6">
                        {mainNavItems.map((item) => (
                          <div key={item.href} className="space-y-4">
                            <h4 className="text-[10px] font-black text-[#3B82F6] uppercase tracking-[0.4em] px-4">{item.title}</h4>
                            <div className="space-y-2">
                              {item.categories.map((cat) => (
                                <details key={cat.title} className="group">
                                  <summary className="flex items-center rounded-2xl hover:bg-[#f8faff] text-[#1C398E] font-bold text-sm transition-all cursor-pointer list-none [&::-webkit-details-marker]:hidden select-none">
                                    <a href={cat.href || "#"} className="flex items-center gap-4 p-4 flex-1 group/link" onClick={(e) => e.stopPropagation()}>
                                      <div className="w-8 h-8 rounded-xl bg-white shadow-clayInner flex items-center justify-center group-hover/link:shadow-clayButton text-[#3B82F6] shrink-0 transition-all">
                                        {iconMap[cat.icon] || <Leaf className="w-4 h-4" />}
                                      </div>
                                      <span className="group-hover/link:text-[#3B82F6] transition-colors">{cat.title}</span>
                                    </a>
                                    {cat.items && cat.items.length > 0 && (
                                      <div className="p-4 flex items-center justify-center shrink-0">
                                        <ChevronDown className="w-5 h-5 text-[#1C398E]/40 group-open:rotate-180 transition-transform" />
                                      </div>
                                    )}
                                  </summary>
                                  
                                  {cat.items && cat.items.length > 0 && (
                                    <div className="pl-16 pr-4 pb-4 pt-2 space-y-4 animate-in slide-in-from-top-2 duration-200">
                                      {cat.items.map((subItem) => (
                                        <a 
                                          key={subItem.href} 
                                          href={subItem.href} 
                                          className="block text-[12px] font-bold text-[#1C398E]/60 hover:text-[#3B82F6] transition-colors relative before:absolute before:-left-3 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:rounded-full before:bg-[#3B82F6]/30 hover:before:bg-[#3B82F6]"
                                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                                        >
                                          {subItem.title}
                                        </a>
                                      ))}
                                    </div>
                                  )}
                                </details>
                              ))}
                            </div>
                          </div>
                        ))}
                      </nav>

                      {/* Mobile Contact Action */}
                      <a href="/contact" className="w-full py-5 rounded-[24px] bg-[#3B82F6] text-white shadow-clayButton flex items-center justify-center text-[12px] font-black uppercase tracking-[0.3em] active:scale-95 transition-all">
                        Get Started Today
                      </a>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .shadow-clayHeader {
          box-shadow: 0 10px 30px rgba(28, 57, 142, 0.05);
        }
        .shadow-clayButton {
          box-shadow: 
            6px 6px 12px rgba(28, 57, 142, 0.08),
            -4px -4px 8px rgba(255, 255, 255, 1),
            inset 2px 2px 4px rgba(255, 255, 255, 0.6);
        }
        .shadow-clayInner {
          box-shadow: 
            inset 6px 6px 12px rgba(28, 57, 142, 0.04),
            inset -6px -6px 12px rgba(255, 255, 255, 1);
        }
        .shadow-clayFloating {
          box-shadow: 20px 20px 60px rgba(28, 57, 142, 0.1);
        }
        .shadow-clayDark {
          box-shadow: 
            8px 8px 16px rgba(28, 57, 142, 0.2),
            inset 2px 2px 4px rgba(255, 255, 255, 0.2),
            inset -2px -2px 4px rgba(0, 0, 0, 0.2);
        }
        .shadow-clayAmber {
          box-shadow: 
            8px 8px 16px rgba(245, 158, 11, 0.3),
            inset 2px 2px 4px rgba(255, 255, 255, 0.3),
            inset -2px -2px 4px rgba(0, 0, 0, 0.1);
        }
      `}} />
    </header>
  )
}

function MobileNav({ onClose }: { onClose: () => void }) {
  return (
    <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-100px)]">
      <a href={`tel:${siteConfig.contact?.phone}`} className="flex items-center gap-4 bg-white p-6 rounded-[32px] shadow-clayButton active:shadow-clayInner transition-all">
        <div className="w-14 h-14 rounded-full bg-[#16A34A] flex items-center justify-center text-white shadow-clayButton"><Phone className="h-7 w-7" /></div>
        <span className="font-black text-xl text-[#1C398E]">{siteConfig.contact?.phoneFormatted}</span>
      </a>
      <div className="space-y-3">
        {mainNavItems.map((item) => (
          <div key={item.href} className="space-y-2">
            <a href={item.href} onClick={onClose} className="block bg-white p-6 rounded-[24px] shadow-clayHeader font-black text-[#1C398E] uppercase tracking-wide hover:text-[#3B82F6] active:shadow-clayInner transition-all">{item.title}</a>
          </div>
        ))}
        {topNavItems.map((item) => (
          <a key={item.href} href={item.href} onClick={onClose} className="block bg-white p-4 rounded-[20px] shadow-clayInner font-bold text-[12px] text-[#1C398E]/60 uppercase tracking-widest">{item.title}</a>
        ))}
      </div>
      <a href="/contact" onClick={onClose} className="h-20 bg-[#3B82F6] rounded-[32px] shadow-clayButton flex items-center justify-center text-white font-black uppercase tracking-widest text-lg active:scale-95 transition-all">Get A Quote</a>
    </div>
  )
}
